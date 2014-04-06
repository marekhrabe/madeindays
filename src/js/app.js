(function () {
    var isMobile = !!navigator.userAgent.match(/mobile/i);

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
        if (scrolling && window.innerHeight < 700) {
            scrolling.destroy();
            scrolling = null;
        }
        if (window.innerHeight >= 700) {
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

    document.getElementById('buy').addEventListener('click', function () {
        document.getElementById('order').classList.add('active');
    });

    // close overlay

    var closeOverlay = function () {
        document.getElementById('order').classList.remove('active');
    };
    document.getElementById('close').addEventListener('click', closeOverlay);
    window.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) {
            closeOverlay();
        }
    })

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
})();
