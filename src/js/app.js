var isMobile = !!navigator.userAgent.match(/mobile/i);

var scrolling = null;
var checkSize = function () {
    if (scrolling && window.innerHeight < 700) {
        document.body.classList.remove('js');
        scrolling.destroy();
        scrolling = null;
    }
    if (!scrolling && window.innerHeight >= 700) {
        document.body.classList.add('js');
        scrolling = skrollr.init({
            forceHeight: false,
            edgeStrategy: 'set',
        });
    }
};

if (!isMobile) {
    window.addEventListener('resize', checkSize);
    checkSize();
}

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

document.getElementById('buy').addEventListener('click', function () {
    document.getElementById('order').classList.add('active');
});
