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
window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}();var easeInOutQuad=function(a,b,c,d){return a/=d/2,1>a?c/2*a*a+b:(a--,-c/2*(a*(a-2)-1)+b)},animatedScrollTo=function(a,b,c){var d=a.scrollTop,e=b-d,f=+new Date,g=!0,h=null,i=function(){if(g){requestAnimFrame(i);var j=+new Date,k=Math.floor(easeInOutQuad(j-f,d,e,c));h?h===a.scrollTop?(h=k,a.scrollTop=k):g=!1:(h=k,a.scrollTop=k),j>f+c&&(a.scrollTop=b,g=!1)}};requestAnimFrame(i)};!function(){var a=!!navigator.userAgent.match(/mobile/i);window.addEventListener("load",function(){document.body.classList.add("loaded");var a=new Instafeed({get:"user",userId:961164036,accessToken:"961164036.467ede5.f6ffed6c5a564ad9a1355a6994ddcd37",limit:6,template:'<a href="{{link}}" target="_blank"><img src="{{image}}"></a>'});a.run()});var b=null,c=document.getElementById("felt"),d=function(){b&&window.innerHeight<700&&(b.destroy(),b=null),window.innerHeight>=700&&(b||(b=skrollr.init({forceHeight:!1,edgeStrategy:"set"})),c.style.marginTop=Math.floor((window.innerHeight-565)/2)+"px")};a||(window.addEventListener("resize",d),d()),document.getElementById("buy").addEventListener("click",function(){document.getElementById("order").classList.add("active")});var e=function(){document.getElementById("order").classList.remove("active")};document.getElementById("close").addEventListener("click",e),window.addEventListener("keydown",function(a){27===a.keyCode&&e()});var f=["US","UK","CA"],g=document.getElementById("measures");window.geolocated=function(a){a&&a.countryCode&&f.indexOf(a.countryCode)>-1&&g.classList.add("imperial")},g.addEventListener("click",function(){g.classList.toggle("imperial")}),document.getElementById("arrow").addEventListener("click",function(){var a=window.scrollY/window.innerHeight,b=1;a>=1&&1.5>a?b=1.5:a>=1.5&&(b=Math.floor(a)+1.5),animatedScrollTo(document.body,Math.round(b*window.innerHeight),1500)})}(),function(){var a,b;a=function(){function a(a,b){var c,d;if(this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1},"object"==typeof a)for(c in a)d=a[c],this.options[c]=d;this.context=null!=b?b:this,this.unique=this._genKey()}return a.prototype.hasNext=function(){return"string"==typeof this.context.nextUrl&&this.context.nextUrl.length>0},a.prototype.next=function(){return this.hasNext()?this.run(this.context.nextUrl):!1},a.prototype.run=function(b){var c,d,e;if("string"!=typeof this.options.clientId&&"string"!=typeof this.options.accessToken)throw new Error("Missing clientId or accessToken.");if("string"!=typeof this.options.accessToken&&"string"!=typeof this.options.clientId)throw new Error("Missing clientId or accessToken.");return null!=this.options.before&&"function"==typeof this.options.before&&this.options.before.call(this),"undefined"!=typeof document&&null!==document&&(e=document.createElement("script"),e.id="instafeed-fetcher",e.src=b||this._buildUrl(),c=document.getElementsByTagName("head"),c[0].appendChild(e),d="instafeedCache"+this.unique,window[d]=new a(this.options,this),window[d].unique=this.unique),!0},a.prototype.parse=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;if("object"!=typeof a){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(200!==a.meta.code){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,a.meta.error_message),!1;throw new Error("Error from Instagram: "+a.meta.error_message)}if(0===a.data.length){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}if(null!=this.options.success&&"function"==typeof this.options.success&&this.options.success.call(this,a),this.context.nextUrl="",null!=a.pagination&&(this.context.nextUrl=a.pagination.next_url),"none"!==this.options.sortBy)switch(o="random"===this.options.sortBy?["","random"]:this.options.sortBy.split("-"),n="least"===o[0]?!0:!1,o[1]){case"random":a.data.sort(function(){return.5-Math.random()});break;case"recent":a.data=this._sortBy(a.data,"created_time",n);break;case"liked":a.data=this._sortBy(a.data,"likes.count",n);break;case"commented":a.data=this._sortBy(a.data,"comments.count",n);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}if("undefined"!=typeof document&&null!==document&&this.options.mock===!1){if(i=a.data,null!=this.options.limit&&i.length>this.options.limit&&(i=i.slice(0,this.options.limit+1||9e9)),c=document.createDocumentFragment(),null!=this.options.filter&&"function"==typeof this.options.filter&&(i=this._filter(i,this.options.filter)),null!=this.options.template&&"string"==typeof this.options.template){for(e="",g="",k="",p=document.createElement("div"),q=0,t=i.length;t>q;q++)f=i[q],h=f.images[this.options.resolution].url,this.options.useHttp||(h=h.replace("http://","//")),g=this._makeTemplate(this.options.template,{model:f,id:f.id,link:f.link,image:h,caption:this._getObjectProperty(f,"caption.text"),likes:f.likes.count,comments:f.comments.count,location:this._getObjectProperty(f,"location.name")}),e+=g;for(p.innerHTML=e,w=[].slice.call(p.childNodes),r=0,u=w.length;u>r;r++)m=w[r],c.appendChild(m)}else for(s=0,v=i.length;v>s;s++)f=i[s],j=document.createElement("img"),j.src=f.images[this.options.resolution].url,this.options.links===!0?(b=document.createElement("a"),b.href=f.link,b.appendChild(j),c.appendChild(b)):c.appendChild(j);document.getElementById(this.options.target).appendChild(c),d=document.getElementsByTagName("head")[0],d.removeChild(document.getElementById("instafeed-fetcher")),l="instafeedCache"+this.unique,window[l]=void 0;try{delete window[l]}catch(x){}}return null!=this.options.after&&"function"==typeof this.options.after&&this.options.after.call(this),!0},a.prototype._buildUrl=function(){var a,b,c;switch(a="https://api.instagram.com/v1",this.options.get){case"popular":b="media/popular";break;case"tagged":if("string"!=typeof this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");b="tags/"+this.options.tagName+"/media/recent";break;case"location":if("number"!=typeof this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");b="locations/"+this.options.locationId+"/media/recent";break;case"user":if("number"!=typeof this.options.userId)throw new Error("No user specified. Use the 'userId' option.");if("string"!=typeof this.options.accessToken)throw new Error("No access token. Use the 'accessToken' option.");b="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return c=""+a+"/"+b,c+=null!=this.options.accessToken?"?access_token="+this.options.accessToken:"?client_id="+this.options.clientId,null!=this.options.limit&&(c+="&count="+this.options.limit),c+="&callback=instafeedCache"+this.unique+".parse"},a.prototype._genKey=function(){var a;return a=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)},""+a()+a()+a()+a()},a.prototype._makeTemplate=function(a,b){var c,d,e,f,g;for(d=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,c=a;d.test(c);)e=c.match(d)[1],f=null!=(g=this._getObjectProperty(b,e))?g:"",c=c.replace(d,""+f);return c},a.prototype._getObjectProperty=function(a,b){var c,d;for(b=b.replace(/\[(\w+)\]/g,".$1"),d=b.split(".");d.length;){if(c=d.shift(),!(null!=a&&c in a))return null;a=a[c]}return a},a.prototype._sortBy=function(a,b,c){var d;return d=function(a,d){var e,f;return e=this._getObjectProperty(a,b),f=this._getObjectProperty(d,b),c?e>f?1:-1:f>e?1:-1},a.sort(d.bind(this)),a},a.prototype._filter=function(a,b){var c,d,e,f,g;for(c=[],e=function(a){return b(a)?c.push(a):void 0},f=0,g=a.length;g>f;f++)d=a[f],e(d);return c},a}(),b="undefined"!=typeof exports&&null!==exports?exports:window,b.Instafeed=a}.call(this);