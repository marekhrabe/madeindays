var isMobile = !!navigator.userAgent.match(/mobile/i);

// loading

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
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
