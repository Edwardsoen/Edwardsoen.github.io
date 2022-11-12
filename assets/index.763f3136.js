import{initializeApp as y}from"https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";import{getAnalytics as v,logEvent as h}from"https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";const w=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};w();function P(a,t){this.parent=a,this.totalPage=t;var n=this.parent.scrollHeight,e=n/this.totalPage,o=1,i=0,s=function(){e=a.scrollHeight/t},g=function(r){if(s(),i>r.currentTarget.scrollTop){if(r.currentTarget.scrollTop/e%1<.1){let m=new CustomEvent("PageClosed",{detail:o});r.currentTarget.dispatchEvent(m),o=Math.round(r.currentTarget.scrollTop/e)+1;let d=new CustomEvent("PageOpened",{detail:o});r.currentTarget.dispatchEvent(d)}}else if(o!=Math.round(r.currentTarget.scrollTop/e)+1){let m=new CustomEvent("PageClosed",{detail:o});r.currentTarget.dispatchEvent(m),o=Math.round(r.currentTarget.scrollTop/e)+1;let d=new CustomEvent("PageOpened",{detail:o});r.currentTarget.dispatchEvent(d)}i=r.currentTarget.scrollTop};this.parent.addEventListener("scroll",g)}function T(a,t){this.parent=a,this.totalPage=t;var n=this.parent.scrollWidth,e=n/this.totalPage,o=1,i=0,s=function(){e=a.scrollWidth/t},g=function(r){if(s(),i>r.currentTarget.scrollLeft){if(r.currentTarget.scrollLeft/e%1<.1){let m=new CustomEvent("PageClosed",{detail:o});r.currentTarget.dispatchEvent(m),o=Math.round(r.currentTarget.scrollLeft/e)+1;let d=new CustomEvent("PageOpened",{detail:o});r.currentTarget.dispatchEvent(d)}}else if(o!=Math.round(r.currentTarget.scrollLeft/e)+1){let m=new CustomEvent("PageClosed",{detail:o});r.currentTarget.dispatchEvent(m),o=Math.round(r.currentTarget.scrollLeft/e)+1;let d=new CustomEvent("PageOpened",{detail:o});r.currentTarget.dispatchEvent(d)}i=r.currentTarget.scrollLeft};this.parent.addEventListener("scroll",g)}function f(a,t,n){for(var e=0;e<a.length;e++)a[e].addEventListener(t,n),a[e].index=e}function I(){this.setPage=function(a){let t="An extension of an open source Youtube client with added functionality",n="Used AppAuth library to do oauth authentication ",e="Used RxJava to do asynchronous call to Youtube API to fetch data",o=document.createElement("h2"),i=document.createElement("h3"),s=document.createElement("h3");o.innerHTML=t,i.innerHTML=n,s.innerHTML=e,a.appendChild(o),a.appendChild(i),a.appendChild(s)},this.setRedirects=function(a){let t=document.createElement("h2"),n=document.createElement("a");n.href="https://github.com/Edwardsoen/NewPipe",n.innerHTML="Github",t.appendChild(n),a.appendChild(t)},this.setMedia=function(a){let t=document.createElement("img");t.style=`width: auto;
    height: auto;
    max-height: 30vh;
    max-width: 80vw;
    `,t.src="ProjectImages/newpipe-sync.jpg",a.appendChild(t)},this.getTitle=function(){return"Newpipe Sync"}}function L(){this.setPage=function(a){let t="Single player plane shooting game made in Unity with C#",n="Collaborated with 2 other developers to design and implement feature based on game design specifications",e="Designed and implemented AI's targetting and path-finding algorithms",o="Added Gameanalytics to track game's metrics",i="Worked on the android version of the game",s=document.createElement("h2"),g=document.createElement("h3"),r=document.createElement("h3"),m=document.createElement("h3"),d=document.createElement("h3");s.innerHTML=t,g.innerHTML=n,r.innerHTML=e,m.innerHTML=o,d.innerHTML=i,a.appendChild(s),a.appendChild(g),a.appendChild(r),a.appendChild(m),a.appendChild(d)},this.setRedirects=function(a){let t=document.createElement("h2"),n=document.createElement("a");n.href="https://itervision.com/planes",n.innerHTML="Play here",t.appendChild(n),a.appendChild(t)},this.setMedia=function(a){let t=document.createElement("img");t.style=`width: auto;
    height: auto;
    max-height: 30vh;
    max-width: 80vw;
    `,t.src="ProjectImages/planes.png",a.appendChild(t)},this.getTitle=function(){return"Rogue Plane"}}function B(){this.setPage=function(a){let t="Multiplayer 3rd person open-world game made in Unity with Mirror networking library",n="Worked with 2 other developer and 3 game designers to implement gameplay feature according to the game design documents",e="build responsive in game UI with Unity UI builder & Do code reviews",o=document.createElement("h2"),i=document.createElement("h3"),s=document.createElement("h3");o.innerHTML=t,i.innerHTML=n,s.innerHTML=e,a.appendChild(o),a.appendChild(i),a.appendChild(s)},this.setRedirects=function(a){let t=document.createElement("h2"),n=document.createElement("a");n.href="https://playrespark.com/",n.innerHTML="Learn more here",t.appendChild(n),a.appendChild(t)},this.setMedia=function(a){let t=document.createElement("img");t.style=`width: auto;
    height: auto;
    max-height: 30vh;
    max-width: 80vw;
    `,t.src="ProjectImages/respark.png",a.appendChild(t)},this.getTitle=function(){return"Respark"}}function b(){let a=document.getElementById("scroll-indicator-box"),t="indicator",n="indicator-active",e=document.getElementsByClassName("project-section")[0],o=e.parentElement,i={};this.initialize=function(){let l=[];l.push(new L),l.push(new B),l.push(new I);let u=document.getElementsByClassName("project-section");for(let c=0;c<=l.length-u.length;c++){let p=e.cloneNode(!0);o.appendChild(p)}u=document.getElementsByClassName("project-section");for(let c=0;c<=u.length-1;c++){l[c].setMedia(u[c].getElementsByClassName("project-media-box")[0]),l[c].setRedirects(u[c].getElementsByClassName("links-box")[0]),l[c].setPage(u[c].getElementsByClassName("second-page-description-container")[0]);let p=r();p.addEventListener("click",m),i[c+1]=p}i[1].classList.add(n),document.getElementsByClassName("second-page-description-box")[0],new T(o,l.length),o.addEventListener("PageOpened",g),o.addEventListener("PageClosed",s)};function s(l){i[l.detail].classList.remove(n)}function g(l){i[l.detail].classList.add(n)}function r(){let l=document.createElement("div");return l.classList.add(t),a.appendChild(l),l}function m(l){i[l.currentTarget],Object.keys(i).forEach(function(u){i[u]==l.currentTarget&&d((u-1)*o.clientWidth)})}function d(l){o.scroll({top:0,left:l,behavior:"smooth"})}this.initialize()}function O(){function a(){document.getElementById("hobby-modal").style.display="none"}document.getElementsByClassName("close")[0].addEventListener("click",a),document.addEventListener("keydown",n=>{n.key=="Escape"&&a()})}function N(a){var t=document.getElementById("hobby-modal"),n=a.currentTarget.getElementsByTagName("img")[0].src;t.style.display="initial",t.getElementsByTagName("img")[0].src=n;var e=String(n).split("/")[String(n).split("/").length-1].split(".")[0];t.getElementsByTagName("div")[0].innerHTML=e}function M(){var a=document.getElementsByClassName("parent")[0],t={Home:1,Hobby:3,Projects:2,Contact:4};this.OnClickNavigate=function(e){var o=t[e.currentTarget.textContent.trim()];n((o-1)*a.clientHeight)};function n(e){a.scroll({top:e,left:0,behavior:"smooth"})}}var C=function(){this.pageIndex=1;let t=document.getElementById("first-page-heading-container").getElementsByClassName("character");this.OnOpened=function(){let n=.1;for(let e=1;e<=t.length;e++)t[e-1].style.animation=`Rotate ease-in-out 0.75s forwards ${n*e}s`;document.getElementById("first-page-sub-heading").style.animation=`FadeIn 1.5s ease-in-out forwards ${n*1}s`},this.OnClosed=function(){for(let n=1;n<=t.length;n++)t[n-1].style.animation="";document.getElementById("first-page-sub-heading").style.animation=""}},k=function(){this.pageIndex=2;let t=document.getElementById("second-page-heading-container").getElementsByClassName("character"),n=document.getElementsByClassName("second-page-projects-box");this.OnOpened=function(){let e=.15;for(let i=1;i<=t.length;i++)t[i-1].style.animation=`Rotate ease-in-out 0.75s forwards ${e*i}s`;let o=.25;for(let i=0;i<=n.length-1;i++)n[i].style.animation=`SlideUp ease-in-out 1s forwards ${1+o*i}s`;document.getElementsByClassName("second-page-description-box")[0].style.animation="SlideDown cubic-bezier(0.36, 0.04, 0, 1) 1.2s forwards"},this.OnClosed=function(){for(let e=1;e<=t.length;e++)t[e-1].style.animation="";for(let e=0;e<=n.length-1;e++)n[e].style.animation="";document.getElementsByClassName("second-page-description-box")[0].style.animation=""}},x=function(){O(),this.pageIndex=3;let t=document.getElementById("third-page-heading-container").getElementsByClassName("character");this.OnOpened=function(){let n=.15;for(let i=1;i<=t.length;i++)t[i-1].style.animation=`Rotate ease-in-out 0.75s forwards ${n*i}s`;var e=document.getElementsByClassName("image-item");let o=.15;for(let i=0;i<e.length;i++)e[i].style.animation=`FadeIn 1.5s forwards ${o*(i+1)}s`},this.OnClosed=function(){for(let e=1;e<=t.length;e++)t[e-1].style.animation="";document.getElementsByClassName("heading-box")[1].style.animation="";var n=document.getElementsByClassName("image-item");for(let e=0;e<n.length;e++)n[e].style.animation=""}},H=function(){this.pageIndex=4;let t=document.getElementById("fourth-page-heading-container").getElementsByClassName("character");this.OnOpened=function(){let n=.15;for(let e=1;e<=t.length;e++)t[e-1].style.animation=`Rotate ease-in-out 0.75s forwards ${n*e}s`;document.getElementById("fourth-page-sub-heading").style.animation="FadeIn 1s forwards 0.5s",document.getElementById("fourth-page-sub-sub-heading").style.animation="FadeIn 1s forwards 1s"},this.OnClosed=function(){for(let n=1;n<=t.length;n++)t[n-1].style.animation="";document.getElementById("fourth-page-sub-heading").style.animation="",document.getElementById("fourth-page-sub-sub-heading").style.animation=""}};function A(){var a={},t={};function n(e){e==null||e.pageIndex==null||(e.OnOpened==null&&(e.OnOpened=()=>{}),e.OnClosed==null&&(e.OnClosed=()=>{}),a[e.pageIndex]=e.OnOpened,t[e.pageIndex]=e.OnClosed)}this.onPageClosed=function(e){typeof t[e.detail]=="function"&&t[e.detail]()},this.onPageOpened=function(e){typeof a[e.detail]=="function"&&a[e.detail]()},n(new C),n(new k),n(new x),n(new H),new C().OnOpened()}function E(a,t){parent=document.createElement("h1");for(let n=0;n<=t.length-1;n++){let e=document.createElement("span"),o=document.createElement("h1");o.textContent=t[n],e.innerHTML=t[n],e.classList.add("character"),parent.appendChild(e)}a.appendChild(parent)}function S(){var a=document.getElementById("second-page-heading-container"),t=document.getElementById("third-page-heading-container"),n=document.getElementById("fourth-page-heading-container");const o=y({apiKey:"AIzaSyCVs2rwJLr5Wv5geSMIOwlTKS42Ztfn9Do",authDomain:"portfolio-site-f6637.firebaseapp.com",projectId:"portfolio-site-f6637",storageBucket:"portfolio-site-f6637.appspot.com",messagingSenderId:"854501461887",appId:"1:854501461887:web:d17b4c4192f05984cd544a",measurementId:"G-K6VY6F5V56"}),i=v(o);E(a,"Projects"),E(t,"Hobby"),E(n,"Contact");var s=new M,g=[];g.push(document.getElementById("main-menu-home-item")),g.push(document.getElementById("main-menu-project-item")),g.push(document.getElementById("main-menu-hobby-item")),g.push(document.getElementById("main-menu-contact-item")),f(g,"click",s.OnClickNavigate),new b;var r=document.getElementsByClassName("image-item");f(r,"click",N),f(r,"click",c=>{h(i,"image_clicked")});var m=new A,d=document.getElementsByClassName("parent")[0];new P(d,4),d.addEventListener("PageOpened",m.onPageOpened),d.addEventListener("PageOpened",c=>{h(i,"page_opened",{page:c.detail})}),d.addEventListener("PageClosed",m.onPageClosed);var l=document.getElementsByClassName("second-page-description-box")[0];l.addEventListener("PageOpened",c=>{h(i,"project_opened",{page:c.detail})});var u=document.getElementsByTagName("a");f(u,"click",c=>{h(i,"link_clicked",{link:c.currentTarget.href})})}S();
