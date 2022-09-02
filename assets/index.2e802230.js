const at=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};at();function H(e,t,n=!0){this.list=e;var r=t,a=function(){const c=new CustomEvent("Selected",{detail:r});r.dispatchEvent(c)},i=function(){n&&o()};this.setSelectedItemByIndex=function(c){this.selectedItem=e[c]},this.setSelectedItemByValue=function(c){if(e.includes(c)){this.selectedItem=c;return}throw"Value Not in List"},this.AddEventlistenerToList=function(c,l){for(var d=0;d<e.length;d++)e[d].addEventListener(c,l),e[d].index=d;a()};var s=function(c){const l=new CustomEvent("Selected",{detail:c.currentTarget}),d=new CustomEvent("Deselected",{detail:r});r.dispatchEvent(d),r=e[c.currentTarget.index],c.currentTarget.dispatchEvent(l)},o=function(){for(var c=0;c<e.length;c++)e[c].addEventListener("mouseenter",s)};i()}function it(e,t){this.parent=e,this.totalPage=t;var n=this.parent.scrollHeight,r=n/this.totalPage,a=1,i=0,s=function(){r=e.scrollHeight/t},o=function(c){if(s(),i>c.currentTarget.scrollTop){if(c.currentTarget.scrollTop/r%1<.1){let l=new CustomEvent("PageClosed",{detail:a});c.currentTarget.dispatchEvent(l),a=Math.round(c.currentTarget.scrollTop/r)+1;let d=new CustomEvent("PageOpened",{detail:a});c.currentTarget.dispatchEvent(d)}}else if(a!=Math.round(c.currentTarget.scrollTop/r)+1){let l=new CustomEvent("PageClosed",{detail:a});c.currentTarget.dispatchEvent(l),a=Math.round(c.currentTarget.scrollTop/r)+1;let d=new CustomEvent("PageOpened",{detail:a});c.currentTarget.dispatchEvent(d)}i=c.currentTarget.scrollTop};this.parent.addEventListener("scroll",o)}/**
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
 */const ve=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=a&63|128):(a&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=a&63|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=a&63|128)}return t},st=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const i=e[n++];t[r++]=String.fromCharCode((a&31)<<6|i&63)}else if(a>239&&a<365){const i=e[n++],s=e[n++],o=e[n++],c=((a&7)<<18|(i&63)<<12|(s&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((a&15)<<12|(i&63)<<6|s&63)}}return t.join("")},ot={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<e.length;a+=3){const i=e[a],s=a+1<e.length,o=s?e[a+1]:0,c=a+2<e.length,l=c?e[a+2]:0,d=i>>2,h=(i&3)<<4|o>>4;let m=(o&15)<<2|l>>6,f=l&63;c||(f=64,s||(m=64)),r.push(n[d],n[h],n[m],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ve(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):st(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<e.length;){const i=n[e.charAt(a++)],o=a<e.length?n[e.charAt(a)]:0;++a;const l=a<e.length?n[e.charAt(a)]:64;++a;const h=a<e.length?n[e.charAt(a)]:64;if(++a,i==null||o==null||l==null||h==null)throw Error();const m=i<<2|o>>4;if(r.push(m),l!==64){const f=o<<4&240|l>>2;if(r.push(f),h!==64){const rt=l<<6&192|h;r.push(rt)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ct=function(e){const t=ve(e);return ot.encodeByteArray(t,!0)},Ce=function(e){return ct(e).replace(/\./g,"")};/**
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
 */class lt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function dt(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Te(){return typeof indexedDB=="object"}function Ae(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var i;t(((i=a.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function ut(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const ht="FirebaseError";class _ extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ht,Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L.prototype.create)}}class L{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},a=`${this.service}/${t}`,i=this.errors[t],s=i?ft(i,r):"Error",o=`${this.serviceName}: ${s} (${a}).`;return new _(a,o,r)}}function ft(e,t){return e.replace(pt,(n,r)=>{const a=t[r];return a!=null?String(a):`<${r}?>`})}const pt=/\{\$([^}]+)}/g;function M(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const a of n){if(!r.includes(a))return!1;const i=e[a],s=t[a];if(ae(i)&&ae(s)){if(!M(i,s))return!1}else if(i!==s)return!1}for(const a of r)if(!n.includes(a))return!1;return!0}function ae(e){return e!==null&&typeof e=="object"}/**
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
 */const mt=1e3,gt=2,yt=4*60*60*1e3,bt=.5;function ie(e,t=mt,n=gt){const r=t*Math.pow(n,e),a=Math.round(bt*r*(Math.random()-.5)*2);return Math.min(yt,r+a)}/**
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
 */function Se(e){return e&&e._delegate?e._delegate:e}class I{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class It{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new lt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),a=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(a)return null;throw i}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Et(t))try{this.getOrInitializeService({instanceIdentifier:w})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:a});r.resolve(i)}catch{}}}}clearInstance(t=w){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=w){return this.instances.has(t)}getOptions(t=w){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);r===o&&s.resolve(a)}return a}onInit(t,n){var r;const a=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(a,i);const s=this.instances.get(a);return s&&t(s,a),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const a of r)try{a(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wt(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=w){return this.component?this.component.multipleInstances?t:w:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wt(e){return e===w?void 0:e}function Et(e){return e.instantiationMode==="EAGER"}/**
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
 */class vt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new It(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var u;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(u||(u={}));const Ct={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},Tt=u.INFO,At={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},St=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),a=At[t];if(a)console[a](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class _e{constructor(t){this.name=t,this._logLevel=Tt,this._logHandler=St,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in u))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ct[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...t),this._logHandler(this,u.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...t),this._logHandler(this,u.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,u.INFO,...t),this._logHandler(this,u.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,u.WARN,...t),this._logHandler(this,u.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...t),this._logHandler(this,u.ERROR,...t)}}const _t=(e,t)=>t.some(n=>e instanceof n);let se,oe;function Dt(){return se||(se=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ot(){return oe||(oe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const De=new WeakMap,K=new WeakMap,Oe=new WeakMap,j=new WeakMap,Q=new WeakMap;function Bt(e){const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{n(y(e.result)),a()},s=()=>{r(e.error),a()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&De.set(n,e)}).catch(()=>{}),Q.set(t,e),t}function Mt(e){if(K.has(e))return;const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{n(),a()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});K.set(e,t)}let Y={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return K.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Oe.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return y(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Nt(e){Y=e(Y)}function kt(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(V(this),t,...n);return Oe.set(r,t.sort?t.sort():[t]),y(r)}:Ot().includes(e)?function(...t){return e.apply(V(this),t),y(De.get(this))}:function(...t){return y(e.apply(V(this),t))}}function Pt(e){return typeof e=="function"?kt(e):(e instanceof IDBTransaction&&Mt(e),_t(e,Dt())?new Proxy(e,Y):e)}function y(e){if(e instanceof IDBRequest)return Bt(e);if(j.has(e))return j.get(e);const t=Pt(e);return t!==e&&(j.set(e,t),Q.set(t,e)),t}const V=e=>Q.get(e);function Be(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const s=indexedDB.open(e,t),o=y(s);return r&&s.addEventListener("upgradeneeded",c=>{r(y(s.result),c.oldVersion,c.newVersion,y(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),o.then(c=>{i&&c.addEventListener("close",()=>i()),a&&c.addEventListener("versionchange",()=>a())}).catch(()=>{}),o}const Lt=["get","getKey","getAll","getAllKeys","count"],Rt=["put","add","delete","clear"],z=new Map;function ce(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(z.get(t))return z.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=Rt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||Lt.includes(n)))return;const i=async function(s,...o){const c=this.transaction(s,a?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),a&&c.done]))[0]};return z.set(t,i),i}Nt(e=>({...e,get:(t,n,r)=>ce(t,n)||e.get(t,n,r),has:(t,n)=>!!ce(t,n)||e.has(t,n)}));/**
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
 */class $t{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xt(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xt(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const J="@firebase/app",le="0.7.31";/**
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
 */const v=new _e("@firebase/app"),Ft="@firebase/app-compat",Ht="@firebase/analytics-compat",jt="@firebase/analytics",Vt="@firebase/app-check-compat",zt="@firebase/app-check",Ut="@firebase/auth",Wt="@firebase/auth-compat",qt="@firebase/database",Gt="@firebase/database-compat",Kt="@firebase/functions",Yt="@firebase/functions-compat",Jt="@firebase/installations",Xt="@firebase/installations-compat",Zt="@firebase/messaging",Qt="@firebase/messaging-compat",en="@firebase/performance",tn="@firebase/performance-compat",nn="@firebase/remote-config",rn="@firebase/remote-config-compat",an="@firebase/storage",sn="@firebase/storage-compat",on="@firebase/firestore",cn="@firebase/firestore-compat",ln="firebase";/**
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
 */const Me="[DEFAULT]",dn={[J]:"fire-core",[Ft]:"fire-core-compat",[jt]:"fire-analytics",[Ht]:"fire-analytics-compat",[zt]:"fire-app-check",[Vt]:"fire-app-check-compat",[Ut]:"fire-auth",[Wt]:"fire-auth-compat",[qt]:"fire-rtdb",[Gt]:"fire-rtdb-compat",[Kt]:"fire-fn",[Yt]:"fire-fn-compat",[Jt]:"fire-iid",[Xt]:"fire-iid-compat",[Zt]:"fire-fcm",[Qt]:"fire-fcm-compat",[en]:"fire-perf",[tn]:"fire-perf-compat",[nn]:"fire-rc",[rn]:"fire-rc-compat",[an]:"fire-gcs",[sn]:"fire-gcs-compat",[on]:"fire-fst",[cn]:"fire-fst-compat","fire-js":"fire-js",[ln]:"fire-js-all"};/**
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
 */const N=new Map,X=new Map;function un(e,t){try{e.container.addComponent(t)}catch(n){v.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function C(e){const t=e.name;if(X.has(t))return v.debug(`There were multiple attempts to register component ${t}.`),!1;X.set(t,e);for(const n of N.values())un(n,e);return!0}function R(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const hn={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},T=new L("app","Firebase",hn);/**
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
 */class fn{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new I("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw T.create("app-deleted",{appName:this._name})}}function pn(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Me,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw T.create("bad-app-name",{appName:String(r)});const a=N.get(r);if(a){if(M(e,a.options)&&M(n,a.config))return a;throw T.create("duplicate-app",{appName:r})}const i=new vt(r);for(const o of X.values())i.addComponent(o);const s=new fn(e,n,i);return N.set(r,s),s}function mn(e=Me){const t=N.get(e);if(!t)throw T.create("no-app",{appName:e});return t}function b(e,t,n){var r;let a=(r=dn[e])!==null&&r!==void 0?r:e;n&&(a+=`-${n}`);const i=a.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const o=[`Unable to register library "${a}" with version "${t}":`];i&&o.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),v.warn(o.join(" "));return}C(new I(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const gn="firebase-heartbeat-database",yn=1,O="firebase-heartbeat-store";let U=null;function Ne(){return U||(U=Be(gn,yn,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(O)}}}).catch(e=>{throw T.create("idb-open",{originalErrorMessage:e.message})})),U}async function bn(e){var t;try{return(await Ne()).transaction(O).objectStore(O).get(ke(e))}catch(n){if(n instanceof _)v.warn(n.message);else{const r=T.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});v.warn(r.message)}}}async function de(e,t){var n;try{const a=(await Ne()).transaction(O,"readwrite");return await a.objectStore(O).put(t,ke(e)),a.done}catch(r){if(r instanceof _)v.warn(r.message);else{const a=T.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});v.warn(a.message)}}}function ke(e){return`${e.name}!${e.options.appId}`}/**
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
 */const In=1024,wn=30*24*60*60*1e3;class En{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cn(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ue();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const i=new Date(a.date).valueOf();return Date.now()-i<=wn}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ue(),{heartbeatsToSend:n,unsentEntries:r}=vn(this._heartbeatsCache.heartbeats),a=Ce(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function ue(){return new Date().toISOString().substring(0,10)}function vn(e,t=In){const n=[];let r=e.slice();for(const a of e){const i=n.find(s=>s.agent===a.agent);if(i){if(i.dates.push(a.date),he(n)>t){i.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),he(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Cn{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Te()?Ae().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bn(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return de(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return de(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function he(e){return Ce(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Tn(e){C(new I("platform-logger",t=>new $t(t),"PRIVATE")),C(new I("heartbeat",t=>new En(t),"PRIVATE")),b(J,le,e),b(J,le,"esm2017"),b("fire-js","")}Tn("");var An="firebase",Sn="9.9.3";/**
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
 */b(An,Sn,"app");const Pe="@firebase/installations",ee="0.5.12";/**
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
 */const Le=1e4,Re=`w:${ee}`,$e="FIS_v2",_n="https://firebaseinstallations.googleapis.com/v1",Dn=60*60*1e3,On="installations",Bn="Installations";/**
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
 */const Mn={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},A=new L(On,Bn,Mn);function xe(e){return e instanceof _&&e.code.includes("request-failed")}/**
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
 */function Fe({projectId:e}){return`${_n}/projects/${e}/installations`}function He(e){return{token:e.token,requestStatus:2,expiresIn:kn(e.expiresIn),creationTime:Date.now()}}async function je(e,t){const r=(await t.json()).error;return A.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ve({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Nn(e,{refreshToken:t}){const n=Ve(e);return n.append("Authorization",Pn(t)),n}async function ze(e){const t=await e();return t.status>=500&&t.status<600?e():t}function kn(e){return Number(e.replace("s","000"))}function Pn(e){return`${$e} ${e}`}/**
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
 */async function Ln({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Fe(e),a=Ve(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&a.append("x-firebase-client",l)}const s={fid:n,authVersion:$e,appId:e.appId,sdkVersion:Re},o={method:"POST",headers:a,body:JSON.stringify(s)},c=await ze(()=>fetch(r,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:He(l.authToken)}}else throw await je("Create Installation",c)}/**
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
 */function Ue(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Rn(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const $n=/^[cdef][\w-]{21}$/,Z="";function xn(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Fn(e);return $n.test(n)?n:Z}catch{return Z}}function Fn(e){return Rn(e).substr(0,22)}/**
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
 */function $(e){return`${e.appName}!${e.appId}`}/**
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
 */const We=new Map;function qe(e,t){const n=$(e);Ge(n,t),Hn(n,t)}function Ge(e,t){const n=We.get(e);if(!!n)for(const r of n)r(t)}function Hn(e,t){const n=jn();n&&n.postMessage({key:e,fid:t}),Vn()}let E=null;function jn(){return!E&&"BroadcastChannel"in self&&(E=new BroadcastChannel("[Firebase] FID Change"),E.onmessage=e=>{Ge(e.data.key,e.data.fid)}),E}function Vn(){We.size===0&&E&&(E.close(),E=null)}/**
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
 */const zn="firebase-installations-database",Un=1,S="firebase-installations-store";let W=null;function te(){return W||(W=Be(zn,Un,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(S)}}})),W}async function k(e,t){const n=$(e),a=(await te()).transaction(S,"readwrite"),i=a.objectStore(S),s=await i.get(n);return await i.put(t,n),await a.done,(!s||s.fid!==t.fid)&&qe(e,t.fid),t}async function Ke(e){const t=$(e),r=(await te()).transaction(S,"readwrite");await r.objectStore(S).delete(t),await r.done}async function x(e,t){const n=$(e),a=(await te()).transaction(S,"readwrite"),i=a.objectStore(S),s=await i.get(n),o=t(s);return o===void 0?await i.delete(n):await i.put(o,n),await a.done,o&&(!s||s.fid!==o.fid)&&qe(e,o.fid),o}/**
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
 */async function ne(e){let t;const n=await x(e.appConfig,r=>{const a=Wn(r),i=qn(e,a);return t=i.registrationPromise,i.installationEntry});return n.fid===Z?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Wn(e){const t=e||{fid:xn(),registrationStatus:0};return Ye(t)}function qn(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(A.create("app-offline"));return{installationEntry:t,registrationPromise:a}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Gn(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Kn(e)}:{installationEntry:t}}async function Gn(e,t){try{const n=await Ln(e,t);return k(e.appConfig,n)}catch(n){throw xe(n)&&n.customData.serverCode===409?await Ke(e.appConfig):await k(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Kn(e){let t=await fe(e.appConfig);for(;t.registrationStatus===1;)await Ue(100),t=await fe(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ne(e);return r||n}return t}function fe(e){return x(e,t=>{if(!t)throw A.create("installation-not-found");return Ye(t)})}function Ye(e){return Yn(e)?{fid:e.fid,registrationStatus:0}:e}function Yn(e){return e.registrationStatus===1&&e.registrationTime+Le<Date.now()}/**
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
 */async function Jn({appConfig:e,heartbeatServiceProvider:t},n){const r=Xn(e,n),a=Nn(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&a.append("x-firebase-client",l)}const s={installation:{sdkVersion:Re,appId:e.appId}},o={method:"POST",headers:a,body:JSON.stringify(s)},c=await ze(()=>fetch(r,o));if(c.ok){const l=await c.json();return He(l)}else throw await je("Generate Auth Token",c)}function Xn(e,{fid:t}){return`${Fe(e)}/${t}/authTokens:generate`}/**
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
 */async function re(e,t=!1){let n;const r=await x(e.appConfig,i=>{if(!Je(i))throw A.create("not-registered");const s=i.authToken;if(!t&&er(s))return i;if(s.requestStatus===1)return n=Zn(e,t),i;{if(!navigator.onLine)throw A.create("app-offline");const o=nr(i);return n=Qn(e,o),o}});return n?await n:r.authToken}async function Zn(e,t){let n=await pe(e.appConfig);for(;n.authToken.requestStatus===1;)await Ue(100),n=await pe(e.appConfig);const r=n.authToken;return r.requestStatus===0?re(e,t):r}function pe(e){return x(e,t=>{if(!Je(t))throw A.create("not-registered");const n=t.authToken;return rr(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Qn(e,t){try{const n=await Jn(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await k(e.appConfig,r),n}catch(n){if(xe(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ke(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await k(e.appConfig,r)}throw n}}function Je(e){return e!==void 0&&e.registrationStatus===2}function er(e){return e.requestStatus===2&&!tr(e)}function tr(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Dn}function nr(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function rr(e){return e.requestStatus===1&&e.requestTime+Le<Date.now()}/**
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
 */async function ar(e){const t=e,{installationEntry:n,registrationPromise:r}=await ne(t);return r?r.catch(console.error):re(t).catch(console.error),n.fid}/**
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
 */async function ir(e,t=!1){const n=e;return await sr(n),(await re(n,t)).token}async function sr(e){const{registrationPromise:t}=await ne(e);t&&await t}/**
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
 */function or(e){if(!e||!e.options)throw q("App Configuration");if(!e.name)throw q("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw q(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function q(e){return A.create("missing-app-config-values",{valueName:e})}/**
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
 */const Xe="installations",cr="installations-internal",lr=e=>{const t=e.getProvider("app").getImmediate(),n=or(t),r=R(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},dr=e=>{const t=e.getProvider("app").getImmediate(),n=R(t,Xe).getImmediate();return{getId:()=>ar(n),getToken:a=>ir(n,a)}};function ur(){C(new I(Xe,lr,"PUBLIC")),C(new I(cr,dr,"PRIVATE"))}ur();b(Pe,ee);b(Pe,ee,"esm2017");/**
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
 */const P="analytics",hr="firebase_id",fr="origin",pr=60*1e3,mr="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ze="https://www.googletagmanager.com/gtag/js";/**
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
 */const p=new _e("@firebase/analytics");/**
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
 */function Qe(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function gr(e,t){const n=document.createElement("script");n.src=`${Ze}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function yr(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function br(e,t,n,r,a,i){const s=r[a];try{if(s)await t[s];else{const c=(await Qe(n)).find(l=>l.measurementId===a);c&&await t[c.appId]}}catch(o){p.error(o)}e("config",a,i)}async function Ir(e,t,n,r,a){try{let i=[];if(a&&a.send_to){let s=a.send_to;Array.isArray(s)||(s=[s]);const o=await Qe(n);for(const c of s){const l=o.find(h=>h.measurementId===c),d=l&&t[l.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,a||{})}catch(i){p.error(i)}}function wr(e,t,n,r){async function a(i,s,o){try{i==="event"?await Ir(e,t,n,s,o):i==="config"?await br(e,t,n,r,s,o):i==="consent"?e("consent","update",o):e("set",s)}catch(c){p.error(c)}}return a}function Er(e,t,n,r,a){let i=function(...s){window[r].push(arguments)};return window[a]&&typeof window[a]=="function"&&(i=window[a]),window[a]=wr(i,e,t,n),{gtagCore:i,wrappedGtag:window[a]}}function vr(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ze))return t;return null}/**
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
 */const Cr={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},g=new L("analytics","Analytics",Cr);/**
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
 */const Tr=30,Ar=1e3;class Sr{constructor(t={},n=Ar){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const et=new Sr;function _r(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Dr(e){var t;const{appId:n,apiKey:r}=e,a={method:"GET",headers:_r(r)},i=mr.replace("{app-id}",n),s=await fetch(i,a);if(s.status!==200&&s.status!==304){let o="";try{const c=await s.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw g.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function Or(e,t=et,n){const{appId:r,apiKey:a,measurementId:i}=e.options;if(!r)throw g.create("no-app-id");if(!a){if(i)return{measurementId:i,appId:r};throw g.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Nr;return setTimeout(async()=>{o.abort()},n!==void 0?n:pr),tt({appId:r,apiKey:a,measurementId:i},s,o,t)}async function tt(e,{throttleEndTimeMillis:t,backoffCount:n},r,a=et){var i,s;const{appId:o,measurementId:c}=e;try{await Br(r,t)}catch(l){if(c)return p.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(i=l)===null||i===void 0?void 0:i.message}]`),{appId:o,measurementId:c};throw l}try{const l=await Dr(e);return a.deleteThrottleMetadata(o),l}catch(l){const d=l;if(!Mr(d)){if(a.deleteThrottleMetadata(o),c)return p.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:c};throw l}const h=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?ie(n,a.intervalMillis,Tr):ie(n,a.intervalMillis),m={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return a.setThrottleMetadata(o,m),p.debug(`Calling attemptFetch again in ${h} millis`),tt(e,m,r,a)}}function Br(e,t){return new Promise((n,r)=>{const a=Math.max(t-Date.now(),0),i=setTimeout(n,a);e.addEventListener(()=>{clearTimeout(i),r(g.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Mr(e){if(!(e instanceof _)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Nr{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function kr(e,t,n,r,a){if(a&&a.global){e("event",n,r);return}else{const i=await t,s=Object.assign(Object.assign({},r),{send_to:i});e("event",n,s)}}/**
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
 */async function Pr(){var e;if(Te())try{await Ae()}catch(t){return p.warn(g.create("indexeddb-unavailable",{errorInfo:(e=t)===null||e===void 0?void 0:e.toString()}).message),!1}else return p.warn(g.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Lr(e,t,n,r,a,i,s){var o;const c=Or(e);c.then(f=>{n[f.measurementId]=f.appId,e.options.measurementId&&f.measurementId!==e.options.measurementId&&p.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>p.error(f)),t.push(c);const l=Pr().then(f=>{if(f)return r.getId()}),[d,h]=await Promise.all([c,l]);vr()||gr(i,d.measurementId),a("js",new Date);const m=(o=s==null?void 0:s.config)!==null&&o!==void 0?o:{};return m[fr]="firebase",m.update=!0,h!=null&&(m[hr]=h),a("config",d.measurementId,m),d.measurementId}/**
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
 */class Rr{constructor(t){this.app=t}_delete(){return delete D[this.app.options.appId],Promise.resolve()}}let D={},me=[];const ge={};let G="dataLayer",$r="gtag",ye,nt,be=!1;function xr(){const e=[];if(dt()&&e.push("This is a browser extension environment."),ut()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,a)=>`(${a+1}) ${r}`).join(" "),n=g.create("invalid-analytics-context",{errorInfo:t});p.warn(n.message)}}function Fr(e,t,n){xr();const r=e.options.appId;if(!r)throw g.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)p.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw g.create("no-api-key");if(D[r]!=null)throw g.create("already-exists",{id:r});if(!be){yr(G);const{wrappedGtag:i,gtagCore:s}=Er(D,me,ge,G,$r);nt=i,ye=s,be=!0}return D[r]=Lr(e,me,ge,t,ye,G,n),new Rr(e)}function Hr(e=mn()){e=Se(e);const t=R(e,P);return t.isInitialized()?t.getImmediate():jr(e)}function jr(e,t={}){const n=R(e,P);if(n.isInitialized()){const a=n.getImmediate();if(M(t,n.getOptions()))return a;throw g.create("already-initialized")}return n.initialize({options:t})}function B(e,t,n,r){e=Se(e),kr(nt,D[e.app.options.appId],t,n,r).catch(a=>p.error(a))}const Ie="@firebase/analytics",we="0.8.0";function Vr(){C(new I(P,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),a=t.getProvider("installations-internal").getImmediate();return Fr(r,a,n)},"PUBLIC")),C(new I("analytics-internal",e,"PRIVATE")),b(Ie,we),b(Ie,we,"esm2017");function e(t){try{const n=t.getProvider(P).getImmediate();return{logEvent:(r,a,i)=>B(n,r,a,i)}}catch(n){throw g.create("interop-component-reg-failed",{reason:n})}}}Vr();function zr(){var e,t="white";this.HighlightOnSelect=function(n){e=n.currentTarget.style.color,n.currentTarget.style.color=t},this.DeHighlightOnDeselct=function(n){n.currentTarget.style.color=e}}function Ur(){var e={};function t(s,o){let l=document.getElementsByClassName("rightbox")[0].getElementsByClassName("contentlink")[0],d=document.createElement("h2"),h=document.createElement("a");h.href=o,h.innerHTML=s,d.appendChild(h),l.appendChild(d)}function n(){let o=document.getElementsByClassName("rightbox")[0].getElementsByClassName("contentlink")[0];for(;o.childElementCount>0;)o.removeChild(o.firstChild)}function r(s,o,c){this.title=s,this.description=o,this.links=c}function a(s,o){this.link=o,this.title=s}function i(s,o){e[s]=o}this.OnClickChangeDescriptionPanel=function(s){n();var o=document.getElementsByClassName("rightbox")[0],c=s.currentTarget.getElementsByTagName("h2")[0].innerHTML,l=e[c],d=l.links;o.getElementsByTagName("h3")[0].innerHTML=l.description;for(let h=0;h<d.length;h++)t(d[h].title,d[h].link)},i("Planes",new r("Planes","Collaborated with 3 other developers to create plane shooter game in Unity C#. Implemented AI behaviour, Analytics with GameAnalytics and create Android port",[new a("Website","https://itervision.com/planes")])),i("Respark",new r("Respark","Worked with 6 other developers to create open world 3rd person MMO with Unity and Mirror Networking library",[new a("Website","https://playrespark.com/")]))}function Wr(e){e.currentTarget.style.transform="scale(1.1) translateZ(10px)"}function qr(e){e.currentTarget.style.transform="initial"}function Gr(){function e(){document.getElementById("myModal").style.display="none"}document.getElementsByClassName("close")[0].addEventListener("click",e),document.addEventListener("keydown",t=>{t.key=="Escape"&&e()})}function Kr(e){var t=document.getElementById("myModal"),n=e.currentTarget.getElementsByTagName("img")[0].src;t.style.display="initial",t.getElementsByTagName("img")[0].src=n;var r=String(n).split("/")[String(n).split("/").length-1].split(".")[0].replace(/%/g," ").replace(/20/g,"");t.getElementsByTagName("div")[0].innerHTML=r}function Yr(){var e=document.getElementsByClassName("parent")[0],t={Hobby:3,Project:2,Contact:4};this.OnClickNavigate=function(r){var a=t[r.currentTarget.children[0].textContent];n((a-1)*e.clientHeight)};function n(r){e.scroll({top:r,left:0,behavior:"smooth"})}}var Ee=function(){this.pageIndex=1,this.OnOpened=function(){document.getElementById("projectbutton").style.animation="FadeIn 1s ease-in-out forwards",document.getElementById("contactbutton").style.animation="FadeIn 1s ease-in-out forwards",document.getElementById("hobbybutton").style.animation="FadeIn 1s ease-in-out forwards"},this.OnClosed=function(){document.getElementById("projectbutton").style.animation="",document.getElementById("contactbutton").style.animation="",document.getElementById("hobbybutton").style.animation=""}},Jr=function(){this.pageIndex=2,this.OnOpened=function(){let e=document.getElementsByClassName("projecttitlebox"),t=.75;for(let n=0;n<e.length;n++)e[n].style.animation=`SlideColor ease-in-out 0.75s forwards ${t*n}s`;document.getElementsByClassName("rightbox")[0].style.animation="Enlarge ease-in-out 1.2s forwards"},this.OnClosed=function(){document.getElementsByClassName("titlebox")[0].style.animation="";let e=document.getElementsByClassName("projecttitlebox");for(let t=0;t<e.length;t++)e[t].style.animation="";document.getElementsByClassName("rightbox")[0].style.animation=""}},Xr=function(){this.pageIndex=3,this.OnOpened=function(){var e=document.getElementsByClassName("imageitem");let t=.1;for(let n=0;n<e.length;n++)e[n].style.animation=`FadeIn 1.5s forwards ${t*(n+1)}s`},this.OnClosed=function(){document.getElementsByClassName("titlebox")[1].style.animation="";var e=document.getElementsByClassName("imageitem");for(let t=0;t<e.length;t++)e[t].style.animation=""}},Zr=function(){this.pageIndex=4,this.OnOpened=function(){document.getElementsByTagName("h1")[3].style.animation="Rotate 1s forwards",document.getElementsByTagName("h2")[5].style.animation="FadeIn 1s forwards 0.5s",document.getElementsByTagName("h3")[1].style.animation="FadeIn 1s forwards 1s"},this.OnClosed=function(){document.getElementsByTagName("h1")[3].style.animation="",document.getElementsByTagName("h2")[5].style.animation="",document.getElementsByTagName("h3")[1].style.animation=""}};function Qr(){var e={},t={};function n(r){r==null||r.pageIndex==null||(r.OnOpened==null&&(r.OnOpened=()=>{}),r.OnClosed==null&&(r.OnClosed=()=>{}),e[r.pageIndex]=r.OnOpened,t[r.pageIndex]=r.OnClosed)}this.onPageClosed=function(r){typeof t[r.detail]=="function"&&t[r.detail]()},this.onPageOpened=function(r){typeof e[r.detail]=="function"&&e[r.detail]()},n(new Ee),n(new Jr),n(new Xr),n(new Zr),new Ee().OnOpened()}const ea={apiKey:"AIzaSyCVs2rwJLr5Wv5geSMIOwlTKS42Ztfn9Do",authDomain:"portfolio-site-f6637.firebaseapp.com",projectId:"portfolio-site-f6637",storageBucket:"portfolio-site-f6637.appspot.com",messagingSenderId:"854501461887",appId:"1:854501461887:web:d17b4c4192f05984cd544a",measurementId:"G-K6VY6F5V56"},ta=pn(ea),F=Hr(ta);function na(e){B(F,"page_opened",{page:e.detail})}function ra(e){var t={Hobby:3,Project:2,Contact:4};let n=t[e.currentTarget.children[0].textContent];B(F,"page_opened",{page:n})}function aa(e){let t=e.currentTarget.getElementsByTagName("h2")[0].innerHTML;B(F,"project_opened",{project:t})}function ia(e){console.log("image opneed");var t=e.currentTarget.getElementsByTagName("img")[0].src;let n=String(t).split("/")[String(t).split("/").length-1].split(".")[0].replace(/%/g," ").replace(/20/g,"");B(F,"image_clicked",{image:n})}function sa(){var e=new Yr,t=document.getElementById("MainMenuItem"),n=new H(t.children,t.children[0]),r=new zr;n.AddEventlistenerToList("mouseenter",r.HighlightOnSelect),n.AddEventlistenerToList("mouseleave",r.DeHighlightOnDeselct),n.AddEventlistenerToList("click",e.OnClickNavigate),n.AddEventlistenerToList("click",ra);var a=document.getElementsByClassName("projecttitlebox"),i=new H(a,a[0],!1),s=new Ur;i.AddEventlistenerToList("mouseenter",r.HighlightOnSelect),i.AddEventlistenerToList("mouseleave",r.DeHighlightOnDeselct),i.AddEventlistenerToList("click",s.OnClickChangeDescriptionPanel),i.AddEventlistenerToList("Selected",s.OnClickChangeDescriptionPanel),i.AddEventlistenerToList("click",aa),Gr();var o=document.getElementsByClassName("imageitem"),c=new H(o,o[0]);c.AddEventlistenerToList("mouseenter",Wr),c.AddEventlistenerToList("mouseleave",qr),c.AddEventlistenerToList("click",Kr),c.AddEventlistenerToList("click",ia);var l=new Qr,d=document.getElementsByClassName("parent")[0];new it(d,4),d.addEventListener("PageOpened",l.onPageOpened),d.addEventListener("PageClosed",l.onPageClosed),d.addEventListener("PageOpened",na)}sa();
