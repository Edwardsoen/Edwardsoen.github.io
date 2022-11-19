import{initializeApp as y}from"https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";import{getAnalytics as w,logEvent as h}from"https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";const P=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}};P();function T(i,e){this.parent=i,this.totalPage=e;var a=this.parent.scrollHeight,t=a/this.totalPage,n=1,r=0,s=function(){t=i.scrollHeight/e},g=function(o){if(s(),r>o.currentTarget.scrollTop){if(o.currentTarget.scrollTop/t%1<.1){let u=new CustomEvent("PageClosed",{detail:n});o.currentTarget.dispatchEvent(u),n=Math.round(o.currentTarget.scrollTop/t)+1;let c=new CustomEvent("PageOpened",{detail:n});o.currentTarget.dispatchEvent(c)}}else if(n!=Math.round(o.currentTarget.scrollTop/t)+1){let u=new CustomEvent("PageClosed",{detail:n});o.currentTarget.dispatchEvent(u),n=Math.round(o.currentTarget.scrollTop/t)+1;let c=new CustomEvent("PageOpened",{detail:n});o.currentTarget.dispatchEvent(c)}r=o.currentTarget.scrollTop};this.parent.addEventListener("scroll",g)}function L(i,e){this.parent=i,this.totalPage=e;var a=this.parent.scrollWidth,t=a/this.totalPage,n=1,r=0,s=function(){t=i.scrollWidth/e},g=function(o){if(s(),r>o.currentTarget.scrollLeft){if(o.currentTarget.scrollLeft/t%1<.1){let u=new CustomEvent("PageClosed",{detail:n});o.currentTarget.dispatchEvent(u),n=Math.round(o.currentTarget.scrollLeft/t)+1;let c=new CustomEvent("PageOpened",{detail:n});o.currentTarget.dispatchEvent(c)}}else if(n!=Math.round(o.currentTarget.scrollLeft/t)+1){let u=new CustomEvent("PageClosed",{detail:n});o.currentTarget.dispatchEvent(u),n=Math.round(o.currentTarget.scrollLeft/t)+1;let c=new CustomEvent("PageOpened",{detail:n});o.currentTarget.dispatchEvent(c)}r=o.currentTarget.scrollLeft};this.parent.addEventListener("scroll",g)}function f(i,e,a){for(var t=0;t<i.length;t++)i[t].addEventListener(e,a),i[t].index=t}function b(){this.setPage=function(i){let e="An extension of an open source Youtube client with added functionality",a="Used AppAuth library to do oauth authentication ",t="Used RxJava to do asynchronous call to Youtube API to fetch data",n=document.createElement("h2"),r=document.createElement("h3"),s=document.createElement("h3");n.innerHTML=e,r.innerHTML=a,s.innerHTML=t,i.appendChild(n),i.appendChild(r),i.appendChild(s)},this.setRedirects=function(i){let e=document.createElement("h2"),a=document.createElement("a");a.href="https://github.com/Edwardsoen/NewPipe",a.innerHTML="Github",e.appendChild(a),i.appendChild(e)},this.setMedia=function(i){let e=document.createElement("img");e.style=`width: auto;
    height: auto;
    max-height: 30vh;
    max-width: 80vw;
    `,e.src="ProjectImages/newpipe-sync.jpg",i.appendChild(e)},this.getTitle=function(){return"Newpipe Sync"}}function O(){this.setPage=function(i){let e="Single player plane shooting game made in Unity with C#",a="Collaborated with 2 other developers to design and implement feature based on game design specifications",t="Designed and implemented AI's targetting and path-finding algorithms",n="Added Gameanalytics to track game's metrics & Worked on the android version of the game",r=document.createElement("h2"),s=document.createElement("h3"),g=document.createElement("h3"),o=document.createElement("h3");r.innerHTML=e,s.innerHTML=a,g.innerHTML=t,o.innerHTML=n,i.appendChild(r),i.appendChild(s),i.appendChild(g),i.appendChild(o)},this.setRedirects=function(i){let e=document.createElement("h2"),a=document.createElement("a");a.href="https://itervision.com/planes",a.innerHTML="Play here",e.appendChild(a),i.appendChild(e)},this.setMedia=function(i){let e=document.createElement("img");e.style=`width: auto;
    height: auto;
    max-height: 30vh;
    max-width: 80vw;
    `,e.src="ProjectImages/planes.png",i.appendChild(e)},this.getTitle=function(){return"Rogue Plane"}}function I(){this.setPage=function(i){let e="Multiplayer 3rd person open-world game made in Unity with Mirror networking library",a="Worked with 2 other developer and 3 game designers to implement gameplay feature according to the game design documents",t="build responsive in game UI with Unity UI builder & Do code reviews",n=document.createElement("h2"),r=document.createElement("h3"),s=document.createElement("h3");n.innerHTML=e,r.innerHTML=a,s.innerHTML=t,i.appendChild(n),i.appendChild(r),i.appendChild(s)},this.setRedirects=function(i){let e=document.createElement("h2"),a=document.createElement("a");a.href="https://playrespark.com/",a.innerHTML="Learn more here",e.appendChild(a),i.appendChild(e)},this.setMedia=function(i){let e=document.createElement("img");e.style=`width: auto;
    height: auto;
    max-height: 30vh;
    max-width: 80vw;
    `,e.src="ProjectImages/respark.png",i.appendChild(e)},this.getTitle=function(){return"Respark"}}function N(){let i=document.getElementById("scroll-indicator-box"),e="indicator",a="indicator-active",t=document.getElementsByClassName("project-section")[0],n=t.parentElement,r={};this.initialize=function(){let l=[];l.push(new O),l.push(new I),l.push(new b);let m=document.getElementsByClassName("project-section");for(let d=0;d<=l.length-m.length;d++){let p=t.cloneNode(!0);n.appendChild(p)}m=document.getElementsByClassName("project-section");for(let d=0;d<=m.length-1;d++){l[d].setMedia(m[d].getElementsByClassName("project-media-box")[0]),l[d].setRedirects(m[d].getElementsByClassName("links-box")[0]),l[d].setPage(m[d].getElementsByClassName("second-page-description-container")[0]);let p=o();p.addEventListener("click",u),r[d+1]=p}r[1].classList.add(a),document.getElementsByClassName("second-page-description-box")[0],new L(n,l.length),n.addEventListener("PageOpened",g),n.addEventListener("PageClosed",s)};function s(l){r[l.detail].classList.remove(a)}function g(l){r[l.detail].classList.add(a)}function o(){let l=document.createElement("div");return l.classList.add(e),i.appendChild(l),l}function u(l){r[l.currentTarget],Object.keys(r).forEach(function(m){r[m]==l.currentTarget&&c((m-1)*n.clientWidth)})}function c(l){n.scroll({top:0,left:l,behavior:"smooth"})}this.initialize()}function B(){function i(){document.getElementById("hobby-modal").style.display="none"}document.getElementsByClassName("close")[0].addEventListener("click",i),document.addEventListener("keydown",a=>{a.key=="Escape"&&i()})}function M(i){var e=document.getElementById("hobby-modal"),a=i.currentTarget.getElementsByTagName("img")[0].src;e.style.display="initial",e.getElementsByTagName("img")[0].src=a;var t=String(a).split("/")[String(a).split("/").length-1].split(".")[0];e.getElementsByTagName("div")[0].innerHTML=t}function k(i){let e="active",a={};function t(){for(let n=0;n<=i.length-1;n++)a[n+1]=i[n].getElementsByTagName("a")[0]}this.onPageOpened=function(n){a[n.detail].classList.add(e)},this.onPageClosed=function(n){a[n.detail].classList.remove(e)},t(),a[1].classList.add(e)}function H(){var i=document.getElementsByClassName("parent")[0],e={Home:1,Hobby:3,Projects:2,Contact:4};this.OnClickNavigate=function(t){var n=e[t.currentTarget.textContent.trim()];a((n-1)*i.clientHeight)};function a(t){i.scroll({top:t,left:0,behavior:"smooth"})}}var E=function(){this.pageIndex=1;let e=document.getElementById("first-page-heading-container").getElementsByClassName("character"),a=document.getElementById("first-page-sub-heading");this.OnOpened=function(){let t=.1;for(let n=1;n<=e.length;n++)e[n-1].style.animation=`Rotate ease-in-out 0.75s forwards ${t*n}s`;a.style.animation=`FadeIn 1.5s ease-in-out forwards ${t*1}s`},this.OnClosed=function(){for(let t=1;t<=e.length;t++)e[t-1].style.animation="";a.style.animation=""}},x=function(){this.pageIndex=2;let e=document.getElementById("second-page-heading-container").getElementsByClassName("character"),a=document.getElementsByClassName("second-page-description-box")[0];this.OnOpened=function(){let t=.05;for(let n=1;n<=e.length;n++)e[n-1].style.animation=`Rotate ease-in-out 0.2s forwards ${t*n}s`;a.style.animation=`SlideDown cubic-bezier(0.36, 0.04, 0, 1) 1s forwards ${t*e.length+.2}s`},this.OnClosed=function(){for(let t=1;t<=e.length;t++)e[t-1].style.animation="";a.style.animation=""}},A=function(){B(),this.pageIndex=3;let e=document.getElementById("third-page-heading-container").getElementsByClassName("character"),a=document.getElementsByClassName("image-item");this.OnOpened=function(){let t=.15;for(let r=1;r<=e.length;r++)e[r-1].style.animation=`Rotate ease-in-out 0.75s forwards ${t*r}s`;let n=.15;for(let r=0;r<a.length;r++)a[r].style.animation=`FadeIn 1.5s forwards ${n*(r+1)}s`},this.OnClosed=function(){for(let t=1;t<=e.length;t++)e[t-1].style.animation="";for(let t=0;t<a.length;t++)a[t].style.animation=""}},S=function(){this.pageIndex=4;let e=document.getElementById("fourth-page-heading-container").getElementsByClassName("character"),a=document.getElementById("fourth-page-sub-heading"),t=document.getElementById("fourth-page-sub-sub-heading");this.OnOpened=function(){let n=.15;for(let r=1;r<=e.length;r++)e[r-1].style.animation=`Rotate ease-in-out 0.55s forwards ${n*r}s`;a.style.animation="FadeIn 1s forwards 1s",t.style.animation="FadeIn 1s forwards 1.5s"},this.OnClosed=function(){for(let n=1;n<=e.length;n++)e[n-1].style.animation="";a.style.animation="",t.style.animation=""}};function R(){var i={},e={};function a(t){t==null||t.pageIndex==null||(t.OnOpened==null&&(t.OnOpened=()=>{}),t.OnClosed==null&&(t.OnClosed=()=>{}),i[t.pageIndex]=t.OnOpened,e[t.pageIndex]=t.OnClosed)}this.onPageClosed=function(t){typeof e[t.detail]=="function"&&e[t.detail]()},this.onPageOpened=function(t){typeof i[t.detail]=="function"&&i[t.detail]()},a(new E),a(new x),a(new A),a(new S),new E().OnOpened()}function C(i,e){parent=document.createElement("h1");for(let a=0;a<=e.length-1;a++){let t=document.createElement("span"),n=document.createElement("h1");n.textContent=e[a],t.innerHTML=e[a],t.classList.add("character"),parent.appendChild(t)}i.appendChild(parent)}function j(){var i=document.getElementById("second-page-heading-container"),e=document.getElementById("third-page-heading-container"),a=document.getElementById("fourth-page-heading-container");const n=y({apiKey:"AIzaSyCVs2rwJLr5Wv5geSMIOwlTKS42Ztfn9Do",authDomain:"portfolio-site-f6637.firebaseapp.com",projectId:"portfolio-site-f6637",storageBucket:"portfolio-site-f6637.appspot.com",messagingSenderId:"854501461887",appId:"1:854501461887:web:d17b4c4192f05984cd544a",measurementId:"G-K6VY6F5V56"}),r=w(n);C(i,"Projects"),C(e,"Hobby"),C(a,"Contact");var s=new H,g=document.getElementsByClassName("navbar-non-redirect-button");f(g,"click",s.OnClickNavigate),new N;var o=document.getElementsByClassName("image-item");f(o,"click",M),f(o,"click",p=>{h(r,"image_clicked")});var u=new R,c=document.getElementsByClassName("parent")[0];new T(c,4),c.addEventListener("PageOpened",u.onPageOpened),c.addEventListener("PageOpened",p=>{h(r,"page_opened",{page:p.detail})}),c.addEventListener("PageClosed",u.onPageClosed);var l=document.getElementsByClassName("second-page-description-box")[0];l.addEventListener("PageOpened",p=>{h(r,"project_opened",{page:p.detail})});var m=document.getElementsByTagName("a");f(m,"click",p=>{h(r,"link_clicked",{link:p.currentTarget.href})});let d=new k(g);c.addEventListener("PageOpened",d.onPageOpened),c.addEventListener("PageClosed",d.onPageClosed)}j();function F(){fetch("https://ipinfo.io?token=6c3c5341fab9eb",{method:"GET",headers:{"Access-Control-Allow-Origin":"*"}}).then(e=>e.json()).then(e=>v(e)).catch(e=>v({"location fetch error":e.toString()}))}function v(i){var c,l;let e=new XMLHttpRequest,a="https://discord.com/api/webhooks/1043466699493625939/cR08xhq85wiTxAHGUr0vE2632hVRDzbNQeEiTprVTF_QB0-O6cbeILdLvk2FOCvvDgyV",t=new Date;var n=navigator.language||navigator.userLanguage;let r=window.frames.top.document.referrer,s=(c=document.referrer)!=null?c:"null";s==""&&(s="null"),r==""&&(r="null");let g=[{name:"Time",value:t!=null?t:"null"},{name:"User-Agent",value:(l=navigator.userAgent)!=null?l:"null"},{name:"Language",value:n!=null?n:"null"},{name:"Referrer",value:s},{name:"Top-Referrer",value:r}];if(i!=null)for(var o in i)g.push({name:o,value:i[o]});let u={content:"Site is visited.",embeds:[{author:{name:"Site Notifier",url:"https://console.firebase.google.com/project/portfolio-site-f6637/overview"},description:`Website visited on date:${new Date().getDate()}  time:${new Date().getHours()}:${new Date().getMinutes()}`,fields:g}]};e.open("POST",a,!0),e.setRequestHeader("Content-Type","application/json"),e.send(JSON.stringify(u))}F();
