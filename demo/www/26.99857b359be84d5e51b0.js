(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{wHD8:function(i,t,o){"use strict";o.r(t),o.d(t,"ion_img",(function(){return c}));var n=o("1OyB"),e=o("vuIU"),r=o("sxy2"),s=o("N4tN"),c=function(){function i(t){var o=this;Object(n.a)(this,i),Object(r.q)(this,t),this.ionImgWillLoad=Object(r.i)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(r.i)(this,"ionImgDidLoad",7),this.ionError=Object(r.i)(this,"ionError",7),this.onLoad=function(){o.ionImgDidLoad.emit()},this.onError=function(){o.ionError.emit()}}return Object(e.a)(i,[{key:"srcChanged",value:function(){this.addIO()}},{key:"componentDidLoad",value:function(){this.addIO()}},{key:"addIO",value:function(){var i=this;void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver((function(t){t[0].isIntersecting&&(i.load(),i.removeIO())})),this.io.observe(this.el)):setTimeout((function(){return i.load()}),200))}},{key:"load",value:function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}},{key:"removeIO",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"render",value:function(){return Object(r.l)(r.c,{class:Object(s.b)(this)},Object(r.l)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))}},{key:"el",get:function(){return Object(r.m)(this)}}],[{key:"watchers",get:function(){return{src:["srcChanged"]}}}]),i}();c.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);