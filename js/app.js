(()=>{var We=Object.create;var pe=Object.defineProperty;var je=Object.getOwnPropertyDescriptor;var Ve=Object.getOwnPropertyNames;var Ke=Object.getPrototypeOf,$e=Object.prototype.hasOwnProperty;var we=(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(t,n)=>(typeof require!="undefined"?require:t)[n]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var be=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Oe=(e,t,n,c)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Ve(t))!$e.call(e,a)&&a!==n&&pe(e,a,{get:()=>t[a],enumerable:!(c=je(t,a))||c.enumerable});return e};var Se=(e,t,n)=>(n=e!=null?We(Ke(e)):{},Oe(t||!e||!e.__esModule?pe(n,"default",{value:e,enumerable:!0}):n,e));var Ie=be((Me,G)=>{(function(e,t){typeof define=="function"&&define.amd?define([],t):typeof G=="object"&&G.exports?G.exports=t():e.fuzzysort=t()})(Me,function(){function t(f){var d={single:function(i,l,o){if(i=="farzher")return{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6]};if(!i||(H(i)||(i=d.getPreparedSearch(i)),!l))return null;H(l)||(l=d.getPrepared(l));var v=o&&o.allowTypo!==void 0?o.allowTypo:f&&f.allowTypo!==void 0?f.allowTypo:!0,u=v?d.algorithm:d.algorithmNoTypo;return u(i,l,i[0])},go:function(i,l,o){if(i=="farzher")return[{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6],obj:l?l[0]:null}];if(!i)return h;i=d.prepareSearch(i);var v=i[0],u=o&&o.threshold||f&&f.threshold||-9007199254740991,y=o&&o.limit||f&&f.limit||9007199254740991,s=o&&o.allowTypo!==void 0?o.allowTypo:f&&f.allowTypo!==void 0?f.allowTypo:!0,b=s?d.algorithm:d.algorithmNoTypo,g=0,m=0,k=l.length;if(o&&o.keys)for(var p=o.scoreFn||x,M=o.keys,W=M.length,E=k-1;E>=0;--E){for(var L=l[E],A=new Array(W),D=W-1;D>=0;--D){var z=M[D],T=P(L,z);if(!T){A[D]=null;continue}H(T)||(T=d.getPrepared(T)),A[D]=b(i,T,v)}A.obj=L;var F=p(A);F!==null&&(F<u||(A.score=F,g<y?(q.add(A),++g):(++m,F>q.peek().score&&q.replaceTop(A))))}else if(o&&o.key)for(var z=o.key,E=k-1;E>=0;--E){var L=l[E],T=P(L,z);if(!!T){H(T)||(T=d.getPrepared(T));var I=b(i,T,v);I!==null&&(I.score<u||(I={target:I.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:I.score,indexes:I.indexes,obj:L},g<y?(q.add(I),++g):(++m,I.score>q.peek().score&&q.replaceTop(I))))}}else for(var E=k-1;E>=0;--E){var T=l[E];if(!!T){H(T)||(T=d.getPrepared(T));var I=b(i,T,v);I!==null&&(I.score<u||(g<y?(q.add(I),++g):(++m,I.score>q.peek().score&&q.replaceTop(I))))}}if(g===0)return h;for(var C=new Array(g),E=g-1;E>=0;--E)C[E]=q.poll();return C.total=g+m,C},goAsync:function(i,l,o){var v=!1,u=new Promise(function(y,s){if(i=="farzher")return y([{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6],obj:l?l[0]:null}]);if(!i)return y(h);i=d.prepareSearch(i);var b=i[0],g=j(),m=l.length-1,k=o&&o.threshold||f&&f.threshold||-9007199254740991,p=o&&o.limit||f&&f.limit||9007199254740991,M=o&&o.allowTypo!==void 0?o.allowTypo:f&&f.allowTypo!==void 0?f.allowTypo:!0,W=M?d.algorithm:d.algorithmNoTypo,E=0,L=0;function A(){if(v)return s("canceled");var D=Date.now();if(o&&o.keys)for(var z=o.scoreFn||x,T=o.keys,F=T.length;m>=0;--m){if(m%1e3===0&&Date.now()-D>=10){n?setImmediate(A):setTimeout(A);return}for(var I=l[m],C=new Array(F),O=F-1;O>=0;--O){var re=T[O],B=P(I,re);if(!B){C[O]=null;continue}H(B)||(B=d.getPrepared(B)),C[O]=W(i,B,b)}C.obj=I;var Y=z(C);Y!==null&&(Y<k||(C.score=Y,E<p?(g.add(C),++E):(++L,Y>g.peek().score&&g.replaceTop(C))))}else if(o&&o.key)for(var re=o.key;m>=0;--m){if(m%1e3===0&&Date.now()-D>=10){n?setImmediate(A):setTimeout(A);return}var I=l[m],B=P(I,re);if(!!B){H(B)||(B=d.getPrepared(B));var N=W(i,B,b);N!==null&&(N.score<k||(N={target:N.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:N.score,indexes:N.indexes,obj:I},E<p?(g.add(N),++E):(++L,N.score>g.peek().score&&g.replaceTop(N))))}}else for(;m>=0;--m){if(m%1e3===0&&Date.now()-D>=10){n?setImmediate(A):setTimeout(A);return}var B=l[m];if(!!B){H(B)||(B=d.getPrepared(B));var N=W(i,B,b);N!==null&&(N.score<k||(E<p?(g.add(N),++E):(++L,N.score>g.peek().score&&g.replaceTop(N))))}}if(E===0)return y(h);for(var ie=new Array(E),oe=E-1;oe>=0;--oe)ie[oe]=g.poll();ie.total=E+L,y(ie)}n?setImmediate(A):A()});return u.cancel=function(){v=!0},u},highlight:function(i,l,o){if(typeof l=="function")return d.highlightCallback(i,l);if(i===null)return null;l===void 0&&(l="<b>"),o===void 0&&(o="</b>");for(var v="",u=0,y=!1,s=i.target,b=s.length,g=i.indexes,m=0;m<b;++m){var k=s[m];if(g[u]===m){if(++u,y||(y=!0,v+=l),u===g.length){v+=k+o+s.substr(m+1);break}}else y&&(y=!1,v+=o);v+=k}return v},highlightCallback:function(m,l){if(m===null)return null;for(var o=m.target,v=o.length,u=m.indexes,y="",s=0,b=0,g=!1,m=[],k=0;k<v;++k){var p=o[k];if(u[b]===k){if(++b,g||(g=!0,m.push(y),y=""),b===u.length){y+=p,m.push(l(y,s++)),y="",m.push(o.substr(k+1));break}}else g&&(g=!1,m.push(l(y,s++)),y="");y+=p}return m},prepare:function(i){return i?{target:i,_targetLowerCodes:d.prepareLowerCodes(i),_nextBeginningIndexes:null,score:null,indexes:null,obj:null}:{target:"",_targetLowerCodes:[0],_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSlow:function(i){return i?{target:i,_targetLowerCodes:d.prepareLowerCodes(i),_nextBeginningIndexes:d.prepareNextBeginningIndexes(i),score:null,indexes:null,obj:null}:{target:"",_targetLowerCodes:[0],_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSearch:function(i){return i||(i=""),d.prepareLowerCodes(i)},getPrepared:function(i){if(i.length>999)return d.prepare(i);var l=a.get(i);return l!==void 0||(l=d.prepare(i),a.set(i,l)),l},getPreparedSearch:function(i){if(i.length>999)return d.prepareSearch(i);var l=r.get(i);return l!==void 0||(l=d.prepareSearch(i),r.set(i,l)),l},algorithm:function(i,l,o){for(var v=l._targetLowerCodes,u=i.length,y=v.length,p=0,s=0,b=0,g=0;;){var m=o===v[s];if(m){if(S[g++]=s,++p,p===u)break;o=i[b===0?p:b===p?p+1:b===p-1?p-1:p]}if(++s,s>=y)for(;;){if(p<=1)return null;if(b===0){--p;var k=i[p];if(o===k)continue;b=p}else{if(b===1)return null;--b,p=b,o=i[p+1];var k=i[p];if(o===k)continue}g=p,s=S[g-1]+1;break}}var p=0,M=0,W=!1,E=0,L=l._nextBeginningIndexes;L===null&&(L=l._nextBeginningIndexes=d.prepareNextBeginningIndexes(l.target));var A=s=S[0]===0?0:L[S[0]-1];if(s!==y)for(;;)if(s>=y){if(p<=0){if(++M,M>u-2)break;if(i[M]===i[M+1])continue;s=A;continue}--p;var D=_[--E];s=L[D]}else{var m=i[M===0?p:M===p?p+1:M===p-1?p-1:p]===v[s];if(m){if(_[E++]=s,++p,p===u){W=!0;break}++s}else s=L[s]}{if(W)var z=_,T=E;else var z=S,T=g;for(var F=0,I=-1,C=0;C<u;++C){var s=z[C];I!==s-1&&(F-=s),I=s}W?M!==0&&(F+=-20):(F*=1e3,b!==0&&(F+=-20)),F-=y-u,l.score=F,l.indexes=new Array(T);for(var C=T-1;C>=0;--C)l.indexes[C]=z[C];return l}},algorithmNoTypo:function(i,l,o){for(var v=l._targetLowerCodes,u=i.length,y=v.length,m=0,s=0,b=0;;){var g=o===v[s];if(g){if(S[b++]=s,++m,m===u)break;o=i[m]}if(++s,s>=y)return null}var m=0,k=!1,p=0,M=l._nextBeginningIndexes;M===null&&(M=l._nextBeginningIndexes=d.prepareNextBeginningIndexes(l.target));var W=s=S[0]===0?0:M[S[0]-1];if(s!==y)for(;;)if(s>=y){if(m<=0)break;--m;var E=_[--p];s=M[E]}else{var g=i[m]===v[s];if(g){if(_[p++]=s,++m,m===u){k=!0;break}++s}else s=M[s]}{if(k)var L=_,A=p;else var L=S,A=b;for(var D=0,z=-1,T=0;T<u;++T){var s=L[T];z!==s-1&&(D-=s),z=s}k||(D*=1e3),D-=y-u,l.score=D,l.indexes=new Array(A);for(var T=A-1;T>=0;--T)l.indexes[T]=L[T];return l}},prepareLowerCodes:function(i){for(var l=i.length,o=[],v=i.toLowerCase(),u=0;u<l;++u)o[u]=v.charCodeAt(u);return o},prepareBeginningIndexes:function(i){for(var l=i.length,o=[],v=0,u=!1,y=!1,s=0;s<l;++s){var b=i.charCodeAt(s),g=b>=65&&b<=90,m=g||b>=97&&b<=122||b>=48&&b<=57,k=g&&!u||!y||!m;u=g,y=m,k&&(o[v++]=s)}return o},prepareNextBeginningIndexes:function(i){for(var l=i.length,o=d.prepareBeginningIndexes(i),v=[],u=o[0],y=0,s=0;s<l;++s)u>s?v[s]=u:(u=o[++y],v[s]=u===void 0?l:u);return v},cleanup:w,new:t};return d}var n=typeof we<"u"&&typeof window>"u",c=typeof Map=="function"?Map:function(){var f=Object.create(null);this.get=function(d){return f[d]},this.set=function(d,i){return f[d]=i,this},this.clear=function(){f=Object.create(null)}},a=new c,r=new c,h=[];h.total=0;var S=[],_=[];function w(){a.clear(),r.clear(),S=[],_=[]}function x(f){for(var d=-9007199254740991,i=f.length-1;i>=0;--i){var l=f[i];if(l!==null){var o=l.score;o>d&&(d=o)}}return d===-9007199254740991?null:d}function P(f,d){var i=f[d];if(i!==void 0)return i;var l=d;Array.isArray(d)||(l=d.split("."));for(var o=l.length,v=-1;f&&++v<o;)f=f[l[v]];return f}function H(f){return typeof f=="object"}var j=function(){var f=[],d=0,i={};function l(){for(var o=0,v=f[o],u=1;u<d;){var y=u+1;o=u,y<d&&f[y].score<f[u].score&&(o=y),f[o-1>>1]=f[o],u=1+(o<<1)}for(var s=o-1>>1;o>0&&v.score<f[s].score;s=(o=s)-1>>1)f[o]=f[s];f[o]=v}return i.add=function(o){var v=d;f[d++]=o;for(var u=v-1>>1;v>0&&o.score<f[u].score;u=(v=u)-1>>1)f[v]=f[u];f[v]=o},i.poll=function(){if(d!==0){var o=f[0];return f[0]=f[--d],l(),o}},i.peek=function(o){if(d!==0)return f[0]},i.replaceTop=function(o){f[0]=o,l()},i},q=j();return t()})});var Ne=be(K=>{"use strict";var ne=K&&K.__assign||function(){return ne=Object.assign||function(e){for(var t,n=1,c=arguments.length;n<c;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ne.apply(this,arguments)},rt=K&&K.__awaiter||function(e,t,n,c){function a(r){return r instanceof n?r:new n(function(h){h(r)})}return new(n||(n=Promise))(function(r,h){function S(x){try{w(c.next(x))}catch(P){h(P)}}function _(x){try{w(c.throw(x))}catch(P){h(P)}}function w(x){x.done?r(x.value):a(x.value).then(S,_)}w((c=c.apply(e,t||[])).next())})},it=K&&K.__generator||function(e,t){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},c,a,r,h;return h={next:S(0),throw:S(1),return:S(2)},typeof Symbol=="function"&&(h[Symbol.iterator]=function(){return this}),h;function S(w){return function(x){return _([w,x])}}function _(w){if(c)throw new TypeError("Generator is already executing.");for(;n;)try{if(c=1,a&&(r=w[0]&2?a.return:w[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,w[1])).done)return r;switch(a=0,r&&(w=[w[0]&2,r.value]),w[0]){case 0:case 1:r=w;break;case 4:return n.label++,{value:w[1],done:!1};case 5:n.label++,a=w[1],w=[0];continue;case 7:w=n.ops.pop(),n.trys.pop();continue;default:if(r=n.trys,!(r=r.length>0&&r[r.length-1])&&(w[0]===6||w[0]===2)){n=0;continue}if(w[0]===3&&(!r||w[1]>r[0]&&w[1]<r[3])){n.label=w[1];break}if(w[0]===6&&n.label<r[1]){n.label=r[1],r=w;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(w);break}r[2]&&n.ops.pop(),n.trys.pop();continue}w=t.call(e,n)}catch(x){w=[6,x],a=0}finally{c=r=0}if(w[0]&5)throw w[1];return{value:w[0]?w[1]:void 0,done:!0}}};Object.defineProperty(K,"__esModule",{value:!0});function te(e){var t=0,n=0,c=e;do t+=c.offsetTop||0,n+=c.offsetLeft||0,c=c.offsetParent;while(c);return{top:t,left:n}}var ot=function(){function e(t){this.element=t}return e.prototype.getHorizontalScroll=function(){return this.element.scrollLeft},e.prototype.getVerticalScroll=function(){return this.element.scrollTop},e.prototype.getMaxHorizontalScroll=function(){return this.element.scrollWidth-this.element.clientWidth},e.prototype.getMaxVerticalScroll=function(){return this.element.scrollHeight-this.element.clientHeight},e.prototype.getHorizontalElementScrollOffset=function(t,n){return te(t).left-te(n).left},e.prototype.getVerticalElementScrollOffset=function(t,n){return te(t).top-te(n).top},e.prototype.scrollTo=function(t,n){this.element.scrollLeft=t,this.element.scrollTop=n},e}(),at=function(){function e(){}return e.prototype.getHorizontalScroll=function(){return window.scrollX||document.documentElement.scrollLeft},e.prototype.getVerticalScroll=function(){return window.scrollY||document.documentElement.scrollTop},e.prototype.getMaxHorizontalScroll=function(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)-window.innerWidth},e.prototype.getMaxVerticalScroll=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight},e.prototype.getHorizontalElementScrollOffset=function(t){var n=window.scrollX||document.documentElement.scrollLeft;return n+t.getBoundingClientRect().left},e.prototype.getVerticalElementScrollOffset=function(t){var n=window.scrollY||document.documentElement.scrollTop;return n+t.getBoundingClientRect().top},e.prototype.scrollTo=function(t,n){window.scrollTo(t,n)},e}(),V={elements:[],cancelMethods:[],add:function(e,t){V.elements.push(e),V.cancelMethods.push(t)},remove:function(e,t){t===void 0&&(t=!0);var n=V.elements.indexOf(e);n>-1&&(t&&V.cancelMethods[n](),V.elements.splice(n,1),V.cancelMethods.splice(n,1))}},ze=typeof window<"u",lt={cancelOnUserAction:!0,easing:function(e){return--e*e*e+1},elementToScroll:ze?window:null,horizontalOffset:0,maxDuration:3e3,minDuration:250,speed:500,verticalOffset:0};function ct(e,t){return t===void 0&&(t={}),rt(this,void 0,void 0,function(){var n,c,a,r,h,S,_,w,x,P,H,j,q,f,d,i,l,o;return it(this,function(v){if(ze){if(!window.Promise)throw"Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill."}else return[2,new Promise(function(u){u(!1)})];if(r=ne(ne({},lt),t),h=r.elementToScroll===window,S=!!r.elementToScroll.nodeName,!h&&!S)throw"Element to scroll needs to be either window or DOM element.";if(_=h?document.documentElement:r.elementToScroll,w=getComputedStyle(_).getPropertyValue("scroll-behavior"),w==="smooth"&&console.warn(_.tagName+` has "scroll-behavior: smooth" which can mess up with animated-scroll-to's animations`),x=h?new at:new ot(r.elementToScroll),e instanceof Element){if(a=e,S&&(!r.elementToScroll.contains(a)||r.elementToScroll.isSameNode(a)))throw"options.elementToScroll has to be a parent of scrollToElement";n=x.getHorizontalElementScrollOffset(a,r.elementToScroll),c=x.getVerticalElementScrollOffset(a,r.elementToScroll)}else if(typeof e=="number")n=x.getHorizontalScroll(),c=e;else if(Array.isArray(e)&&e.length===2)n=e[0]===null?x.getHorizontalScroll():e[0],c=e[1]===null?x.getVerticalScroll():e[1];else throw`Wrong function signature. Check documentation.
Available method signatures are:
  animateScrollTo(y:number, options)
  animateScrollTo([x:number | null, y:number | null], options)
  animateScrollTo(scrollToElement:Element, options)`;return n+=r.horizontalOffset,c+=r.verticalOffset,P=x.getMaxHorizontalScroll(),H=x.getHorizontalScroll(),n>P&&(n=P),j=n-H,q=x.getMaxVerticalScroll(),f=x.getVerticalScroll(),c>q&&(c=q),d=c-f,i=Math.abs(Math.round(j/1e3*r.speed)),l=Math.abs(Math.round(d/1e3*r.speed)),o=i>l?i:l,o<r.minDuration?o=r.minDuration:o>r.maxDuration&&(o=r.maxDuration),[2,new Promise(function(u,y){j===0&&d===0&&u(!0),V.remove(r.elementToScroll,!0);var s,b=function(){M(),cancelAnimationFrame(s),u(!1)};V.add(r.elementToScroll,b);var g=function(L){return L.preventDefault()},m=r.cancelOnUserAction?b:g,k=r.cancelOnUserAction?{passive:!0}:{passive:!1},p=["wheel","touchstart","keydown","mousedown"],M=function(){p.forEach(function(L){r.elementToScroll.removeEventListener(L,m,k)})};p.forEach(function(L){r.elementToScroll.addEventListener(L,m,k)});var W=Date.now(),E=function(){var L=Date.now()-W,A=L/o,D=Math.round(H+j*r.easing(A)),z=Math.round(f+d*r.easing(A));L<o&&(D!==n||z!==c)?(x.scrollTo(D,z),s=requestAnimationFrame(E)):(x.scrollTo(n,c),cancelAnimationFrame(s),M(),V.remove(r.elementToScroll,!1),u(!0))};s=requestAnimationFrame(E)})]})})}K.default=ct});var U=document.createElement("style");U.className="debug-styles";U.innerHTML="* { outline: 1px solid rgb(57, 102, 230, 0.2); }";window.location.hash==="#debug"&&document.head.appendChild(U);window.addEventListener("hashchange",()=>{window.location.hash==="#debug"?document.head.appendChild(U):U.remove()},!1);function ae(e){if(e.getAttribute("animating")==="true")return;let t=e.getAttribute("aria-hidden")==="true",n=e.childNodes[0];e.setAttribute("aria-hidden",!t),e.setAttribute("animating",!0);let c=()=>{e.style.height="",t||(e.style.display="none"),e.setAttribute("animating",!1),e.removeEventListener("transitionend",c)};e.addEventListener("transitionend",c),t?(e.style.height=0,e.style.opacity=0,e.style.display="block",setTimeout(()=>{e.style.height=`${n.offsetHeight}px`,e.style.opacity=1},30)):(e.style.height=`${n.offsetHeight}px`,setTimeout(()=>{e.style.height=0,e.style.opacity=0},30))}var Ue=document.querySelectorAll(".archive__toggle"),Ee=window.location.hash.replace("#","").trim();if(Ee){let e=document.querySelector(`.archive__category--${Ee}`);if(e){let t=e.querySelector(".archive__toggle"),n=e.querySelector(".archive__posts");t.setAttribute("aria-expanded",!0),console.log(t),n.style.display="block",n.setAttribute("aria-hidden",!1),t.setAttribute("aria-expanded",!0)}}Ue.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let n=e.getAttribute("aria-expanded")==="false";if(n){let c=`${window.location.pathname}${e.getAttribute("href")}`;window.history.replaceState({},document.title,c)}else document.querySelectorAll(".archive__toggle[aria-expanded=true]").length===1&&window.history.replaceState({},document.title,window.location.pathname);e.setAttribute("aria-expanded",n),ae(e.nextSibling)})});var le=document.querySelector(".comments__show-all"),Ye=document.querySelector(".comments__all");le&&le.addEventListener("click",()=>{le.style.display="none",Ye.style.display="block"});var Re={8:{id:"delete"},9:{id:"tab"},13:{id:"enter"},16:{id:"shift",checkSide:!0},17:{id:"control",checkSide:!0},18:{id:"alt",checkSide:!0},20:{id:"capsLock"},27:{id:"esc"},32:{id:"space"},37:{id:"arrowLeft"},38:{id:"arrowUp"},39:{id:"arrowRight"},40:{id:"arrowDown"},46:{id:"delete"},48:{id:"0"},49:{id:"1"},50:{id:"2"},51:{id:"3"},52:{id:"4"},53:{id:"5"},54:{id:"6"},55:{id:"7"},56:{id:"8"},57:{id:"9"},58:{id:"semicolon"},59:{id:"equals"},60:{id:"comma"},61:{id:"equals"},64:{id:"2"},65:{id:"a"},66:{id:"b"},67:{id:"c"},68:{id:"d"},69:{id:"e"},70:{id:"f"},71:{id:"g"},72:{id:"h"},73:{id:"i"},74:{id:"j"},75:{id:"k"},76:{id:"l"},77:{id:"m"},78:{id:"n"},79:{id:"o"},80:{id:"p"},81:{id:"q"},82:{id:"r"},83:{id:"s"},84:{id:"t"},85:{id:"u"},86:{id:"v"},87:{id:"w"},88:{id:"x"},89:{id:"y"},90:{id:"z"},91:{id:"cmdLeft"},92:{id:"cmdRight"},93:{id:"cmdRight"},96:{id:"0"},97:{id:"1"},98:{id:"2"},99:{id:"3"},100:{id:"4"},101:{id:"5"},102:{id:"6"},103:{id:"7"},104:{id:"8"},105:{id:"9"},106:{id:"8"},107:{id:"equals"},108:{id:"dot"},109:{id:"minus"},110:{id:"dot"},111:{id:"slash"},112:{id:"f1"},113:{id:"f2"},114:{id:"f3"},115:{id:"f4"},116:{id:"f5"},117:{id:"f6"},118:{id:"f7"},119:{id:"f8"},120:{id:"f9"},121:{id:"f10"},122:{id:"f11"},123:{id:"f12"},124:{id:"f13"},125:{id:"f14"},126:{id:"f15"},127:{id:"f16"},128:{id:"f17"},129:{id:"f18"},130:{id:"f19"},131:{id:"f20"},132:{id:"f21"},133:{id:"f22"},134:{id:"f23"},135:{id:"f24"},160:{id:"6"},161:{id:"1"},163:{id:"3"},164:{id:"4"},165:{id:"u"},168:{id:"f5"},169:{id:"0"},170:{id:"8"},171:{id:"tilde"},173:{id:"minus"},174:{id:"f10"},175:{id:"f11"},179:{id:"f8"},181:{id:"f10"},182:{id:"f11"},183:{id:"f12"},186:{id:"semicolon"},187:{id:"equals"},188:{id:"comma"},189:{id:"minus"},190:{id:"dot"},191:{id:"slash"},192:{id:"tilde"},193:{id:"slash"},194:{id:"dot"},219:{id:"squareBracketLeft"},220:{id:"backslash"},221:{id:"squareBracketRight"},222:{id:"apostrophe"},223:{id:"tilde"},224:{id:"cmd",checkSide:!0},225:{id:"altRight"},231:{id:"c"}};function xe(e){let t=Re[e.keyCode];if(t&&t.id){let n=`#key--${t.id}`;return t.checkSide&&KeyboardEvent&&(e.location===KeyboardEvent.DOM_KEY_LOCATION_LEFT?n+="Left":e.location===KeyboardEvent.DOM_KEY_LOCATION_RIGHT&&(n+="Right")),document.querySelector(n)}}if(document.querySelector(".keyboard-svg")){let e=function(){let t=document.querySelectorAll(".key--active");for(let n=0;n<t.length;n++)t[n].classList.remove("key--active")};ht=e,document.addEventListener("keydown",function(t){let n=xe(t);n&&(t.key==="CapsLock"?t.getModifierState("CapsLock")?n.classList.add("key--active"):n.classList.remove("key--active"):n.classList.add("key--active"))}),document.addEventListener("keyup",function(t){let n=xe(t);n&&n.classList.remove("key--active")}),window.addEventListener("blur",e)}var ht;function Te(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function R(e){return function(t){if(Array.isArray(t))return ce(t)}(e)||function(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}(e)||function(t,n){if(!!t){if(typeof t=="string")return ce(t,n);var c=Object.prototype.toString.call(t).slice(8,-1);if(c==="Object"&&t.constructor&&(c=t.constructor.name),c==="Map"||c==="Set")return Array.from(t);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return ce(t,n)}}(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function ce(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}var ke,se,$,de,Le,_e=(ke=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],se=function(){function e(a){var r=a.targetModal,h=a.triggers,S=h===void 0?[]:h,_=a.onShow,w=_===void 0?function(){}:_,x=a.onClose,P=x===void 0?function(){}:x,H=a.openTrigger,j=H===void 0?"data-micromodal-trigger":H,q=a.closeTrigger,f=q===void 0?"data-micromodal-close":q,d=a.openClass,i=d===void 0?"is-open":d,l=a.disableScroll,o=l!==void 0&&l,v=a.disableFocus,u=v!==void 0&&v,y=a.awaitCloseAnimation,s=y!==void 0&&y,b=a.awaitOpenAnimation,g=b!==void 0&&b,m=a.debugMode,k=m!==void 0&&m;(function(p,M){if(!(p instanceof M))throw new TypeError("Cannot call a class as a function")})(this,e),this.modal=document.getElementById(r),this.config={debugMode:k,disableScroll:o,openTrigger:j,closeTrigger:f,openClass:i,onShow:w,onClose:P,awaitCloseAnimation:s,awaitOpenAnimation:g,disableFocus:u},S.length>0&&this.registerTriggers.apply(this,R(S)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var t,n,c;return t=e,(n=[{key:"registerTriggers",value:function(){for(var a=this,r=arguments.length,h=new Array(r),S=0;S<r;S++)h[S]=arguments[S];h.filter(Boolean).forEach(function(_){_.addEventListener("click",function(w){return a.showModal(w)})})}},{key:"showModal",value:function(){var a=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var h=function S(){a.modal.removeEventListener("animationend",S,!1),a.setFocusToFirstNode()};this.modal.addEventListener("animationend",h,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,r)}},{key:"closeModal",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,r=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,a),this.config.awaitCloseAnimation){var h=this.config.openClass;this.modal.addEventListener("animationend",function S(){r.classList.remove(h),r.removeEventListener("animationend",S,!1)},!1)}else r.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(a){this.modal=document.getElementById(a),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(a){if(this.config.disableScroll){var r=document.querySelector("body");switch(a){case"enable":Object.assign(r.style,{overflow:""});break;case"disable":Object.assign(r.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(a){(a.target.hasAttribute(this.config.closeTrigger)||a.target.parentNode.hasAttribute(this.config.closeTrigger))&&(a.preventDefault(),a.stopPropagation(),this.closeModal(a))}},{key:"onKeydown",value:function(a){a.keyCode===27&&this.closeModal(a),a.keyCode===9&&this.retainFocus(a)}},{key:"getFocusableNodes",value:function(){var a=this.modal.querySelectorAll(ke);return Array.apply(void 0,R(a))}},{key:"setFocusToFirstNode",value:function(){var a=this;if(!this.config.disableFocus){var r=this.getFocusableNodes();if(r.length!==0){var h=r.filter(function(S){return!S.hasAttribute(a.config.closeTrigger)});h.length>0&&h[0].focus(),h.length===0&&r[0].focus()}}}},{key:"retainFocus",value:function(a){var r=this.getFocusableNodes();if(r.length!==0)if(r=r.filter(function(S){return S.offsetParent!==null}),this.modal.contains(document.activeElement)){var h=r.indexOf(document.activeElement);a.shiftKey&&h===0&&(r[r.length-1].focus(),a.preventDefault()),!a.shiftKey&&r.length>0&&h===r.length-1&&(r[0].focus(),a.preventDefault())}else r[0].focus()}}])&&Te(t.prototype,n),c&&Te(t,c),e}(),$=null,de=function(e){if(!document.getElementById(e))return console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},Le=function(e,t){if(function(c){c.length<=0&&(console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var n in t)de(n);return!0},{init:function(e){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),n=R(document.querySelectorAll("[".concat(t.openTrigger,"]"))),c=function(h,S){var _=[];return h.forEach(function(w){var x=w.attributes[S].value;_[x]===void 0&&(_[x]=[]),_[x].push(w)}),_}(n,t.openTrigger);if(t.debugMode!==!0||Le(n,c)!==!1)for(var a in c){var r=c[a];t.targetModal=a,t.triggers=R(r),$=new se(t)}},show:function(e,t){var n=t||{};n.targetModal=e,n.debugMode===!0&&de(e)===!1||($&&$.removeEventListeners(),($=new se(n)).showModal())},close:function(e){e?$.closeModalById(e):$.closeModal()}});typeof window<"u"&&(window.MicroModal=_e);var Ae=_e;var fe=Se(Ie()),J=document.querySelector(".search__input"),X=document.querySelector(".search__results"),Ce=document.querySelector(".modal-nav"),ue,Ge=1,Q="search__result--focused",Xe=15;J.value="";function me(){let e=J.value.trim();if(ue===e)return;if(e.length<Ge){X.innerHTML="",ue="",Ce.style.display="block";return}Ce.style.display="none",ue=e;let t=fe.default.go(e,searchData,{key:"t",limit:Xe,threshold:-5e4});if(t.length===0)X.innerHTML=`<div class="search__no-results"><div class="container">No results found for "${e}"</div></div>`;else{let n=t.map((c,a)=>`<a class="search__result ${a===0?Q:""}" href="${c.obj.u}">
        <div class="container">
        <div class="search__result-eyebrow">${c.obj.e}</div>
        <div class="search__result-title">
        ${fe.default.highlight(c)}<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" class="post-arrow" aria-hidden="true">
          <path d="M 0 10 30 10 20 0 30 10 20 20" />
        </svg>
        </div>
        </div>
        </a>`).join(`
`);X.innerHTML=n}}J.addEventListener("keyup",me);J.addEventListener("keydown",function(e){let t=X.querySelector(`.${Q}`);if(e.code==="Enter"){e.preventDefault(),t.click();return}let n=null,c=e.code==="ArrowUp",a=e.code==="ArrowDown";(a||c)&&(e.preventDefault(),n=a?t.nextElementSibling:t.previousElementSibling),n&&(e.preventDefault(),n.classList.add(Q),n.scrollIntoView({behavior:"smooth",block:"center"}),t&&t.classList.remove(Q))});var Qe=500,Z=document.querySelector(".search__input"),De=document.querySelector("#page"),Je=window.matchMedia("(prefers-reduced-motion: reduce)"),ve,qe,Ze="ontouchstart"in document.documentElement;Ae.init({onShow:()=>{ve=window.scrollY,(!Ze||window.innerWidth>768)&&(Z.focus(),Z.select()),clearTimeout(qe),qe=setTimeout(()=>{document.documentElement.classList.add("html--overflow-hidden"),De.style.marginTop=`-${ve}px`},Qe)},onClose:()=>{document.documentElement.classList.remove("html--overflow-hidden"),De.style.marginTop="",window.scrollTo({top:ve}),Z.value="",me(),Z.blur()},awaitCloseAnimation:!Je.matches,disableFocus:!0});var he="menu__toggle-fixed-wrapper--hidden",et=250,ge=document.querySelector(".menu__toggle-fixed-wrapper"),Be=document.querySelector(".menu__toggle--fixed");function tt(){let e=window.scrollY,t=ge.classList.contains(he),n=e>et;n&&t?(ge.classList.remove(he),Be.setAttribute("tabindex",0)):!n&&!t&&(ge.classList.add(he),Be.setAttribute("tabindex",-1)),prevY=e}window.addEventListener("scroll",()=>{tt()});var He="color-scheme",ee="dark-scheme",ye="light-scheme",nt=document.querySelectorAll(".color-scheme-switcher");nt.forEach(e=>{e.addEventListener("click",()=>{let t=localStorage.getItem(He),n=t&&t===ee,c=window.matchMedia("(prefers-color-scheme: dark)").matches,a=c?ee:ye;document.documentElement.classList.remove(ee,ye);let h=(t?n:c)?ye:ee;document.documentElement.classList.add(h),localStorage.setItem(He,h)})});var Fe=Se(Ne()),Pe=document.querySelectorAll(".scroll-to");Pe.length&&Pe.forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();let n=document.querySelector(e.getAttribute("href"));(0,Fe.default)(n,{maxDuration:750})})});var st=document.querySelectorAll(".sidenote__trigger"),dt=document.querySelectorAll(".sidenote__note");st.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("sidenote__trigger--expanded")}),e.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" "||t.key==="Spacebar")&&e.classList.toggle("sidenote__trigger--expanded")})});dt.forEach(e=>{let t=e.previousElementSibling;e.addEventListener("mouseenter",()=>{t.classList.add("sidenote__trigger--hover")}),e.addEventListener("mouseleave",()=>{t.classList.remove("sidenote__trigger--hover")})});var ut=document.querySelectorAll(".spoiler");ut.forEach(e=>{let t=e.querySelector(".spoiler__toggle"),n=e.querySelector(".spoiler__show"),c=e.querySelector(".spoiler__hide"),a=e.querySelector(".spoiler__content");t.addEventListener("click",()=>{let h=!(t.getAttribute("aria-expanded")==="true");n.style.display=h?"none":"",c.style.display=h?"":"none",a.style.display=h?"":"none",t.setAttribute("aria-expanded",h),a.setAttribute("aria-hidden",!h)})});})();
//# sourceMappingURL=app.js.map
