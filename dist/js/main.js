!function(e){var t={};function o(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){},function(e,t,o){"use strict";o.r(t);const n={htmlTag:document.querySelector("html"),body:document.querySelector("body"),text:document.querySelectorAll("p,a,h1,h2,h3,h4,h5,h6"),headings:document.querySelectorAll("h1,h2,h3,h4,h5,h6"),lightSwitch:document.querySelector(".light-switch"),toggleSwitch:document.querySelector(".light-switch-toggle"),toggleSwitchUILeft:document.querySelector(".light-switch-toggle-ui--left"),toggleSwitchUIRight:document.querySelector(".light-switch-toggle-ui--right"),menuList:document.querySelector(".menu__list"),menuItem:document.querySelectorAll(".menu__item"),menuItems:document.querySelectorAll(".menu__link"),gallery:document.querySelector(".gallery"),gallerySet:document.querySelector(".gallery-set"),upArrow:document.querySelector("footer .upArrow"),toTop:document.querySelector("footer span"),navToggle:document.getElementById("navigation-toggle"),menuPopup:document.querySelector(".menu-full"),navBtn:document.querySelector(".navigation__button"),menuFullLinks:document.querySelectorAll(".menu-full__list .menu__link"),imgs:document.querySelectorAll(".image-set img"),modal:document.querySelector(".modal"),modalImg:document.querySelector(".modal img"),modalCheck:document.querySelector(".modal__checkbox"),closeModal:document.querySelector(".modal__button"),mouse:document.querySelector(".circle")};if(window.addEventListener("load",function(){let e=0;n.menuItems.forEach(t=>{e+=.05,t.style.opacity=1,t.style.transition=`opacity 1.2s ${e}s, transform 1.2s ${e}s, color .3s, margin .1s`,t.style.transform="translateY(0)"})}),n.gallerySet){const e=n.gallerySet.querySelectorAll(".image-set img");e.forEach(e=>{e.style.opacity=0});const t=function(){let t=.1;e.forEach(e=>{const o=e.getBoundingClientRect().top;e.getBoundingClientRect().bottom;o<window.innerHeight&&(e.style.animation=`fadeIn 1s ${t}s both`,t+=.1,e.style.opacity=1)})};window.addEventListener("scroll",t),window.addEventListener("load",t)}if(n.upArrow){const e=function(){window.scroll({top:0,behavior:"smooth"})};n.upArrow.addEventListener("click",e),n.toTop.addEventListener("click",e)}const l=localStorage.getItem("theme");l&&(document.documentElement.setAttribute("data-theme",l),"dark-mode"===l&&(n.toggleSwitch.checked=!0));const i=()=>{n.toggleSwitchUILeft.style.animation="",n.toggleSwitchUIRight.style.animation=""};n.toggleSwitch.addEventListener("click",()=>{}),n.toggleSwitchUILeft.addEventListener("transitionend",i),n.toggleSwitch.addEventListener("change",function(e){e.target.checked?(n.htmlTag.setAttribute("data-theme","dark-mode"),localStorage.setItem("theme","dark-mode")):(n.htmlTag.setAttribute("data-theme","light-mode"),localStorage.setItem("theme","light-mode"))}),n.toggleSwitchUIRight.addEventListener("transitionend",i);const r=()=>{const e=window.innerHeight;if(n.navToggle.checked){n.menuPopup.style.opacity=1,n.menuPopup.style.visibility="visible",n.htmlTag.style.height=`${e}px`,n.htmlTag.classList.add("open");let t=0;n.menuFullLinks.forEach(e=>{e.style.opacity=0,e.style.transform="",t+=.05,e.style.opacity=1,e.style.transition=`opacity 1.2s ${t}s, transform 1.2s ${t}s, color .3s, margin .1s`,e.style.transform="translateY(0)"})}else n.menuPopup.style.opacity=0,n.menuPopup.style.visibility="hidden",n.htmlTag.style.height="",n.htmlTag.classList.remove("open"),n.menuFullLinks.forEach(e=>{e.style.opacity=0,e.style.transform="translateY(10vh)"})};if(n.navToggle.addEventListener("change",r),window.addEventListener("load",()=>{n.navToggle.checked=!1}),window.addEventListener("load",r),n.closeModal){function c(e){window.innerWidth>=800&&(n.modalCheck.checked=!1,n.modal.style.opacity=1,n.modal.style.visibility="visible",n.modalImg.style.display="block",n.modalImg.src=e.target.src)}const e=()=>{n.modal.style.opacity=0,n.modal.style.visibility="hidden",n.modalImg.style.display="none",n.modalImg.src=""};n.imgs.forEach(e=>{e.addEventListener("click",c)}),n.closeModal.addEventListener("click",e)}o(0);window.innerWidth>800&&n.menuItem.forEach(e=>{e.addEventListener("mouseover",function(){n.imgs.forEach(t=>{t.getAttribute("data-tag")===e.getAttribute("data-tag")?(t.style.display="block",t.style.opacity=1,t.style.visibility="visible",console.log(e.getAttribute("data-tag"))):(t.style.display="none",t.style.opacity=0,t.style.visibility="hidden")})})})}]);
//# sourceMappingURL=main.js.map