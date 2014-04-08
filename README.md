# Made in Days

Based on [website-base](https://github.com/marekhrabe/website-base) devstack

© 2014 Made in Days. All rights reserved.

## Tech breakdown

### Compilation process

- I'm using grunt tasks based on my [website-base](https://github.com/marekhrabe/website-base)
- HTML, JS and LESS files are compiled and agresively compressed to be served as fast as possible
- Small enough images (mostly SVGs) are embedded in CSS file as base64
- PNGs are optimized by [TinyPNG](https://tinypng.com/)
- All resource locations are automatically replaced by their copy on CDN

### Libraries used

- [skrollr](https://github.com/Prinzhorn/skrollr) for scrolling effects
- [LESS Hat](http://lesshat.madebysource.com/) for making my LESS crossbrowser compatibile
- [Instafeed.js](http://instafeedjs.com/) for making a simple instagram feed in footer
- [animatedScrollTo.js](https://gist.github.com/marekhrabe/9449737) for making a cross-modern-browser animated scrolling without dependencies on any library

### Little big details

- Page is loaded with just logo shown and the only thing that it is waiting for is the main photo. The rest of huge photos is loaded afterwards, so loading seems pretty fast
- Website is not that huge even when it includes a lot of hi-res graphics. It fits on two floppy drives, if it is still a thing :D
- At the page load, user is geolocated by his IP address (to prevent geolocation security dialog) and based on location, he is served with dimensions in inches or centimeters

![dimensions](https://upx.cz/RUw)

- If screen is too small for things to fit, media queries are resizing content and if screen is even smaller, dynamic scrolling is deactivated and good old linear scroll is used
- On mobile (tested on iPhone), the viewport is set to have width of 800px, so the web looks like on desktop, but slightly smaller. There was no need to make extra mobile version or bunch of media queries resizing and repositioning everything
- I experimented with shake animation as a sign of error when submitting order form. Based on feedback it works pretty well
- Header is changing color to be allways in contrast with scrolled content
