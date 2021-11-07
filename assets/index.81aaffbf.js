import{c as Re,a as Ae,b as Ce,r as _e,o as xe,d as Ne,e as Pe,Q as $e,N as Le,q as Te}from"./vendor.706dd866.js";const Ue=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}};Ue();const qe="modulepreload",Y={},je="/wota-frontend-test/",C=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${je}${s}`,s in Y)return;Y[s]=!0;const n=s.endsWith(".css"),a=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":qe,n||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),n)return new Promise((u,l)=>{i.addEventListener("load",u),i.addEventListener("error",l)})})).then(()=>e())};var ke={setUser(r,e){r.id=e.id,r.token=e.token,r.username=e.username}},D={exports:{}},Z=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}},Be=Z,E=Object.prototype.toString;function I(r){return E.call(r)==="[object Array]"}function F(r){return typeof r=="undefined"}function De(r){return r!==null&&!F(r)&&r.constructor!==null&&!F(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function Ie(r){return E.call(r)==="[object ArrayBuffer]"}function Fe(r){return typeof FormData!="undefined"&&r instanceof FormData}function He(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&r.buffer instanceof ArrayBuffer,e}function Me(r){return typeof r=="string"}function Je(r){return typeof r=="number"}function ee(r){return r!==null&&typeof r=="object"}function _(r){if(E.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function Ve(r){return E.call(r)==="[object Date]"}function ze(r){return E.call(r)==="[object File]"}function We(r){return E.call(r)==="[object Blob]"}function re(r){return E.call(r)==="[object Function]"}function Xe(r){return ee(r)&&re(r.pipe)}function Ke(r){return typeof URLSearchParams!="undefined"&&r instanceof URLSearchParams}function Qe(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Ge(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function H(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),I(r))for(var t=0,s=r.length;t<s;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function M(){var r={};function e(n,a){_(r[a])&&_(n)?r[a]=M(r[a],n):_(n)?r[a]=M({},n):I(n)?r[a]=n.slice():r[a]=n}for(var t=0,s=arguments.length;t<s;t++)H(arguments[t],e);return r}function Ye(r,e,t){return H(e,function(n,a){t&&typeof n=="function"?r[a]=Be(n,t):r[a]=n}),r}function Ze(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var h={isArray:I,isArrayBuffer:Ie,isBuffer:De,isFormData:Fe,isArrayBufferView:He,isString:Me,isNumber:Je,isObject:ee,isPlainObject:_,isUndefined:F,isDate:Ve,isFile:ze,isBlob:We,isFunction:re,isStream:Xe,isURLSearchParams:Ke,isStandardBrowserEnv:Ge,forEach:H,merge:M,extend:Ye,trim:Qe,stripBOM:Ze},g=h;function te(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ne=function(e,t,s){if(!t)return e;var n;if(s)n=s(t);else if(g.isURLSearchParams(t))n=t.toString();else{var a=[];g.forEach(t,function(l,v){l===null||typeof l=="undefined"||(g.isArray(l)?v=v+"[]":l=[l],g.forEach(l,function(f){g.isDate(f)?f=f.toISOString():g.isObject(f)&&(f=JSON.stringify(f)),a.push(te(v)+"="+te(f))}))}),n=a.join("&")}if(n){var i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},er=h;function x(){this.handlers=[]}x.prototype.use=function(e,t,s){return this.handlers.push({fulfilled:e,rejected:t,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};x.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};x.prototype.forEach=function(e){er.forEach(this.handlers,function(s){s!==null&&e(s)})};var rr=x,tr=h,nr=function(e,t){tr.forEach(e,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])})},se=function(e,t,s,n,a){return e.config=t,s&&(e.code=s),e.request=n,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},sr=se,ae=function(e,t,s,n,a){var i=new Error(e);return sr(i,t,s,n,a)},ar=ae,ir=function(e,t,s){var n=s.config.validateStatus;!s.status||!n||n(s.status)?e(s):t(ar("Request failed with status code "+s.status,s.config,null,s.request,s))},N=h,or=N.isStandardBrowserEnv()?function(){return{write:function(t,s,n,a,i,u){var l=[];l.push(t+"="+encodeURIComponent(s)),N.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),N.isString(a)&&l.push("path="+a),N.isString(i)&&l.push("domain="+i),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){var s=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),ur=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},lr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},fr=ur,cr=lr,dr=function(e,t){return e&&!fr(t)?cr(e,t):t},J=h,hr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],pr=function(e){var t={},s,n,a;return e&&J.forEach(e.split(`
`),function(u){if(a=u.indexOf(":"),s=J.trim(u.substr(0,a)).toLowerCase(),n=J.trim(u.substr(a+1)),s){if(t[s]&&hr.indexOf(s)>=0)return;s==="set-cookie"?t[s]=(t[s]?t[s]:[]).concat([n]):t[s]=t[s]?t[s]+", "+n:n}}),t},ie=h,mr=ie.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),s;function n(a){var i=a;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return s=n(window.location.href),function(i){var u=ie.isString(i)?n(i):i;return u.protocol===s.protocol&&u.host===s.host}}():function(){return function(){return!0}}();function V(r){this.message=r}V.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};V.prototype.__CANCEL__=!0;var P=V,$=h,vr=ir,yr=or,br=ne,Er=dr,wr=pr,gr=mr,z=ae,Sr=T,Or=P,oe=function(e){return new Promise(function(s,n){var a=e.data,i=e.headers,u=e.responseType,l;function v(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}$.isFormData(a)&&delete i["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.Authorization="Basic "+btoa(f+":"+d)}var R=Er(e.baseURL,e.url);o.open(e.method.toUpperCase(),br(R,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function Q(){if(!!o){var m="getAllResponseHeaders"in o?wr(o.getAllResponseHeaders()):null,w=!u||u==="text"||u==="json"?o.responseText:o.response,b={data:w,status:o.status,statusText:o.statusText,headers:m,config:e,request:o};vr(function(B){s(B),v()},function(B){n(B),v()},b),o=null}}if("onloadend"in o?o.onloadend=Q:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(Q)},o.onabort=function(){!o||(n(z("Request aborted",e,"ECONNABORTED",o)),o=null)},o.onerror=function(){n(z("Network Error",e,null,o)),o=null},o.ontimeout=function(){var w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",b=e.transitional||Sr.transitional;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),n(z(w,e,b.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",o)),o=null},$.isStandardBrowserEnv()){var G=(e.withCredentials||gr(R))&&e.xsrfCookieName?yr.read(e.xsrfCookieName):void 0;G&&(i[e.xsrfHeaderName]=G)}"setRequestHeader"in o&&$.forEach(i,function(w,b){typeof a=="undefined"&&b.toLowerCase()==="content-type"?delete i[b]:o.setRequestHeader(b,w)}),$.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(m){!o||(n(!m||m&&m.type?new Or("canceled"):m),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),a||(a=null),o.send(a)})},c=h,ue=nr,Rr=se,Ar={"Content-Type":"application/x-www-form-urlencoded"};function le(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Cr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=oe),r}function _r(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(s){if(s.name!=="SyntaxError")throw s}return(t||JSON.stringify)(r)}var L={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:Cr(),transformRequest:[function(e,t){return ue(t,"Accept"),ue(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(le(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)||t&&t["Content-Type"]==="application/json"?(le(t,"application/json"),_r(e)):e}],transformResponse:[function(e){var t=this.transitional||L.transitional,s=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!s&&this.responseType==="json";if(a||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(a)throw i.name==="SyntaxError"?Rr(i,this,"E_JSON_PARSE"):i}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){L.headers[e]={}});c.forEach(["post","put","patch"],function(e){L.headers[e]=c.merge(Ar)});var T=L,xr=h,Nr=T,Pr=function(e,t,s){var n=this||Nr;return xr.forEach(s,function(i){e=i.call(n,e,t)}),e},fe=function(e){return!!(e&&e.__CANCEL__)},ce=h,W=Pr,$r=fe,Lr=T,Tr=P;function X(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Tr("canceled")}var Ur=function(e){X(e),e.headers=e.headers||{},e.data=W.call(e,e.data,e.headers,e.transformRequest),e.headers=ce.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ce.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||Lr.adapter;return t(e).then(function(n){return X(e),n.data=W.call(e,n.data,n.headers,e.transformResponse),n},function(n){return $r(n)||(X(e),n&&n.response&&(n.response.data=W.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},p=h,de=function(e,t){t=t||{};var s={};function n(o,f){return p.isPlainObject(o)&&p.isPlainObject(f)?p.merge(o,f):p.isPlainObject(f)?p.merge({},f):p.isArray(f)?f.slice():f}function a(o){if(p.isUndefined(t[o])){if(!p.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],t[o])}function i(o){if(!p.isUndefined(t[o]))return n(void 0,t[o])}function u(o){if(p.isUndefined(t[o])){if(!p.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,t[o])}function l(o){if(o in t)return n(e[o],t[o]);if(o in e)return n(void 0,e[o])}var v={url:i,method:i,data:i,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return p.forEach(Object.keys(e).concat(Object.keys(t)),function(f){var d=v[f]||a,R=d(f);p.isUndefined(R)&&d!==l||(s[f]=R)}),s},he={version:"0.24.0"},qr=he.version,K={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){K[r]=function(s){return typeof s===r||"a"+(e<1?"n ":" ")+r}});var pe={};K.transitional=function(e,t,s){function n(a,i){return"[Axios v"+qr+"] Transitional option '"+a+"'"+i+(s?". "+s:"")}return function(a,i,u){if(e===!1)throw new Error(n(i," has been removed"+(t?" in "+t:"")));return t&&!pe[i]&&(pe[i]=!0,console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,i,u):!0}};function jr(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var s=Object.keys(r),n=s.length;n-- >0;){var a=s[n],i=e[a];if(i){var u=r[a],l=u===void 0||i(u,a,r);if(l!==!0)throw new TypeError("option "+a+" must be "+l);continue}if(t!==!0)throw Error("Unknown option "+a)}}var kr={assertOptions:jr,validators:K},me=h,Br=ne,ve=rr,ye=Ur,U=de,be=kr,S=be.validators;function A(r){this.defaults=r,this.interceptors={request:new ve,response:new ve}}A.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=U(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;t!==void 0&&be.assertOptions(t,{silentJSONParsing:S.transitional(S.boolean),forcedJSONParsing:S.transitional(S.boolean),clarifyTimeoutError:S.transitional(S.boolean)},!1);var s=[],n=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(e)===!1||(n=n&&d.synchronous,s.unshift(d.fulfilled,d.rejected))});var a=[];this.interceptors.response.forEach(function(d){a.push(d.fulfilled,d.rejected)});var i;if(!n){var u=[ye,void 0];for(Array.prototype.unshift.apply(u,s),u=u.concat(a),i=Promise.resolve(e);u.length;)i=i.then(u.shift(),u.shift());return i}for(var l=e;s.length;){var v=s.shift(),o=s.shift();try{l=v(l)}catch(f){o(f);break}}try{i=ye(l)}catch(f){return Promise.reject(f)}for(;a.length;)i=i.then(a.shift(),a.shift());return i};A.prototype.getUri=function(e){return e=U(this.defaults,e),Br(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};me.forEach(["delete","get","head","options"],function(e){A.prototype[e]=function(t,s){return this.request(U(s||{},{method:e,url:t,data:(s||{}).data}))}});me.forEach(["post","put","patch"],function(e){A.prototype[e]=function(t,s,n){return this.request(U(n||{},{method:e,url:t,data:s}))}});var Dr=A,Ir=P;function O(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(s){if(!!t._listeners){var n,a=t._listeners.length;for(n=0;n<a;n++)t._listeners[n](s);t._listeners=null}}),this.promise.then=function(s){var n,a=new Promise(function(i){t.subscribe(i),n=i}).then(s);return a.cancel=function(){t.unsubscribe(n)},a},r(function(n){t.reason||(t.reason=new Ir(n),e(t.reason))})}O.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};O.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};O.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};O.source=function(){var e,t=new O(function(n){e=n});return{token:t,cancel:e}};var Fr=O,Hr=function(e){return function(s){return e.apply(null,s)}},Mr=function(e){return typeof e=="object"&&e.isAxiosError===!0},Ee=h,Jr=Z,q=Dr,Vr=de,zr=T;function we(r){var e=new q(r),t=Jr(q.prototype.request,e);return Ee.extend(t,q.prototype,e),Ee.extend(t,e),t.create=function(n){return we(Vr(r,n))},t}var y=we(zr);y.Axios=q;y.Cancel=P;y.CancelToken=Fr;y.isCancel=fe;y.VERSION=he.version;y.all=function(e){return Promise.all(e)};y.spread=Hr;y.isAxiosError=Mr;D.exports=y;D.exports.default=y;var Wr=D.exports;const ge=Wr.create({baseURL:"https://dev.tapgo.cc/test/"});ge.interceptors.request.use(r=>{const e=j.state.auth.token;return e&&(r.headers.Authorization=e),r});function Xr(r){return ge({url:"/auth/login",method:"POST",data:r})}var Kr={async login(r,e){const t=await Xr(e),{data:{id:s,token:n,username:a}}=t;if(!n)throw new Error({message:"something weng wrong"});sessionStorage.setItem("id",s),sessionStorage.setItem("token",n),sessionStorage.setItem("username",a),r.commit("setUser",{id:s,token:n,username:a})},logout(r){sessionStorage.removeItem("id"),sessionStorage.removeItem("token"),sessionStorage.removeItem("username"),r.commit("setUser",{id:null,token:null,username:null})}},Qr={isAuthenticated(r){return!!r.token}},Gr={namespaced:!0,state(){return{id:sessionStorage.getItem("id")||null,token:sessionStorage.getItem("token")||null,username:sessionStorage.getItem("username")||null}},mutations:ke,actions:Kr,getters:Qr};const Yr=Re({modules:{auth:Gr}});var j=Yr;const Se=Ae({history:Ce(),routes:[{path:"/",component:()=>C(()=>import("./MainLayout.09146022.js"),["assets/MainLayout.09146022.js","assets/vendor.706dd866.js","assets/scroll.d2dbdce9.js"]),redirect:"/order",children:[{path:"/order",component:()=>C(()=>import("./Order.43f5d03a.js"),["assets/Order.43f5d03a.js","assets/vendor.706dd866.js","assets/QInput.638b8571.js","assets/scroll.d2dbdce9.js"]),meta:{requiresAuth:!0}}]},{path:"/login",component:()=>C(()=>import("./Login.a3dbc52a.js"),["assets/Login.a3dbc52a.js","assets/Login.4171eb23.css","assets/vendor.706dd866.js","assets/QInput.638b8571.js"]),meta:{requireUnauth:!0}},{path:"/:notFound(.*)",component:()=>C(()=>import("./NotFound.560f2ad2.js"),["assets/NotFound.560f2ad2.js","assets/vendor.706dd866.js"])}]});Se.beforeEach((r,e,t)=>{r.meta.requiresAuth&&!j.getters["auth/isAuthenticated"]?t("/login"):r.meta.requireUnauth&&j.getters["auth/isAuthenticated"]?t("/order"):t()});var Zr=(r,e)=>{for(const[t,s]of e)r[t]=s;return r};const et={};function rt(r,e){const t=_e("router-view");return xe(),Ne(t)}var tt=Zr(et,[["render",rt]]);const k=Pe(tt);k.use(Se);k.use(j);k.use($e,{plugins:{Notify:Le},lang:Te});k.mount("#app");export{Zr as _,ge as i};
