!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var r=()=>{document.querySelector(".menu");const e=document.querySelector("menu");document.querySelector(".close-btn"),e.querySelectorAll("ul > li");document.addEventListener("click",t=>{let o=t.target,r=o.closest(".menu"),n=o.closest(".active-menu");r?e.classList.toggle("active-menu"):(o.classList.contains("close-btn")||o.matches("li > a")||!n)&&e.classList.remove("active-menu")})};var n=()=>{const e=document.querySelector(".popup"),t=(document.querySelectorAll(".popup-btn"),document.querySelector(".service"));let o,r=0,n=document.querySelector(".popup-content"),c=window.onresize=()=>{return window.innerWidth},l=()=>{let e=c();o=requestAnimationFrame(l),r++,e<767?o=!1:r<50?n.style.top=3*r+"px":(cancelAnimationFrame(o),r=0)};t.addEventListener("click",t=>{t.target.matches(".popup-btn")&&(e.style.display="block",l())}),e.addEventListener("click",t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"))||(e.style.display="none")})};var c=()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",e=>{let r=e.target;(r=r.closest(".service-header-tab"))&&t.forEach((e,n)=>{e===r&&(e=>{o.forEach((r,n)=>{e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(o[n].classList.add("d-none"),t[n].classList.remove("active"))})})(n)})})};var l=()=>{const e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-dots")),o=document.querySelector(".portfolio-content");(()=>{for(let o=0;o<e.length;o++){let e=document.createElement("li");e.classList.add("dot"),t.appendChild(e)}})();let r=document.querySelectorAll(".dot");r[0].classList.add("dot-active");let n,c=0;const l=(e,t,o)=>{e[t].classList.remove(o)},a=(e,t,o)=>{e[t].classList.add(o)},s=()=>{l(e,c,"portfolio-item-active"),l(r,c,"dot-active"),++c>=e.length&&(c=0),a(e,c,"portfolio-item-active"),a(r,c,"dot-active")},u=(e=3e3)=>{n=setInterval(s,e)};o.addEventListener("click",t=>{t.preventDefault();let o=t.target;o.matches(".portfolio-btn, .dot")&&(l(e,c,"portfolio-item-active"),l(r,c,"dot-active"),o.matches("#arrow-right")?c++:o.matches("#arrow-left")?c--:o.matches(".dot")&&r.forEach((e,t)=>{e===o&&(c=t)}),c>=e.length&&(c=0),c<0&&(c=e.length-1),a(e,c,"portfolio-item-active"),a(r,c,"dot-active"))}),o.addEventListener("mouseover",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)}),o.addEventListener("mouseout",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()}),u()};var a=()=>{let e=document.querySelector(".command");e.addEventListener("mouseover",e=>{let t=e.target;t.dataset.src=t.src,t.src=t.dataset.img}),e.addEventListener("mouseout",e=>{let t=e.target;t.src=t.dataset.src})};var s=(e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),n=document.querySelector(".calc-day"),c=document.querySelector(".calc-count"),l=document.getElementById("total"),a=t.querySelectorAll("input");t.addEventListener("change",t=>{let s=t.target;(s.matches("select")||s.matches("input"))&&(a.forEach(e=>{e.value=e.value.replace(/\D/g,"")}),(()=>{let t=0,a=1,s=1;const u=o.options[o.selectedIndex].value,i=+r.value;c.value>1&&(a+=(c.value-1)/10),n.value&&n.value<5?s*=2:n.value&&n.value<10&&(s*=1.5),u&&i&&(t=e*u*i*a*s),l.textContent=Math.floor(t)})())})};var u=()=>{const e=document.createElement("div");e.style.cssText="font-size: 2rem;";document.addEventListener("input",e=>{const t=document.querySelectorAll(".form-phone"),o=document.querySelectorAll('input[name="user_name"]'),r=document.querySelectorAll('input[name="user_message"]');t.forEach(e=>{e.value=e.value.replace(/[^0-9+]/g,"")}),o.forEach(e=>{e.value=e.value.replace(/[^а-яё\s]/g,"")}),r.forEach(e=>{e.value=e.value.replace(/[^а-яё\s]/g,"")})}),document.addEventListener("submit",o=>{o.preventDefault();let r=o.target;e.style.cssText="font-size: 2rem; color: #fff;",r.appendChild(e),e.textContent="Загрузка...";const n=new FormData(r);let c={};n.forEach((e,t)=>{c[t]=e}),r.reset(),t(c).then(t=>{if(200!==t.status)throw new Error("статус ответа не равен 200");e.textContent="Спасибо! Мы скоро с вами свяжемся!"}).catch(t=>{e.textContent="Что-то пошло не так...",console.error(t)});setTimeout(()=>{document.querySelector(".popup").style.display="none"},2e3)});const t=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"aplication/json"},body:JSON.stringify(e)})};(e=>{let t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),r=document.querySelector("#timer-seconds");const n=()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/60/60%24);return{day:Math.floor(t/60/60/24),hours:n,minutes:r,seconds:o,timeRemaining:t}},c=e=>e<10?"0"+e:e,l=()=>{let e=n();t.textContent=c(e.hours),o.textContent=c(e.minutes),r.textContent=c(e.seconds),n().timeRemaining<=0&&(t.textContent="00",o.textContent="00",r.textContent="00",clearInterval(l))};l(),setInterval(l,1e3)})("31 december 2019"),r(),n(),c(),l(),a(),s(100),u()}]);