/*! Qoopido.js library 3.7.2, 2015-08-05 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(t){window.qoopido.register("polyfill/string/trim",t)}(function(t,r,i,n,o,e,p){"use strict";if(!String.prototype.trim){var u=new RegExp("^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$","g");String.prototype.trim=function(){return this.replace(u,"")}}return String.prototype.trim});