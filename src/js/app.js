(function () {
    var isMobile = !!navigator.userAgent.match(/(iphone|ipod|android)/i);

    // share data

    var url = encodeURIComponent('http://' + window.location.host + '/');
    var messages = {
        twitter: 'Handcrafted leather goods with personality. Which accessory was made for you? ',
    };

    // loading

    window.addEventListener('load', function () {
        // page fade-in

        document.body.classList.add('loaded');

        // instagram feed

        var feed = new Instafeed({
            get: 'user',
            userId: 961164036,
            accessToken: '961164036.467ede5.f6ffed6c5a564ad9a1355a6994ddcd37',
            limit: 6,
            template: '<a href="{{link}}" target="_blank"><img src="{{image}}"></a>',
        });
        feed.run();
    });

    // skrollr responsive logic

    var scrolling = null;
    var felt = document.getElementById('felt');
    var checkSize = function () {
        if (scrolling && window.innerHeight < 660) {
            scrolling.destroy();
            scrolling = null;
        }
        if (window.innerHeight >= 660) {
            if (!scrolling) {
                scrolling = skrollr.init({
                    forceHeight: false,
                    edgeStrategy: 'set',
                });
            }
            felt.style.marginTop = Math.floor((window.innerHeight - 565) / 2) + 'px';
        }
    };

    // activate skrollr only for non-mobile devices

    if (!isMobile) {
        window.addEventListener('resize', checkSize);
        checkSize();
    }

    // buy button

    var order = document.getElementById('order');
    document.getElementById('buy').addEventListener('click', function () {
        order.classList.add('active');
    });

    // close overlay

    var success = document.getElementById('success');
    var closeOverlays = function () {
        order.classList.remove('active');
        success.classList.remove('active');
    };
    window.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) {
            closeOverlays();
        }
    });

    // global click handlers

    window.addEventListener('click', function (e) {
        var target = e.target;
        if (target.tagName === 'A') {
            if (target.classList.contains('close')) {
                closeOverlays();
                e.preventDefault();
            } else if (target.classList.contains('share')) {
                var popup = 'height=320, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no';
                if (target.classList.contains('facebook')) {
                    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, 'facebook', popup);
                    e.preventDefault();
                } else if (target.classList.contains('twitter')) {
                    window.open('https://twitter.com/home?status=' + encodeURIComponent(messages.twitter) + ' ' + url, 'twitter', popup);
                    e.preventDefault();
                }
            }
        }
    });

    // measures and geolocation

    var imperial = ['US', 'UK', 'CA'];
    var measures = document.getElementById('measures');
    window.geolocated = function (data) {
        if (data && data.countryCode && imperial.indexOf(data.countryCode) > -1) {
            measures.classList.add('imperial');
        }
    };
    measures.addEventListener('click', function () {
        measures.classList.toggle('imperial');
    });

    // arrow

    document.getElementById('arrow').addEventListener('click', function () {
        var onScreen = window.scrollY / window.innerHeight;
        var nextScreen = 1;
        if (onScreen >= 1 && onScreen < 1.5) {
            nextScreen = 1.5;
        } else if (onScreen >= 1.5) {
            nextScreen = Math.floor(onScreen) + 1.5;
        }
        animatedScrollTo(document.body, Math.round(nextScreen * window.innerHeight), 1500);
    });

    // order form

    var formError = function () {
        formcontainer.classList.add('error');
        setTimeout(function () {
            formcontainer.classList.remove('error');
        }, 300);
    };

    var orderform = document.getElementById('orderform');
    var formcontainer = document.getElementById('formcontainer');
    orderform.addEventListener('submit', function (e) {
        e.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var content = document.getElementById('content').value;

        if (name && email && email.indexOf('@') > -1) {
            document.getElementById('buybutton').innerHTML = 'Sending';

            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://madeindays.herokuapp.com/email?email=' + encodeURIComponent(email) + '&name=' + encodeURIComponent(name) + '&content=' + encodeURIComponent(content));
            xhr.onload = function () {
                var data = JSON.parse(this.response);
                if (data.status && data.status === 'ok') {
                    closeOverlays();
                    setTimeout(function () {
                        success.classList.add('active');
                    });
                } else {
                    formError();
                }
            };
            xhr.send();
        } else {
            formError();
        }
    });

    window.priceData = function (data) {
        document.getElementById('priceTag').innerHTML = data.price;
        document.getElementById('piecesLeft').innerHTML = data.piecesLeft;
    };
})();
