!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["alanngai-js-utils"]=t():e["alanngai-js-utils"]=t()}(this,(()=>(()=>{"use strict";var e={45:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function n(e,t,r){var n=new Date;n.setTime(n.getTime()+24*r*60*60*1e3);var o="expires="+n.toGMTString();document.cookie=e+"="+t+";"+o}t.default={isMobile:function(){return!!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)},isWxwork:function(){var e=navigator.userAgent.toLowerCase();return!("micromessenger"!=e.match(/MicroMessenger/i))&&("wxwork"==e.match(/WxWork/i)?"is_wxwork":"is_wx")},formatNumDoubleLen:function(e){return e>=0&&e<10?"0"+e:e},formatDateInPattern:function(e,t){if(0===arguments.length||!e)return null;var n=t||"{y}-{m}-{d} {h}:{i}:{s}",o=void 0;"object"===(void 0===e?"undefined":r(e))?o=e:("string"==typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"==typeof e&&10===e.toString().length&&(e*=1e3),o=new Date(e));var i={y:o.getFullYear(),m:o.getMonth()+1,d:o.getDate(),h:o.getHours(),i:o.getMinutes(),s:o.getSeconds(),a:o.getDay()},a=n.replace(/{(y|m|d|h|i|s|a)+}/g,(function(e,t){var r=i[t];return"a"===t?["日","一","二","三","四","五","六"][r]:(e.length>0&&r<10&&(r="0"+r),r||0)}));return a},setCookie:n,getCookie:function(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){var o=r[n].trim();if(0===o.indexOf(t))return o.substring(t.length,o.length)}return""},deleteCookie:function(e){n(e,"",-1)},accMul:function(e,t){var r=0,n=e.toString(),o=t.toString(),i=n.split(".")[1],a=o.split(".")[1];return(i=i?i.length:0)&&(r+=i),(a=a?a.length:0)&&(r+=a),Number(n.replace(".",""))*Number(o.replace(".",""))/Math.pow(10,r)},accDiv:function(e,t){if(e&&t){var r=0,n=e.toString(),o=t.toString(),i=n.split(".")[1],a=o.split(".")[1];return(i=i?i.length:0)&&(r+=i),(a=a?a.length:0)&&(r+=a),(Number(n.replace(".",""))/Number(o.replace(".",""))/Math.pow(10,r)).toFixed(3).slice(0,-1)}return"0.00"},copyObjDeep:function e(t){var n=Array.isArray(t)?[]:{};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&("object"===r(t[o])&&null!==t[o]?n[o]=e(t[o]):n[o]=t[o]);return n},deepClone:function e(t){function r(e){return Object.prototype.toString.call(e).slice(8,-1)}var n=r(t),o=void 0;if("Array"===n)o=[];else{if("Object"!==n)return t;o={}}for(var i in t)if(t.hasOwnProperty(i)){var a=r(t[i]);o[i]="Array"!==a&&"Object"!==a?t[i]:e(t[i])}return o},getObjFromLocalStorageByKey:function(e,t){var r=window.localStorage.getItem(e),n=t;if(r)try{n=JSON.parse(r)}catch(r){console.warn("get value from local storage by key:"+e+" fail, remain:",t)}return n},uniqObjArrayByKey:function(e,t){return e.filter((function(e,r,n){return n.findIndex((function(r){return r[t]==e[t]}))===r}))},isAndroid:function(){var e=window.navigator.userAgent;return e.indexOf("Android")>-1||e.indexOf("Linux")>-1},getTime:function(e){return new Date(Date.parse(e.replace("-","/"))).getTime()},findLastIndex:function(e,t,r){for(var n=e.length-1;n>=0;n--){var o=e[n];if(t.call(r,o,n,e))return n}return-1}},e.exports=t.default}},t={};return function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}(45)})()));