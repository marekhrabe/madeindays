/*!
 * Made in Days
 * http://madeindays.com/
 * team@madebysource.com
 * 
 * Copyright 2014 Made in Days - All Rights Reserved
 * 
 * Author:
 * Marek Hrabe <marekhrabe@abdoc.net> (http://github.com/marekhrabe)
 * 
 * Build v1.0.0 - 2014-04-06
 * 
 * Source code on GitHub: https://github.com/marekhrabe/madeindays
 */
window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}();var easeInOutQuad=function(a,b,c,d){return a/=d/2,1>a?c/2*a*a+b:(a--,-c/2*(a*(a-2)-1)+b)},animatedScrollTo=function(a,b,c){var d=a.scrollTop,e=b-d,f=+new Date,g=!0,h=null,i=function(){if(g){requestAnimFrame(i);var j=+new Date,k=Math.floor(easeInOutQuad(j-f,d,e,c));h?h===a.scrollTop?(h=k,a.scrollTop=k):g=!1:(h=k,a.scrollTop=k),j>f+c&&(a.scrollTop=b,g=!1)}};requestAnimFrame(i)};window.addEventListener("load",function(){document.body.classList.add("loaded")});var isMobile=!!navigator.userAgent.match(/mobile/i),scrolling=null,checkSize=function(){scrolling&&window.innerHeight<700&&(scrolling.destroy(),scrolling=null),!scrolling&&window.innerHeight>=700&&(scrolling=skrollr.init({forceHeight:!1,edgeStrategy:"set"}))};isMobile||(window.addEventListener("resize",checkSize),checkSize()),document.getElementById("buy").addEventListener("click",function(){document.getElementById("order").classList.add("active")});var imperial=["US","UK","CA"],measures=document.getElementById("measures");window.geolocated=function(a){a&&a.countryCode&&imperial.indexOf(a.countryCode)>-1&&measures.classList.add("imperial")},measures.addEventListener("click",function(){measures.classList.toggle("imperial")});