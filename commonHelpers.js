import"./assets/styles-a0cdf992.js";import{S as m,i as p}from"./assets/vendor-7659544d.js";const a={form:document.querySelector(".search-form"),input:document.querySelector(".search-inp"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),searchBtn:document.querySelector(".search-btn")},h="https://pixabay.com/api",y="41899926-74a7536d4d492e936dbb67b5b";a.form.addEventListener("submit",e=>{e.preventDefault();const r=a.form.query.value.trim();if(!r){n("The search field can't be empty! Please, enter your request!");return}const t=`${h}?key=${y}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;f(t).then(s=>{s.hits.length===0&&(n("Sorry, there are no images matching your search query. Please, try again!"),o(!1)),a.gallery.innerHTML=d(s.hits),o(!1),new m(".gallery-item a",{captionsData:"alt",captionDelay:250}),a.form.reset()}).catch(s=>console.error(s))});function f(e){return o(!0),fetch(e).then(r=>{if(!r.ok)throw new Error(r.ststusText);return r.json()})}function d(e){return e.map(({webformatURL:r,largeImageURL:t,tags:s,likes:l,views:c,comments:i,downloads:u})=>`
        <li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${s}"
    />
    <p class="gallery-descr">Likes: <span class="descr-span">${l}</span> Views: <span class="descr-span">${c}</span> Comments: <span class="descr-span">${i}</span> Downloads: <span class="descr-span">${u}</span></p>
  </a>
</li>`).join("")}function n(e){p.show({class:"error-svg",position:"topRight",icon:"error-svg",message:e,maxWidth:"432",messageColor:"#fff",messageSize:"16px",backgroundColor:"#EF4040",close:!1,closeOnClick:!0})}function o(e=!0){a.loader.style.display=e?"inline-block":"none",a.searchBtn.disabled=e}
//# sourceMappingURL=commonHelpers.js.map
