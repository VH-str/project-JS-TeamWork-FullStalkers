import{a as w,i as y,S as q,N as S,K as b,c as x}from"./assets/vendor-D5dh7xdJ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();const m=document.querySelector(".toggle"),u=document.body;m.addEventListener("click",()=>{u.classList.contains("bg-dark")?(u.classList.remove("bg-dark"),u.classList.add("bg-light"),m.classList.remove("dark")):(u.classList.remove("bg-light"),u.classList.add("bg-dark"),m.classList.add("dark"))});const h=document.querySelector(".more-projects");h.addEventListener("click",k);let f=0;function k(){const t=images.slice(f,f+3);if(t.length===0){console.log("No more projects to load.");return}listProjects.insertAdjacentHTML("beforeend",E(t)),f+=t.length,f>=images.length&&h.classList.add("hidden")}function E(o){return o.map(({alt:t,img:c,sources:{mobile:i,tablet:e,desktop:s}})=>`
    <li class="project_card">
      <picture>
        <source media="(max-width: 767px)" srcset="${i["1x"]} 1x, ${i["2x"]} 2x" />
        <source media="(max-width: 1279px)" srcset="${e["1x"]} 1x, ${e["2x"]} 2x" />
        <source media="(min-width: 1280px)" srcset="${s["1x"]} 1x, ${s["2x"]} 2x" />
        <img class="project-img-card" src="${c}" alt="${t}" loading="lazy" />
      </picture>
      <p class="project-skills">React, JavaScript, Node JS, Git</p>
      <div class="bottom-box">
        <h3 class="project-name">${t}</h3>
        <a class="visit-button" href="https://github.com/VH-str/project-JS-TeamWork-FullStalkers" target="_blank">
          <span>VISIT</span>
          <svg class="button_icon" width="24" height="24">
            <use xlink:href="${icon}#icon-icon_visit"></use>
          </svg>
        </a>
      </div>
    </li>`).join("")}const g=document.querySelector(".ham-menu"),v=document.querySelector(".off-screen-menu");g.addEventListener("click",()=>{g.classList.toggle("active"),v.classList.toggle("active")});v.addEventListener("click",()=>{g.classList.toggle("active"),v.classList.toggle("active")});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll(".faq-item"),t=o[0],c=o[0].querySelector(".faq-answer"),i=o[0].querySelector(".faq-arrow"),e=t.querySelector(".faq-question");t.classList.add("open"),c.classList.add("show"),i.classList.add("open"),e.classList.add("active"),o.forEach(r=>{const n=r.querySelector(".faq-question"),l=r.querySelector(".faq-answer"),a=r.querySelector(".faq-arrow");n.addEventListener("click",()=>{s(r,l,a,n)}),a.addEventListener("click",d=>{d.stopPropagation(),s(r,l,a,n)})});function s(r,n,l,a){const d=n.classList.contains("show");o.forEach(p=>{p.classList.remove("open"),p.querySelector(".faq-answer").classList.remove("show"),p.querySelector(".faq-arrow").classList.remove("open"),p.querySelector(".faq-question").classList.remove("active")}),d||(r.classList.add("open"),n.classList.add("show"),l.classList.add("open"),a.classList.add("active"))}});const L=document.querySelector(".swiper-wrapper"),j=document.querySelector(".button-wrapper");function $(o){const t=o.map(({author:c,avatar_url:i,review:e,_id:s})=>s===5?`<li class="swiper-slide">
					<p class="reviews-text">${e.slice(0,-31)}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${i}" alt="${c}">
						<h2 class="reviews-author">${c}</h2>
					</div>
				</li>`:`<li class="swiper-slide">
					<p class="reviews-text">${e}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${i}" alt="${c}">
						<h2 class="reviews-author">${c}</h2>
					</div>
				</li>`).join("");L.innerHTML=t,j.classList.remove("visually-hidden")}function M(){const o=`<li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li><li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li>`;L.innerHTML=o}async function P(o){try{const{data:t}=await w.get("https://portfolio-js.b.goit.study/api/reviews");$(t)}catch(t){M(),y.error({position:"topRight",message:t.message})}}P();new q(".swiper",{modules:[S,b],direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}}});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".wt-form"),t=document.querySelector(".backdrop");document.querySelector(".modal");const c=document.querySelector(".close-button-modal"),i="https://portfolio-js.b.goit.study/api/requests";function e(){t.classList.add("is-open")}function s(){t.classList.remove("is-open")}function r(n){n.key==="Escape"&&s()}t.addEventListener("click",n=>{n.target===t&&s()}),c.addEventListener("click",s),o.addEventListener("submit",async n=>{n.preventDefault();const l=o.querySelector("#user-email").value.trim();o.querySelector("#user-message").value.trim();try{const a=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,comment:x})});if(!a.ok)throw new Error("Failed to send the request. Please try again.");const d=await a.json();console.log("Success:",d),e(),o.reset()}catch(a){alert(`Error: ${a.message}`)}}),document.addEventListener("keydown",r)});
//# sourceMappingURL=index.js.map
