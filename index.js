import{a as y,i as L,S as q,N as S,K as b,c as k}from"./assets/vendor-D5dh7xdJ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f=document.querySelector(".toggle"),p=document.body;f.addEventListener("click",()=>{p.classList.contains("bg-dark")?(p.classList.remove("bg-dark"),p.classList.add("bg-light"),f.classList.remove("dark")):(p.classList.remove("bg-light"),p.classList.add("bg-dark"),f.classList.add("dark"))});const x="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='iconss-visit'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='%2300b068'%20stroke='%2300b068'%20style='stroke:%20var(--color1,%20%2300b068)'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='2.6667'%20d='M6.333%2025.667l19.333-19.333M25.667%206.333h-18M25.667%206.333v18'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",j=document.querySelector(".project-list"),v=document.querySelector(".more-projects");let E=document.querySelector("li.project_card");v.addEventListener("click",M);let d=0;function M(){const s=E.getBoundingClientRect().height,r=images.slice(d,d+3);j.insertAdjacentHTML("beforeend",$(r));let i=3;images.length-d<3&&(i=images.length-d),window.scrollBy({top:s*i,left:0,behavior:"smooth"}),d+=r.length,d>=images.length&&v.classList.add("hidden")}function $(s){return s.map(({alt:o,img:r,sources:{mobile:i,tablet:e,desktop:t}})=>`
      <li class="project_card">
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="${i["1x"]} 1x, ${i["2x"]} 2x"
          />
          <source
            media="(max-width: 1279px)"
            srcset="${e["1x"]} 1x, ${e["2x"]} 2x"
          />
          <source
            media="(min-width: 1280px)"
            srcset="${t["1x"]} 1x, ${t["2x"]} 2x"
          />
          <img
            class="project-img-card"
            src="${r}"
            alt="${o}"
            loading="lazy"
          />
        </picture>

        <p class="project-skills">React, JavaScript, Node JS, Git</p>
        <div class="bottom-box">
          <h3 class="project-name">${o}</h3>
          <a
            class="visit-button"
            href="https://github.com/VH-str/project-JS-TeamWork-FullStalkers"
            target="_blank"
          >
            <span>VISIT</span>
            <svg class="icon-visit" width="24" height="24">
              <use xlink:href="${x}#iconss-visit"></use>
            </svg>
          </a>
        </div>
      </li>`).join("")}const g=document.querySelector(".ham-menu"),h=document.querySelector(".off-screen-menu");g.addEventListener("click",()=>{g.classList.toggle("active"),h.classList.toggle("active")});h.addEventListener("click",()=>{g.classList.toggle("active"),h.classList.toggle("active")});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".faq-item"),o=s[0],r=s[0].querySelector(".faq-answer"),i=s[0].querySelector(".faq-arrow"),e=o.querySelector(".faq-question");o.classList.add("open"),r.classList.add("show"),i.classList.add("open"),e.classList.add("active"),s.forEach(c=>{const n=c.querySelector(".faq-question"),l=c.querySelector(".faq-answer"),a=c.querySelector(".faq-arrow");n.addEventListener("click",()=>{t(c,l,a,n)}),a.addEventListener("click",u=>{u.stopPropagation(),t(c,l,a,n)})});function t(c,n,l,a){const u=n.classList.contains("show");s.forEach(m=>{m.classList.remove("open"),m.querySelector(".faq-answer").classList.remove("show"),m.querySelector(".faq-arrow").classList.remove("open"),m.querySelector(".faq-question").classList.remove("active")}),u||(c.classList.add("open"),n.classList.add("show"),l.classList.add("open"),a.classList.add("active"))}});const w=document.querySelector(".swiper-wrapper"),P=document.querySelector(".button-wrapper");function O(s){const o=s.map(({author:r,avatar_url:i,review:e,_id:t})=>t===5?`<li class="swiper-slide">
					<p class="reviews-text">${e.slice(0,-31)}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${i}" alt="${r}">
						<h2 class="reviews-author">${r}</h2>
					</div>
				</li>`:`<li class="swiper-slide">
					<p class="reviews-text">${e}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${i}" alt="${r}">
						<h2 class="reviews-author">${r}</h2>
					</div>
				</li>`).join("");w.innerHTML=o,P.classList.remove("visually-hidden")}function N(){const s=`<li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li><li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li>`;w.innerHTML=s}async function T(s){try{const{data:o}=await y.get("https://portfolio-js.b.goit.study/api/reviews");O(o)}catch(o){N(),L.error({position:"topRight",message:o.message})}}T();new q(".swiper",{modules:[S,b],direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}}});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".wt-form"),o=document.querySelector(".backdrop");document.querySelector(".modal");const r=document.querySelector(".close-button-modal"),i="https://portfolio-js.b.goit.study/api/requests";function e(){o.classList.add("is-open")}function t(){o.classList.remove("is-open")}function c(n){n.key==="Escape"&&t()}o.addEventListener("click",n=>{n.target===o&&t()}),r.addEventListener("click",t),s.addEventListener("submit",async n=>{n.preventDefault();const l=s.querySelector("#user-email").value.trim();s.querySelector("#user-message").value.trim();try{const a=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,comment:k})});if(!a.ok)throw new Error("Failed to send the request. Please try again.");const u=await a.json();console.log("Success:",u),e(),s.reset()}catch(a){alert(`Error: ${a.message}`)}}),document.addEventListener("keydown",c)});
//# sourceMappingURL=index.js.map
