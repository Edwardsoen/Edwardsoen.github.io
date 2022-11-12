const st=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};st();function ot(t,e){this.parent=t,this.totalPage=e;var n=this.parent.scrollHeight,a=n/this.totalPage,r=1,i=0,s=function(){a=t.scrollHeight/e},o=function(c){if(s(),i>c.currentTarget.scrollTop){if(c.currentTarget.scrollTop/a%1<.1){let l=new CustomEvent("PageClosed",{detail:r});c.currentTarget.dispatchEvent(l),r=Math.round(c.currentTarget.scrollTop/a)+1;let d=new CustomEvent("PageOpened",{detail:r});c.currentTarget.dispatchEvent(d)}}else if(r!=Math.round(c.currentTarget.scrollTop/a)+1){let l=new CustomEvent("PageClosed",{detail:r});c.currentTarget.dispatchEvent(l),r=Math.round(c.currentTarget.scrollTop/a)+1;let d=new CustomEvent("PageOpened",{detail:r});c.currentTarget.dispatchEvent(d)}i=c.currentTarget.scrollTop};this.parent.addEventListener("scroll",o)}function ct(t,e){this.parent=t,this.totalPage=e;var n=this.parent.scrollWidth,a=n/this.totalPage,r=1,i=0,s=function(){a=t.scrollWidth/e},o=function(c){if(s(),i>c.currentTarget.scrollLeft){if(c.currentTarget.scrollLeft/a%1<.1){let l=new CustomEvent("PageClosed",{detail:r});c.currentTarget.dispatchEvent(l),r=Math.round(c.currentTarget.scrollLeft/a)+1;let d=new CustomEvent("PageOpened",{detail:r});c.currentTarget.dispatchEvent(d)}}else if(r!=Math.round(c.currentTarget.scrollLeft/a)+1){let l=new CustomEvent("PageClosed",{detail:r});c.currentTarget.dispatchEvent(l),r=Math.round(c.currentTarget.scrollLeft/a)+1;let d=new CustomEvent("PageOpened",{detail:r});c.currentTarget.dispatchEvent(d)}i=c.currentTarget.scrollLeft};this.parent.addEventListener("scroll",o)}function P(t,e,n){for(var a=0;a<t.length;a++)t[a].addEventListener(e,n),t[a].index=a}function lt(){this.setPage=function(t){let e="An extension of an open source Youtube client with added functionality",n="Used AppAuth library to do oauth authentication ",a="Used RxJava to do asynchronous call to Youtube API to fetch data",r=document.createElement("h2"),i=document.createElement("h3"),s=document.createElement("h3");r.innerHTML=e,i.innerHTML=n,s.innerHTML=a,t.appendChild(r),t.appendChild(i),t.appendChild(s)},this.setRedirects=function(t){let e=document.createElement("h2"),n=document.createElement("a");n.href="https://github.com/Edwardsoen/NewPipe",n.innerHTML="Github",e.appendChild(n),t.appendChild(e)},this.setMedia=function(t){let e=document.createElement("img");e.style=`width: auto;
    height: auto;
    max-height: 30vh;
    max-width: 80vw;
    `,e.src="assets/ProjectImages/newpipe-sync.jpg",t.appendChild(e)},this.getTitle=function(){return"Newpipe Sync"}}function dt(){this.setPage=function(t){let e="Single player plane shooting game made in Unity with C#",n="Collaborated with 2 other developers to design and implement feature based on game design specifications",a="Designed and implemented AI's targetting and path-finding algorithms",r="Added Gameanalytics to track game's metrics",i="Worked on the android version of the game",s=document.createElement("h2"),o=document.createElement("h3"),c=document.createElement("h3"),l=document.createElement("h3"),d=document.createElement("h3");s.innerHTML=e,o.innerHTML=n,c.innerHTML=a,l.innerHTML=r,d.innerHTML=i,t.appendChild(s),t.appendChild(o),t.appendChild(c),t.appendChild(l),t.appendChild(d)},this.setRedirects=function(t){let e=document.createElement("h2"),n=document.createElement("a");n.href="https://itervision.com/planes",n.innerHTML="Play here",e.appendChild(n),t.appendChild(e)},this.setMedia=function(t){let e=document.createElement("img");e.style=`width: auto;
    height: auto;
    max-height: 30vh;
    max-width: 80vw;
    `,e.src="assets/ProjectImages/planes.png",t.appendChild(e)},this.getTitle=function(){return"Rogue Plane"}}function ut(){this.setPage=function(t){let e="Multiplayer 3rd person open-world game made in Unity with Mirror networking library",n="Worked with 2 other developer and 3 game designers to implement gameplay feature according to the game design documents",a="build responsive in game UI with Unity UI builder & Do code reviews",r=document.createElement("h2"),i=document.createElement("h3"),s=document.createElement("h3");r.innerHTML=e,i.innerHTML=n,s.innerHTML=a,t.appendChild(r),t.appendChild(i),t.appendChild(s)},this.setRedirects=function(t){let e=document.createElement("h2"),n=document.createElement("a");n.href="https://playrespark.com/",n.innerHTML="Learn more here",e.appendChild(n),t.appendChild(e)},this.setMedia=function(t){let e=document.createElement("img");e.style=`width: auto;
    height: auto;
    max-height: 30vh;
    max-width: 80vw;
    `,e.src="assets/ProjectImages/respark.png",t.appendChild(e)},this.getTitle=function(){return"Respark"}}function ht(){let t=document.getElementById("scroll-indicator-box"),e="indicator",n="indicator-active",a=document.getElementsByClassName("project-section")[0],r=a.parentElement,i={};this.initialize=function(){let u=[];u.push(new dt),u.push(new ut),u.push(new lt);let p=document.getElementsByClassName("project-section");for(let h=0;h<=u.length-p.length;h++){let D=a.cloneNode(!0);r.appendChild(D)}p=document.getElementsByClassName("project-section");for(let h=0;h<=p.length-1;h++){u[h].setMedia(p[h].getElementsByClassName("project-media-box")[0]),u[h].setRedirects(p[h].getElementsByClassName("links-box")[0]),u[h].setPage(p[h].getElementsByClassName("second-page-description-container")[0]);let D=c();D.addEventListener("click",l),i[h+1]=D}i[1].classList.add(n),document.getElementsByClassName("second-page-description-box")[0],new ct(r,u.length),r.addEventListener("PageOpened",o),r.addEventListener("PageClosed",s)};function s(u){i[u.detail].classList.remove(n)}function o(u){i[u.detail].classList.add(n)}function c(){let u=document.createElement("div");return u.classList.add(e),t.appendChild(u),u}function l(u){i[u.currentTarget],Object.keys(i).forEach(function(p){i[p]==u.currentTarget&&d((p-1)*r.clientWidth)})}function d(u){r.scroll({top:0,left:u,behavior:"smooth"})}this.initialize()}function ft(){function t(){document.getElementById("hobby-modal").style.display="none"}document.getElementsByClassName("close")[0].addEventListener("click",t),document.addEventListener("keydown",n=>{n.key=="Escape"&&t()})}function pt(t){var e=document.getElementById("hobby-modal"),n=t.currentTarget.getElementsByTagName("img")[0].src;e.style.display="initial",e.getElementsByTagName("img")[0].src=n;var a=String(n).split("/")[String(n).split("/").length-1].split(".")[0];e.getElementsByTagName("div")[0].innerHTML=a}function mt(){var t=document.getElementsByClassName("parent")[0],e={Home:1,Hobby:3,Projects:2,Contact:4};this.OnClickNavigate=function(a){var r=e[a.currentTarget.textContent.trim()];n((r-1)*t.clientHeight)};function n(a){t.scroll({top:a,left:0,behavior:"smooth"})}}var se=function(){this.pageIndex=1;let e=document.getElementById("first-page-heading-container").getElementsByClassName("character");this.OnOpened=function(){let n=.1;for(let a=1;a<=e.length;a++)e[a-1].style.animation=`Rotate ease-in-out 0.75s forwards ${n*a}s`;document.getElementById("first-page-sub-heading").style.animation=`FadeIn 1.5s ease-in-out forwards ${n*1}s`},this.OnClosed=function(){for(let n=1;n<=e.length;n++)e[n-1].style.animation="";document.getElementById("first-page-sub-heading").style.animation=""}},gt=function(){this.pageIndex=2;let e=document.getElementById("second-page-heading-container").getElementsByClassName("character"),n=document.getElementsByClassName("second-page-projects-box");this.OnOpened=function(){let a=.15;for(let i=1;i<=e.length;i++)e[i-1].style.animation=`Rotate ease-in-out 0.75s forwards ${a*i}s`;let r=.25;for(let i=0;i<=n.length-1;i++)n[i].style.animation=`SlideUp ease-in-out 1s forwards ${1+r*i}s`;document.getElementsByClassName("second-page-description-box")[0].style.animation="SlideDown cubic-bezier(0.36, 0.04, 0, 1) 1.2s forwards"},this.OnClosed=function(){for(let a=1;a<=e.length;a++)e[a-1].style.animation="";for(let a=0;a<=n.length-1;a++)n[a].style.animation="";document.getElementsByClassName("second-page-description-box")[0].style.animation=""}},yt=function(){ft(),this.pageIndex=3;let e=document.getElementById("third-page-heading-container").getElementsByClassName("character");this.OnOpened=function(){let n=.15;for(let i=1;i<=e.length;i++)e[i-1].style.animation=`Rotate ease-in-out 0.75s forwards ${n*i}s`;var a=document.getElementsByClassName("image-item");let r=.15;for(let i=0;i<a.length;i++)a[i].style.animation=`FadeIn 1.5s forwards ${r*(i+1)}s`},this.OnClosed=function(){for(let a=1;a<=e.length;a++)e[a-1].style.animation="";document.getElementsByClassName("heading-box")[1].style.animation="";var n=document.getElementsByClassName("image-item");for(let a=0;a<n.length;a++)n[a].style.animation=""}},bt=function(){this.pageIndex=4;let e=document.getElementById("fourth-page-heading-container").getElementsByClassName("character");this.OnOpened=function(){let n=.15;for(let a=1;a<=e.length;a++)e[a-1].style.animation=`Rotate ease-in-out 0.75s forwards ${n*a}s`;document.getElementById("fourth-page-sub-heading").style.animation="FadeIn 1s forwards 0.5s",document.getElementById("fourth-page-sub-sub-heading").style.animation="FadeIn 1s forwards 1s"},this.OnClosed=function(){for(let n=1;n<=e.length;n++)e[n-1].style.animation="";document.getElementById("fourth-page-sub-heading").style.animation="",document.getElementById("fourth-page-sub-sub-heading").style.animation=""}};function Et(){var t={},e={};function n(a){a==null||a.pageIndex==null||(a.OnOpened==null&&(a.OnOpened=()=>{}),a.OnClosed==null&&(a.OnClosed=()=>{}),t[a.pageIndex]=a.OnOpened,e[a.pageIndex]=a.OnClosed)}this.onPageClosed=function(a){typeof e[a.detail]=="function"&&e[a.detail]()},this.onPageOpened=function(a){typeof t[a.detail]=="function"&&t[a.detail]()},n(new se),n(new gt),n(new yt),n(new bt),new se().OnOpened()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=function(t){const e=[];let n=0;for(let a=0;a<t.length;a++){let r=t.charCodeAt(a);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++a)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},It=function(t){const e=[];let n=0,a=0;for(;n<t.length;){const r=t[n++];if(r<128)e[a++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[a++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],s=t[n++],o=t[n++],c=((r&7)<<18|(i&63)<<12|(s&63)<<6|o&63)-65536;e[a++]=String.fromCharCode(55296+(c>>10)),e[a++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],s=t[n++];e[a++]=String.fromCharCode((r&15)<<12|(i&63)<<6|s&63)}}return e.join("")},_e={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<t.length;r+=3){const i=t[r],s=r+1<t.length,o=s?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,d=i>>2,u=(i&3)<<4|o>>4;let p=(o&15)<<2|l>>6,h=l&63;c||(h=64,s||(p=64)),a.push(n[d],n[u],n[p],n[h])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Te(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):It(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],o=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const u=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||o==null||l==null||u==null)throw Error();const p=i<<2|o>>4;if(a.push(p),l!==64){const h=o<<4&240|l>>2;if(a.push(h),u!==64){const D=l<<6&192|u;a.push(D)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},wt=function(t){const e=Te(t);return _e.encodeByteArray(e,!0)},Ae=function(t){return wt(t).replace(/\./g,"")},Ct=function(t){try{return _e.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function vt(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Se(){return typeof indexedDB=="object"}function De(){return new Promise((t,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Tt(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}function _t(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=()=>_t().__FIREBASE_DEFAULTS__,St=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Dt=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ct(t[1]);return e&&JSON.parse(e)},Ot=()=>{try{return At()||St()||Dt()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bt=()=>{var t;return(t=Ot())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,a))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="FirebaseError";class S extends Error{constructor(e,n,a){super(n),this.code=e,this.customData=a,this.name=Pt,Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$.prototype.create)}}class ${constructor(e,n,a){this.service=e,this.serviceName=n,this.errors=a}create(e,...n){const a=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?Nt(i,a):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new S(r,o,a)}}function Nt(t,e){return t.replace(Lt,(n,a)=>{const r=e[a];return r!=null?String(r):`<${a}?>`})}const Lt=/\{\$([^}]+)}/g;function N(t,e){if(t===e)return!0;const n=Object.keys(t),a=Object.keys(e);for(const r of n){if(!a.includes(r))return!1;const i=t[r],s=e[r];if(oe(i)&&oe(s)){if(!N(i,s))return!1}else if(i!==s)return!1}for(const r of a)if(!n.includes(r))return!1;return!0}function oe(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=1e3,kt=2,$t=4*60*60*1e3,xt=.5;function ce(t,e=Rt,n=kt){const a=e*Math.pow(n,t),r=Math.round(xt*a*(Math.random()-.5)*2);return Math.min($t,a+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t){return t&&t._delegate?t._delegate:t}class I{constructor(e,n,a){this.name=e,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const a=new Mt;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&a.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jt(e))try{this.getOrInitializeService({instanceIdentifier:w})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});a.resolve(i)}catch{}}}}clearInstance(e=w){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=w){return this.instances.has(e)}getOptions(e=w){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[i,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);a===o&&s.resolve(r)}return r}onInit(e,n){var a;const r=this.normalizeInstanceIdentifier(n),i=(a=this.onInitCallbacks.get(r))!==null&&a!==void 0?a:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const a=this.onInitCallbacks.get(n);if(!!a)for(const r of a)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:Ht(e),options:n}),this.instances.set(e,a),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=w){return this.component?this.component.multipleInstances?e:w:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ht(t){return t===w?void 0:t}function jt(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ft(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var f;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(f||(f={}));const Ut={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},zt=f.INFO,Wt={[f.DEBUG]:"log",[f.VERBOSE]:"log",[f.INFO]:"info",[f.WARN]:"warn",[f.ERROR]:"error"},qt=(t,e,...n)=>{if(e<t.logLevel)return;const a=new Date().toISOString(),r=Wt[e];if(r)console[r](`[${a}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Be{constructor(e){this.name=e,this._logLevel=zt,this._logHandler=qt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in f))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ut[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,f.DEBUG,...e),this._logHandler(this,f.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,f.VERBOSE,...e),this._logHandler(this,f.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,f.INFO,...e),this._logHandler(this,f.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,f.WARN,...e),this._logHandler(this,f.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,f.ERROR,...e),this._logHandler(this,f.ERROR,...e)}}const Gt=(t,e)=>e.some(n=>t instanceof n);let le,de;function Kt(){return le||(le=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yt(){return de||(de=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Me=new WeakMap,Y=new WeakMap,Pe=new WeakMap,j=new WeakMap,te=new WeakMap;function Jt(t){const e=new Promise((n,a)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{n(y(t.result)),r()},s=()=>{a(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Me.set(n,t)}).catch(()=>{}),te.set(e,t),e}function Xt(t){if(Y.has(t))return;const e=new Promise((n,a)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{n(),r()},s=()=>{a(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});Y.set(t,e)}let J={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Y.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pe.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return y(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Zt(t){J=t(J)}function Qt(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const a=t.call(V(this),e,...n);return Pe.set(a,e.sort?e.sort():[e]),y(a)}:Yt().includes(t)?function(...e){return t.apply(V(this),e),y(Me.get(this))}:function(...e){return y(t.apply(V(this),e))}}function en(t){return typeof t=="function"?Qt(t):(t instanceof IDBTransaction&&Xt(t),Gt(t,Kt())?new Proxy(t,J):t)}function y(t){if(t instanceof IDBRequest)return Jt(t);if(j.has(t))return j.get(t);const e=en(t);return e!==t&&(j.set(t,e),te.set(e,t)),e}const V=t=>te.get(t);function Ne(t,e,{blocked:n,upgrade:a,blocking:r,terminated:i}={}){const s=indexedDB.open(t,e),o=y(s);return a&&s.addEventListener("upgradeneeded",c=>{a(y(s.result),c.oldVersion,c.newVersion,y(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),o.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),o}const tn=["get","getKey","getAll","getAllKeys","count"],nn=["put","add","delete","clear"],U=new Map;function ue(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(U.get(e))return U.get(e);const n=e.replace(/FromIndex$/,""),a=e!==n,r=nn.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(r||tn.includes(n)))return;const i=async function(s,...o){const c=this.transaction(s,r?"readwrite":"readonly");let l=c.store;return a&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),r&&c.done]))[0]};return U.set(e,i),i}Zt(t=>({...t,get:(e,n,a)=>ue(e,n)||t.get(e,n,a),has:(e,n)=>!!ue(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rn(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function rn(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const X="@firebase/app",he="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=new Be("@firebase/app"),sn="@firebase/app-compat",on="@firebase/analytics-compat",cn="@firebase/analytics",ln="@firebase/app-check-compat",dn="@firebase/app-check",un="@firebase/auth",hn="@firebase/auth-compat",fn="@firebase/database",pn="@firebase/database-compat",mn="@firebase/functions",gn="@firebase/functions-compat",yn="@firebase/installations",bn="@firebase/installations-compat",En="@firebase/messaging",In="@firebase/messaging-compat",wn="@firebase/performance",Cn="@firebase/performance-compat",vn="@firebase/remote-config",Tn="@firebase/remote-config-compat",_n="@firebase/storage",An="@firebase/storage-compat",Sn="@firebase/firestore",Dn="@firebase/firestore-compat",On="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z="[DEFAULT]",Bn={[X]:"fire-core",[sn]:"fire-core-compat",[cn]:"fire-analytics",[on]:"fire-analytics-compat",[dn]:"fire-app-check",[ln]:"fire-app-check-compat",[un]:"fire-auth",[hn]:"fire-auth-compat",[fn]:"fire-rtdb",[pn]:"fire-rtdb-compat",[mn]:"fire-fn",[gn]:"fire-fn-compat",[yn]:"fire-iid",[bn]:"fire-iid-compat",[En]:"fire-fcm",[In]:"fire-fcm-compat",[wn]:"fire-perf",[Cn]:"fire-perf-compat",[vn]:"fire-rc",[Tn]:"fire-rc-compat",[_n]:"fire-gcs",[An]:"fire-gcs-compat",[Sn]:"fire-fst",[Dn]:"fire-fst-compat","fire-js":"fire-js",[On]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=new Map,Q=new Map;function Mn(t,e){try{t.container.addComponent(e)}catch(n){v.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function T(t){const e=t.name;if(Q.has(e))return v.debug(`There were multiple attempts to register component ${e}.`),!1;Q.set(e,t);for(const n of L.values())Mn(n,t);return!0}function x(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},b=new $("app","Firebase",Pn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new I("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}}function Le(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const a=Object.assign({name:Z,automaticDataCollectionEnabled:!1},e),r=a.name;if(typeof r!="string"||!r)throw b.create("bad-app-name",{appName:String(r)});if(n||(n=Bt()),!n)throw b.create("no-options");const i=L.get(r);if(i){if(N(n,i.options)&&N(a,i.config))return i;throw b.create("duplicate-app",{appName:r})}const s=new Vt(r);for(const c of Q.values())s.addComponent(c);const o=new Nn(n,a,s);return L.set(r,o),o}function Ln(t=Z){const e=L.get(t);if(!e&&t===Z)return Le();if(!e)throw b.create("no-app",{appName:t});return e}function E(t,e,n){var a;let r=(a=Bn[t])!==null&&a!==void 0?a:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),v.warn(o.join(" "));return}T(new I(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="firebase-heartbeat-database",kn=1,M="firebase-heartbeat-store";let z=null;function Re(){return z||(z=Ne(Rn,kn,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(M)}}}).catch(t=>{throw b.create("idb-open",{originalErrorMessage:t.message})})),z}async function $n(t){var e;try{return(await Re()).transaction(M).objectStore(M).get(ke(t))}catch(n){if(n instanceof S)v.warn(n.message);else{const a=b.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});v.warn(a.message)}}}async function fe(t,e){var n;try{const r=(await Re()).transaction(M,"readwrite");return await r.objectStore(M).put(e,ke(t)),r.done}catch(a){if(a instanceof S)v.warn(a.message);else{const r=b.create("idb-set",{originalErrorMessage:(n=a)===null||n===void 0?void 0:n.message});v.warn(r.message)}}}function ke(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=1024,Fn=30*24*60*60*1e3;class Hn{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vn(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=pe();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(r=>r.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Fn}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pe(),{heartbeatsToSend:n,unsentEntries:a}=jn(this._heartbeatsCache.heartbeats),r=Ae(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function pe(){return new Date().toISOString().substring(0,10)}function jn(t,e=xn){const n=[];let a=t.slice();for(const r of t){const i=n.find(s=>s.agent===r.agent);if(i){if(i.dates.push(r.date),me(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),me(n)>e){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class Vn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Se()?De().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $n(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return fe(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return fe(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function me(t){return Ae(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t){T(new I("platform-logger",e=>new an(e),"PRIVATE")),T(new I("heartbeat",e=>new Hn(e),"PRIVATE")),E(X,he,t),E(X,he,"esm2017"),E("fire-js","")}Un("");var zn="firebase",Wn="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */E(zn,Wn,"app");const $e="@firebase/installations",ne="0.5.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=1e4,Fe=`w:${ne}`,He="FIS_v2",qn="https://firebaseinstallations.googleapis.com/v1",Gn=60*60*1e3,Kn="installations",Yn="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},_=new $(Kn,Yn,Jn);function je(t){return t instanceof S&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve({projectId:t}){return`${qn}/projects/${t}/installations`}function Ue(t){return{token:t.token,requestStatus:2,expiresIn:Zn(t.expiresIn),creationTime:Date.now()}}async function ze(t,e){const a=(await e.json()).error;return _.create("request-failed",{requestName:t,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function We({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Xn(t,{refreshToken:e}){const n=We(t);return n.append("Authorization",Qn(e)),n}async function qe(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Zn(t){return Number(t.replace("s","000"))}function Qn(t){return`${He} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const a=Ve(t),r=We(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const s={fid:n,authVersion:He,appId:t.appId,sdkVersion:Fe},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await qe(()=>fetch(a,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Ue(l.authToken)}}else throw await ze("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=/^[cdef][\w-]{21}$/,ee="";function aa(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ra(t);return na.test(n)?n:ee}catch{return ee}}function ra(t){return ta(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=new Map;function Ye(t,e){const n=F(t);Je(n,e),ia(n,e)}function Je(t,e){const n=Ke.get(t);if(!!n)for(const a of n)a(e)}function ia(t,e){const n=sa();n&&n.postMessage({key:t,fid:e}),oa()}let C=null;function sa(){return!C&&"BroadcastChannel"in self&&(C=new BroadcastChannel("[Firebase] FID Change"),C.onmessage=t=>{Je(t.data.key,t.data.fid)}),C}function oa(){Ke.size===0&&C&&(C.close(),C=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="firebase-installations-database",la=1,A="firebase-installations-store";let W=null;function ae(){return W||(W=Ne(ca,la,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(A)}}})),W}async function R(t,e){const n=F(t),r=(await ae()).transaction(A,"readwrite"),i=r.objectStore(A),s=await i.get(n);return await i.put(e,n),await r.done,(!s||s.fid!==e.fid)&&Ye(t,e.fid),e}async function Xe(t){const e=F(t),a=(await ae()).transaction(A,"readwrite");await a.objectStore(A).delete(e),await a.done}async function H(t,e){const n=F(t),r=(await ae()).transaction(A,"readwrite"),i=r.objectStore(A),s=await i.get(n),o=e(s);return o===void 0?await i.delete(n):await i.put(o,n),await r.done,o&&(!s||s.fid!==o.fid)&&Ye(t,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(t){let e;const n=await H(t.appConfig,a=>{const r=da(a),i=ua(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===ee?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function da(t){const e=t||{fid:aa(),registrationStatus:0};return Ze(e)}function ua(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(_.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},a=ha(t,n);return{installationEntry:n,registrationPromise:a}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:fa(t)}:{installationEntry:e}}async function ha(t,e){try{const n=await ea(t,e);return R(t.appConfig,n)}catch(n){throw je(n)&&n.customData.serverCode===409?await Xe(t.appConfig):await R(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function fa(t){let e=await ge(t.appConfig);for(;e.registrationStatus===1;)await Ge(100),e=await ge(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await re(t);return a||n}return e}function ge(t){return H(t,e=>{if(!e)throw _.create("installation-not-found");return Ze(e)})}function Ze(t){return pa(t)?{fid:t.fid,registrationStatus:0}:t}function pa(t){return t.registrationStatus===1&&t.registrationTime+xe<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma({appConfig:t,heartbeatServiceProvider:e},n){const a=ga(t,n),r=Xn(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const s={installation:{sdkVersion:Fe,appId:t.appId}},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await qe(()=>fetch(a,o));if(c.ok){const l=await c.json();return Ue(l)}else throw await ze("Generate Auth Token",c)}function ga(t,{fid:e}){return`${Ve(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(t,e=!1){let n;const a=await H(t.appConfig,i=>{if(!Qe(i))throw _.create("not-registered");const s=i.authToken;if(!e&&Ea(s))return i;if(s.requestStatus===1)return n=ya(t,e),i;{if(!navigator.onLine)throw _.create("app-offline");const o=wa(i);return n=ba(t,o),o}});return n?await n:a.authToken}async function ya(t,e){let n=await ye(t.appConfig);for(;n.authToken.requestStatus===1;)await Ge(100),n=await ye(t.appConfig);const a=n.authToken;return a.requestStatus===0?ie(t,e):a}function ye(t){return H(t,e=>{if(!Qe(e))throw _.create("not-registered");const n=e.authToken;return Ca(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ba(t,e){try{const n=await ma(t,e),a=Object.assign(Object.assign({},e),{authToken:n});return await R(t.appConfig,a),n}catch(n){if(je(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Xe(t.appConfig);else{const a=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await R(t.appConfig,a)}throw n}}function Qe(t){return t!==void 0&&t.registrationStatus===2}function Ea(t){return t.requestStatus===2&&!Ia(t)}function Ia(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Gn}function wa(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ca(t){return t.requestStatus===1&&t.requestTime+xe<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function va(t){const e=t,{installationEntry:n,registrationPromise:a}=await re(e);return a?a.catch(console.error):ie(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(t,e=!1){const n=t;return await _a(n),(await ie(n,e)).token}async function _a(t){const{registrationPromise:e}=await re(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(t){if(!t||!t.options)throw q("App Configuration");if(!t.name)throw q("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw q(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function q(t){return _.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="installations",Sa="installations-internal",Da=t=>{const e=t.getProvider("app").getImmediate(),n=Aa(e),a=x(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},Oa=t=>{const e=t.getProvider("app").getImmediate(),n=x(e,et).getImmediate();return{getId:()=>va(n),getToken:r=>Ta(n,r)}};function Ba(){T(new I(et,Da,"PUBLIC")),T(new I(Sa,Oa,"PRIVATE"))}Ba();E($e,ne);E($e,ne,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k="analytics",Ma="firebase_id",Pa="origin",Na=60*1e3,La="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",tt="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=new Be("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Ra(t,e){const n=document.createElement("script");n.src=`${tt}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function ka(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function $a(t,e,n,a,r,i){const s=a[r];try{if(s)await e[s];else{const c=(await nt(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(o){m.error(o)}t("config",r,i)}async function xa(t,e,n,a,r){try{let i=[];if(r&&r.send_to){let s=r.send_to;Array.isArray(s)||(s=[s]);const o=await nt(n);for(const c of s){const l=o.find(u=>u.measurementId===c),d=l&&e[l.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",a,r||{})}catch(i){m.error(i)}}function Fa(t,e,n,a){async function r(i,s,o){try{i==="event"?await xa(t,e,n,s,o):i==="config"?await $a(t,e,n,a,s,o):i==="consent"?t("consent","update",o):t("set",s)}catch(c){m.error(c)}}return r}function Ha(t,e,n,a,r){let i=function(...s){window[a].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Fa(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function ja(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(tt)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},g=new $("analytics","Analytics",Va);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=30,za=1e3;class Wa{constructor(e={},n=za){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const at=new Wa;function qa(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Ga(t){var e;const{appId:n,apiKey:a}=t,r={method:"GET",headers:qa(a)},i=La.replace("{app-id}",n),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let o="";try{const c=await s.json();!((e=c.error)===null||e===void 0)&&e.message&&(o=c.error.message)}catch{}throw g.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function Ka(t,e=at,n){const{appId:a,apiKey:r,measurementId:i}=t.options;if(!a)throw g.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:a};throw g.create("no-api-key")}const s=e.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Xa;return setTimeout(async()=>{o.abort()},n!==void 0?n:Na),rt({appId:a,apiKey:r,measurementId:i},s,o,e)}async function rt(t,{throttleEndTimeMillis:e,backoffCount:n},a,r=at){var i,s;const{appId:o,measurementId:c}=t;try{await Ya(a,e)}catch(l){if(c)return m.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(i=l)===null||i===void 0?void 0:i.message}]`),{appId:o,measurementId:c};throw l}try{const l=await Ga(t);return r.deleteThrottleMetadata(o),l}catch(l){const d=l;if(!Ja(d)){if(r.deleteThrottleMetadata(o),c)return m.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:c};throw l}const u=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?ce(n,r.intervalMillis,Ua):ce(n,r.intervalMillis),p={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,p),m.debug(`Calling attemptFetch again in ${u} millis`),rt(t,p,a,r)}}function Ya(t,e){return new Promise((n,a)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),a(g.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ja(t){if(!(t instanceof S)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Xa{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Za(t,e,n,a,r){if(r&&r.global){t("event",n,a);return}else{const i=await e,s=Object.assign(Object.assign({},a),{send_to:i});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(){var t;if(Se())try{await De()}catch(e){return m.warn(g.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return m.warn(g.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function er(t,e,n,a,r,i,s){var o;const c=Ka(t);c.then(h=>{n[h.measurementId]=h.appId,t.options.measurementId&&h.measurementId!==t.options.measurementId&&m.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>m.error(h)),e.push(c);const l=Qa().then(h=>{if(h)return a.getId()}),[d,u]=await Promise.all([c,l]);ja(i)||Ra(i,d.measurementId),r("js",new Date);const p=(o=s==null?void 0:s.config)!==null&&o!==void 0?o:{};return p[Pa]="firebase",p.update=!0,u!=null&&(p[Ma]=u),r("config",d.measurementId,p),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.app=e}_delete(){return delete B[this.app.options.appId],Promise.resolve()}}let B={},be=[];const Ee={};let G="dataLayer",nr="gtag",Ie,it,we=!1;function ar(){const t=[];if(vt()&&t.push("This is a browser extension environment."),Tt()||t.push("Cookies are not available."),t.length>0){const e=t.map((a,r)=>`(${r+1}) ${a}`).join(" "),n=g.create("invalid-analytics-context",{errorInfo:e});m.warn(n.message)}}function rr(t,e,n){ar();const a=t.options.appId;if(!a)throw g.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)m.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw g.create("no-api-key");if(B[a]!=null)throw g.create("already-exists",{id:a});if(!we){ka(G);const{wrappedGtag:i,gtagCore:s}=Ha(B,be,Ee,G,nr);it=i,Ie=s,we=!0}return B[a]=er(t,be,Ee,e,Ie,G,n),new tr(t)}function ir(t=Ln()){t=Oe(t);const e=x(t,k);return e.isInitialized()?e.getImmediate():sr(t)}function sr(t,e={}){const n=x(t,k);if(n.isInitialized()){const r=n.getImmediate();if(N(e,n.getOptions()))return r;throw g.create("already-initialized")}return n.initialize({options:e})}function O(t,e,n,a){t=Oe(t),Za(it,B[t.app.options.appId],e,n,a).catch(r=>m.error(r))}const Ce="@firebase/analytics",ve="0.8.4";function or(){T(new I(k,(e,{options:n})=>{const a=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return rr(a,r,n)},"PUBLIC")),T(new I("analytics-internal",t,"PRIVATE")),E(Ce,ve),E(Ce,ve,"esm2017");function t(e){try{const n=e.getProvider(k).getImmediate();return{logEvent:(a,r,i)=>O(n,a,r,i)}}catch(n){throw g.create("interop-component-reg-failed",{reason:n})}}}or();function K(t,e){parent=document.createElement("h1");for(let n=0;n<=e.length-1;n++){let a=document.createElement("span"),r=document.createElement("h1");r.textContent=e[n],a.innerHTML=e[n],a.classList.add("character"),parent.appendChild(a)}t.appendChild(parent)}function cr(){var t=document.getElementById("second-page-heading-container"),e=document.getElementById("third-page-heading-container"),n=document.getElementById("fourth-page-heading-container");const r=Le({apiKey:"AIzaSyCVs2rwJLr5Wv5geSMIOwlTKS42Ztfn9Do",authDomain:"portfolio-site-f6637.firebaseapp.com",projectId:"portfolio-site-f6637",storageBucket:"portfolio-site-f6637.appspot.com",messagingSenderId:"854501461887",appId:"1:854501461887:web:d17b4c4192f05984cd544a",measurementId:"G-K6VY6F5V56"}),i=ir(r);K(t,"Projects"),K(e,"Hobby"),K(n,"Contact");var s=new mt,o=[];o.push(document.getElementById("main-menu-home-item")),o.push(document.getElementById("main-menu-project-item")),o.push(document.getElementById("main-menu-hobby-item")),o.push(document.getElementById("main-menu-contact-item")),P(o,"click",s.OnClickNavigate),new ht;var c=document.getElementsByClassName("image-item");P(c,"click",pt),P(c,"click",h=>{O(i,"image_clicked")});var l=new Et,d=document.getElementsByClassName("parent")[0];new ot(d,4),d.addEventListener("PageOpened",l.onPageOpened),d.addEventListener("PageOpened",h=>{O(i,"page_opened",{page:h.detail})}),d.addEventListener("PageClosed",l.onPageClosed);var u=document.getElementsByClassName("second-page-description-box")[0];u.addEventListener("PageOpened",h=>{O(i,"project_opened",{page:h.detail})});var p=document.getElementsByTagName("a");P(p,"click",h=>{O(i,"link_clicked",{link:h.currentTarget.href})})}cr();
