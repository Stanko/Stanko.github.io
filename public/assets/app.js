parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BbRw":[function(require,module,exports) {
var e=document.querySelector(".CommentForm"),t=document.querySelectorAll(".CommentForm-input"),n=document.querySelector(".CommentForm-input--slug"),o=document.querySelector(".CommentForm-input--optionsSlug"),r=document.querySelector(".CommentForm-input--name"),l=document.querySelector(".CommentForm-input--catch"),m=document.querySelector(".CommentForm-input--email"),u=document.querySelector(".CommentForm-input--message"),a=document.querySelector(".CommentForm-errorMessages"),s=document.querySelector(".CommentForm-sendFailed"),i=document.querySelector(".CommentForm-sendSucceeded"),c=document.querySelector(".CommentForm-overlay");function d(e,t,n,o){var r=new XMLHttpRequest;r.open("POST",e),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.onload=function(){200===r.status?n(r.responseText):200!==r.status&&o(r.responseText)},r.send(encodeURI(t))}e&&e.addEventListener("submit",function(y){y.preventDefault(),a.innerHTML="",s.style.display="none",i.style.display="none";var p=n.value.trim(),v=o.value.trim(),S=r.value.trim(),f=l.value.trim(),C=m.value.trim(),g=u.value.trim(),q=localStorage.getItem("__s_p__"),F=!1,_=[],b=["bully","bullies","bullying","abuser","violent","criminal"];if(""===p||p!==v||""!==f)return!1;if(S.length<2&&(F=!0,_.push("Please enter name")),-1===C.search(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)&&(F=!0,_.push("Please enter valid email")),g.length<2&&(F=!0,_.push("Please enter message")),F)return a.innerHTML=_.join("<br>"),!1;for(var h=0;h<b.length;h++){var w=b[h];if(q||S.toLowerCase().indexOf(w)>=0||C.toLowerCase().indexOf(w)>=0||g.toLowerCase().indexOf(w)>=0)return e.reset(),localStorage.setItem("__s_p__","_"),i.style.display="block",!1}for(var x=[],L=0;L<t.length;L++){var T=t[L];x.push("".concat(T.name,"=").concat(T.value))}c.style.display="flex",d(y.target.getAttribute("data-action"),x.join("&"),function(t){e.reset(),i.style.display="block",c.style.display="none"},function(e){s.style.display="block",c.style.display="none"})});
},{}],"g0To":[function(require,module,exports) {
!function(){var n={};window.fuzzy=n;var t="<strong>";n.simpleFilter=function(t,e){return e.filter(function(e){return n.test(t,e)})},n.test=function(t,e){return null!==n.match(t,e)},n.match=function(n,e,r){var i=(r=r||{}).pre||"<strong>",o=r.post||"</strong>",c=r.caseSensitive&&e||e.toLowerCase(),l=function n(e,r,i){if(0===e.length||0===r.length||e.length>r.length)return[r];for(var o=[],c=0;c<r.length;c++)if(e[0]===i[c]){var l=t+r[c]+"</strong>",s=n(e.slice(1),r.slice(c+1),i.slice(c+1));s=s.map(function(n){return r.slice(0,c)+l+n}),o[o.length]=s}return[].concat.apply([],o)}(n=r.caseSensitive&&n||n.toLowerCase(),e,c).filter(function(e){return e.split(t).length-1===n.length});return 0===l.length?null:l.map(function(n){return{rendered:n.split(t).join(i).split("</strong>").join(o),score:(e=n,e.split(t).length-1+10*(e.split("</strong>"+t).length-1))};var e}).reduce(function(n,t){return n.score>t.score?n:t})},n.filter=function(t,e,r){return e&&0!==e.length?"string"!=typeof t?e:(r=r||{},e.reduce(function(e,i,o,c){var l=i;r.extract&&(l=r.extract(i));var s=n.match(t,l,r);return null!=s&&(e[e.length]={string:s.rendered,score:s.score,index:o,original:i}),e},[]).sort(function(n,t){var e=t.score-n.score;return e||n.index-t.index})):[]}}();
},{}],"knic":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},t=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(l,r){function i(e){try{a(o.next(e))}catch(t){r(t)}}function c(e){try{a(o.throw(e))}catch(t){r(t)}}function a(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(i,c)}a((o=o.apply(e,t||[])).next())})},n=this&&this.__generator||function(e,t){var n,o,l,r,i={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(r){return function(c){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(l=2&r[0]?o.return:r[0]?o.throw||((l=o.return)&&l.call(o),0):o.next)&&!(l=l.call(o,r[1])).done)return l;switch(o=0,l&&(r=[2&r[0],l.value]),r[0]){case 0:case 1:l=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,o=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(l=(l=i.trys).length>0&&l[l.length-1])&&(6===r[0]||2===r[0])){i=0;continue}if(3===r[0]&&(!l||r[1]>l[0]&&r[1]<l[3])){i.label=r[1];break}if(6===r[0]&&i.label<l[1]){i.label=l[1],l=r;break}if(l&&i.label<l[2]){i.label=l[2],i.ops.push(r);break}l[2]&&i.ops.pop(),i.trys.pop();continue}r=t.call(e,i)}catch(c){r=[6,c],o=0}finally{n=l=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,c])}}};function o(e){var t=0,n=0,o=e;do{t+=o.offsetTop||0,n+=o.offsetLeft||0,o=o.offsetParent}while(o);return{top:t,left:n}}Object.defineProperty(exports,"__esModule",{value:!0});var l=function(){function e(e){this.element=e}return e.prototype.getHorizontalScroll=function(){return this.element.scrollLeft},e.prototype.getVerticalScroll=function(){return this.element.scrollTop},e.prototype.getMaxHorizontalScroll=function(){return this.element.scrollWidth-this.element.clientWidth},e.prototype.getMaxVerticalScroll=function(){return this.element.scrollHeight-this.element.clientHeight},e.prototype.getHorizontalElementScrollOffset=function(e,t){return o(e).left-o(t).left},e.prototype.getVerticalElementScrollOffset=function(e,t){return o(e).top-o(t).top},e.prototype.scrollTo=function(e,t){this.element.scrollLeft=e,this.element.scrollTop=t},e}(),r=function(){function e(){}return e.prototype.getHorizontalScroll=function(){return window.scrollX||document.documentElement.scrollLeft},e.prototype.getVerticalScroll=function(){return window.scrollY||document.documentElement.scrollTop},e.prototype.getMaxHorizontalScroll=function(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)-window.innerWidth},e.prototype.getMaxVerticalScroll=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight},e.prototype.getHorizontalElementScrollOffset=function(e){return(window.scrollX||document.documentElement.scrollLeft)+e.getBoundingClientRect().left},e.prototype.getVerticalElementScrollOffset=function(e){return(window.scrollY||document.documentElement.scrollTop)+e.getBoundingClientRect().top},e.prototype.scrollTo=function(e,t){window.scrollTo(e,t)},e}(),i={elements:[],cancelMethods:[],add:function(e,t){i.elements.push(e),i.cancelMethods.push(t)},remove:function(e,t){void 0===t&&(t=!0);var n=i.elements.indexOf(e);n>-1&&(t&&i.cancelMethods[n](),i.elements.splice(n,1),i.cancelMethods.splice(n,1))}},c="undefined"!=typeof window,a={cancelOnUserAction:!0,easing:function(e){return--e*e*e+1},elementToScroll:c?window:null,horizontalOffset:0,maxDuration:3e3,minDuration:250,speed:500,verticalOffset:0};function u(o,u){return void 0===u&&(u={}),t(this,void 0,void 0,function(){var t,s,f,m,d,p,h,w,g,y,S,v,b,T,E,x;return n(this,function(n){if(!c)return[2,new Promise(function(e){e(!1)})];if(!window.Promise)throw"Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill.";if(m=e(e({},a),u),d=m.elementToScroll===window,p=!!m.elementToScroll.nodeName,!d&&!p)throw"Element to scroll needs to be either window or DOM element.";if(h=d?new r:new l(m.elementToScroll),o instanceof Element){if(f=o,p&&(!m.elementToScroll.contains(f)||m.elementToScroll.isSameNode(f)))throw"options.elementToScroll has to be a parent of scrollToElement";t=h.getHorizontalElementScrollOffset(f,m.elementToScroll),s=h.getVerticalElementScrollOffset(f,m.elementToScroll)}else if("number"==typeof o)t=h.getHorizontalScroll(),s=o;else{if(!Array.isArray(o)||2!==o.length)throw"Wrong function signature. Check documentation.\nAvailable method signatures are:\n  animateScrollTo(y:number, options)\n  animateScrollTo([x:number | null, y:number | null], options)\n  animateScrollTo(scrollToElement:Element, options)";t=null===o[0]?h.getHorizontalScroll():o[0],s=null===o[1]?h.getVerticalScroll():o[1]}return t+=m.horizontalOffset,s+=m.verticalOffset,w=h.getMaxHorizontalScroll(),g=h.getHorizontalScroll(),t>w&&(t=w),y=t-g,S=h.getMaxVerticalScroll(),v=h.getVerticalScroll(),s>S&&(s=S),b=s-v,T=Math.abs(Math.round(y/1e3*m.speed)),E=Math.abs(Math.round(b/1e3*m.speed)),(x=T>E?T:E)<m.minDuration?x=m.minDuration:x>m.maxDuration&&(x=m.maxDuration),[2,new Promise(function(e,n){var o;0===y&&0===b&&e(!0),i.remove(m.elementToScroll,!0);var l=function(){u(),cancelAnimationFrame(o),e(!1)};i.add(m.elementToScroll,l);var r=m.cancelOnUserAction?l:function(e){return e.preventDefault()},c=m.cancelOnUserAction?{passive:!0}:{passive:!1},a=["wheel","touchstart","keydown","mousedown"],u=function(){a.forEach(function(e){m.elementToScroll.removeEventListener(e,r,c)})};a.forEach(function(e){m.elementToScroll.addEventListener(e,r,c)});var f=Date.now(),d=function(){var n=Date.now()-f,l=n/x,r=Math.round(g+y*m.easing(l)),c=Math.round(v+b*m.easing(l));n<x&&(r!==t||c!==s)?(h.scrollTo(r,c),o=requestAnimationFrame(d)):(h.scrollTo(t,s),cancelAnimationFrame(o),u(),i.remove(m.elementToScroll,!1),e(!0))};o=requestAnimationFrame(d)})]})})}exports.default=u,c&&(window.animateScrollTo=u);
},{}],"AO1H":[function(require,module,exports) {
"use strict";var e=t(require("animated-scroll-to"));function t(e){return e&&e.__esModule?e:{default:e}}var o=document.querySelector(".Header-jumpToContent"),r=document.querySelector(".Footer-jumpToTop");o&&o.addEventListener("click",function(t){(0,e.default)(document.querySelector(".Header").offsetHeight,{maxDuration:500})}),r&&r.addEventListener("click",function(t){(0,e.default)(0,{maxDuration:500})});
},{"animated-scroll-to":"knic"}],"VgNd":[function(require,module,exports) {
var i={8:{id:"delete"},9:{id:"tab"},13:{id:"enter"},16:{id:"shift",checkSide:!0},17:{id:"control",checkSide:!0},18:{id:"alt",checkSide:!0},20:{id:"capsLock"},27:{id:"esc"},32:{id:"space"},37:{id:"arrowLeft"},38:{id:"arrowUp"},39:{id:"arrowRight"},40:{id:"arrowDown"},46:{id:"delete"},48:{id:"0"},49:{id:"1"},50:{id:"2"},51:{id:"3"},52:{id:"4"},53:{id:"5"},54:{id:"6"},55:{id:"7"},56:{id:"8"},57:{id:"9"},58:{id:"semicolon"},59:{id:"equals"},60:{id:"comma"},61:{id:"equals"},64:{id:"2"},65:{id:"a"},66:{id:"b"},67:{id:"c"},68:{id:"d"},69:{id:"e"},70:{id:"f"},71:{id:"g"},72:{id:"h"},73:{id:"i"},74:{id:"j"},75:{id:"k"},76:{id:"l"},77:{id:"m"},78:{id:"n"},79:{id:"o"},80:{id:"p"},81:{id:"q"},82:{id:"r"},83:{id:"s"},84:{id:"t"},85:{id:"u"},86:{id:"v"},87:{id:"w"},88:{id:"x"},89:{id:"y"},90:{id:"z"},91:{id:"cmdLeft"},92:{id:"cmdRight"},93:{id:"cmdRight"},96:{id:"0"},97:{id:"1"},98:{id:"2"},99:{id:"3"},100:{id:"4"},101:{id:"5"},102:{id:"6"},103:{id:"7"},104:{id:"8"},105:{id:"9"},106:{id:"8"},107:{id:"equals"},108:{id:"dot"},109:{id:"minus"},110:{id:"dot"},111:{id:"slash"},112:{id:"f1"},113:{id:"f2"},114:{id:"f3"},115:{id:"f4"},116:{id:"f5"},117:{id:"f6"},118:{id:"f7"},119:{id:"f8"},120:{id:"f9"},121:{id:"f10"},122:{id:"f11"},123:{id:"f12"},124:{id:"f13"},125:{id:"f14"},126:{id:"f15"},127:{id:"f16"},128:{id:"f17"},129:{id:"f18"},130:{id:"f19"},131:{id:"f20"},132:{id:"f21"},133:{id:"f22"},134:{id:"f23"},135:{id:"f24"},160:{id:"6"},161:{id:"1"},163:{id:"3"},164:{id:"4"},165:{id:"u"},168:{id:"f5"},169:{id:"0"},170:{id:"8"},171:{id:"tilde"},173:{id:"minus"},174:{id:"f10"},175:{id:"f11"},179:{id:"f8"},181:{id:"f10"},182:{id:"f11"},183:{id:"f12"},186:{id:"semicolon"},187:{id:"equals"},188:{id:"comma"},189:{id:"minus"},190:{id:"dot"},191:{id:"slash"},192:{id:"tilde"},193:{id:"slash"},194:{id:"dot"},219:{id:"squareBracketLeft"},220:{id:"backslash"},221:{id:"squareBracketRight"},222:{id:"apostrophe"},223:{id:"tilde"},224:{id:"cmd",checkSide:!0},225:{id:"altRight"},231:{id:"c"}};function d(d){var e=i[d.keyCode];if(e&&e.id){var t="#Key--".concat(e.id);return e.checkSide&&KeyboardEvent&&(d.location===KeyboardEvent.DOM_KEY_LOCATION_LEFT?t+="Left":d.location===KeyboardEvent.DOM_KEY_LOCATION_RIGHT&&(t+="Right")),document.querySelector(t)}}function e(){for(var i=document.querySelectorAll(".Key--active"),d=0;d<i.length;d++)i[d].setAttribute("class","Key")}document.addEventListener("keydown",function(i){var e=d(i);e&&e.setAttribute("class","Key Key--active")}),document.addEventListener("keyup",function(i){var e=d(i);e&&e.setAttribute("class","Key")}),window.addEventListener("blur",e);
},{}],"DCbj":[function(require,module,exports) {
"use strict";var e=t(require("animated-scroll-to"));function t(e){return e&&e.__esModule?e:{default:e}}var r=document.querySelector(".Post-commentsLink"),a=document.querySelector(".Post-bg--archive"),n=document.querySelectorAll(".Expandable-toggle"),o=document.querySelectorAll(".SideNote-trigger");if(r&&r.addEventListener("click",function(t){t.preventDefault(),(0,e.default)(document.querySelector("#comments"),{maxDuration:500})}),a){var l=Math.floor(2*Math.random())+0,c=a.getAttribute("data-src").replace("ID",l);a.setAttribute("src",c)}for(var i=0;i<n.length;++i){var s=n[i];s.addEventListener("click",function(e){var t=e.currentTarget,r=t.parentElement.nextElementSibling.style;"none"===r.display||""===r.display?(t.classList.add("Expandable-toggle--open"),r.display="block"):(t.classList.remove("Expandable-toggle--open"),r.display="none")})}for(var d=0;d<o.length;++d){var u=o[d];u.addEventListener("click",function(e){var t=e.currentTarget;-1===t.className.search("SideNote-toggle--open")?t.classList.add("SideNote-toggle--open"):t.classList.remove("SideNote-toggle--open")})}
},{"animated-scroll-to":"knic"}],"zfSF":[function(require,module,exports) {
var e={extract:function(e){return e.title}},t=document.querySelector(".MenuModal"),n=document.querySelector(".MenuModal-input"),l=document.querySelector(".MenuModal-menu"),o=document.querySelectorAll(".MenuModal-toggle"),r=document.querySelector(".MenuModal-results"),u=document.querySelector("html"),i="",c=null,s=1;function a(e,t){return"<a href='".concat(t,"' class='MenuModal-result'><div class='Container'>").concat(e,"</div></a>")}for(var d=500,v=0,f=0;f<o.length;f++){var y=o[f];y.addEventListener("click",function(){clearTimeout(c),"none"!==t.style.display&&t.style.display?(u.classList.remove("Html--menuActive"),u.classList.remove("Html--overflowHidden"),window.scrollTo(0,v),c=setTimeout(function(){t.style.display="none"},d)):(t.style.display="block",v=window.pageYOffset||document.documentElement.scrollTop,c=setTimeout(function(){u.classList.toggle("Html--menuActive"),n.focus(),c=setTimeout(function(){u.classList.toggle("Html--overflowHidden")},d)},30))})}var m={UP:38,DOWN:40};n.addEventListener("keydown",function(e){var t=null;e.keyCode===m.DOWN?t=r.querySelector("a:first-child"):e.keyCode===m.UP&&(t=r.querySelector("a:last-child")),t&&(e.preventDefault(),t.focus())}),n.addEventListener("keyup",function(t){var o=n.value.trim();if(i!==o){if(l.style.display=o.length>0?"none":"",o.length<s)return r.innerHTML="",void(i="");var u=fuzzy.filter(o,posts,e);u.length?function(){var e=u.map(function(e){return a(e.string,e.original.url)}).join("");r.innerHTML=e;for(var t=document.querySelectorAll(".MenuModal-result"),n=function(e){t[e].addEventListener("keydown",function(n){var l=null;n.keyCode===m.DOWN?l=t[e+1]:n.keyCode===m.UP&&(l=t[e-1]),l&&(n.preventDefault(),l.focus())})},l=0;l<t.length;l++)n(l)}():r.innerHTML='<div class="MenuModal-noResults"><div class="Container">No results</div></div>',i=o}});
},{}],"ZssB":[function(require,module,exports) {
"use strict";var t=e(require("animated-scroll-to"));function e(t){return t&&t.__esModule?t:{default:t}}function n(){var e=window.location.hash.replace("#/","");if(e){var n=document.querySelector("#posts-".concat(e)),i=document.querySelector("#section-".concat(e));n&&(n.style.height="auto",n.setAttribute("open",1),window.location.hash="",(0,t.default)(i))}}function i(t,e){var n="1"===t.getAttribute("open");"1"===t.getAttribute("animating")||(t.style.height="".concat(e.offsetHeight,"px"),t.setAttribute("animating",1),n?(setTimeout(function(){t.style.height=0,setTimeout(function(){t.setAttribute("animating",0)},o)},30),t.setAttribute("open",0)):(t.setAttribute("open",1),setTimeout(function(){t.style.height="auto",t.setAttribute("animating",0)},o)))}n();for(var o=500,r=document.querySelectorAll(".Archive-title a"),u=0;u<r.length;u++){var a=r[u];a.addEventListener("click",function(t){t.preventDefault();var e=t.currentTarget.parentElement.nextElementSibling,n=e.querySelector(".Archive-postsContent");i(e,n)})}
},{"animated-scroll-to":"knic"}],"eiQN":[function(require,module,exports) {
var define;
var n;(function(){var t=null,e=0,o=!1,i="undefined"!=typeof window;var r=function(){if(i&&"function"==typeof window.addEventListener){var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}}),e=function(){};return window.addEventListener("TEST_PASSIVE_EVENT_SUPPORT",e,t),window.removeEventListener("TEST_PASSIVE_EVENT_SUPPORT",e,t),n}return!1}(),l=i&&"function"==typeof window.CustomEvent;function s(){return"undefined"==typeof window?null:(e++,t||(t=this,this.handleScroll=this.handleScroll.bind(this),this.eventListenerOptions=!r||{passive:!0},void window.addEventListener("scroll",this.handleScroll,this.eventListenerOptions)))}s.prototype.removeListener=function(){0===--e&&this.destroy()},s.prototype.destroy=function(){window.removeEventListener("scroll",this.handleScroll,this.eventListenerOptions),t=null,e=0},s.prototype.getScrollPosition=function(){var n=window.scrollY||document.documentElement.scrollTop,t=window.scrollX||document.documentElement.scrollLeft;return n<0&&(n=0),t<0&&(t=0),{scrollPosition:n,scrollPositionY:n,scrollPositionX:t}},s.prototype.handleScroll=function(){var n;o||(o=!0,l?n=new CustomEvent("window-scroll",{detail:this.getScrollPosition()}):(n=document.createEvent("CustomEvent")).initCustomEvent("window-scroll",!1,!1,this.getScrollPosition()),window.dispatchEvent(n),window.requestAnimationFrame(function(){o=!1}))},"undefined"!=typeof module&&module.exports?(s.default=s,module.exports=s):"function"==typeof n&&"object"==typeof n.amd&&n.amd?n("window-scroll-manager",[],function(){return s}):window.ScrollManager=s}).call(this);
},{}],"S1Q6":[function(require,module,exports) {
"use strict";var e=t(require("window-scroll-manager"));function t(e){return e&&e.__esModule?e:{default:e}}var r=new e.default,o=document.querySelector(".Header-title"),n=document.querySelector(".Header-about");window.addEventListener("window-scroll",function(e){var t=window.innerHeight;if(e.detail.scrollPosition<t){var r="translateY(-".concat(e.detail.scrollPosition/4,"px)"),i=1-e.detail.scrollPosition/t;o.style.transform=r,o.style.opacity=i,n&&(n.style.transform=r)}});
},{"window-scroll-manager":"eiQN"}],"KIaA":[function(require,module,exports) {
var n=document.querySelectorAll(".Post h2, .Post h3, .Post h4, .Post h5");n&&n.forEach(function(n){n.innerHTML='<a href="#'.concat(n.id,'" class="Post-headerAnchor">\n        <img src="/public/img/link.svg" />\n      </a>').concat(n.innerHTML)});
},{}],"rrhY":[function(require,module,exports) {

},{"./../public/fonts/MarvinVisions-Bold.eot":[["MarvinVisions-Bold.540cdcec.eot","i5IF"],"i5IF"],"./../public/fonts/MarvinVisions-Bold.woff2":[["MarvinVisions-Bold.41f98e1d.woff2","JJn8"],"JJn8"],"./../public/fonts/MarvinVisions-Bold.woff":[["MarvinVisions-Bold.f726c220.woff","MxfW"],"MxfW"],"./../public/fonts/Merriweather-Regular.eot":[["Merriweather-Regular.b388b9d6.eot","P1kI"],"P1kI"],"./../public/fonts/Merriweather-Regular.woff2":[["Merriweather-Regular.3b06654b.woff2","lXAc"],"lXAc"],"./../public/fonts/Merriweather-Regular.woff":[["Merriweather-Regular.3224f437.woff","ixGm"],"ixGm"],"./../public/fonts/Merriweather-Bold.eot":[["Merriweather-Bold.87adc407.eot","I9SL"],"I9SL"],"./../public/fonts/Merriweather-Bold.woff2":[["Merriweather-Bold.6e181f29.woff2","RYXp"],"RYXp"],"./../public/fonts/Merriweather-Bold.woff":[["Merriweather-Bold.89857016.woff","lWsH"],"lWsH"],"./../public/fonts/Merriweather-Light.eot":[["Merriweather-Light.91e03a53.eot","UnWK"],"UnWK"],"./../public/fonts/Merriweather-Light.woff2":[["Merriweather-Light.f1d400c1.woff2","kYVA"],"kYVA"],"./../public/fonts/Merriweather-Light.woff":[["Merriweather-Light.5a2c6085.woff","aB6i"],"aB6i"],"./../public/img/notebook.jpg":[["notebook.108c1d6e.jpg","JAhx"],"JAhx"]}],"A2T1":[function(require,module,exports) {
"use strict";require("./comments"),require("./fuzzy"),require("./jump"),require("./keyboard"),require("./post"),require("./search"),require("./archive"),require("./parallax"),require("./header-anchors"),require("../sass/style.scss");
},{"./comments":"BbRw","./fuzzy":"g0To","./jump":"AO1H","./keyboard":"VgNd","./post":"DCbj","./search":"zfSF","./archive":"ZssB","./parallax":"S1Q6","./header-anchors":"KIaA","../sass/style.scss":"rrhY"}]},{},["A2T1"], null)