var isMobile = !!navigator.userAgent.match(/mobile/i);

// loading

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// skrollr responsive logic

var scrolling = null;
var checkSize = function () {
    if (scrolling && window.innerHeight < 700) {
        scrolling.destroy();
        scrolling = null;
    }
    if (!scrolling && window.innerHeight >= 700) {
        scrolling = skrollr.init({
            forceHeight: false,
            edgeStrategy: 'set',
        });
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
