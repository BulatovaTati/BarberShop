!function(){var e,t=document.querySelectorAll("[data-menu-button]"),o=document.querySelector("[data-menu]"),n=document.querySelector(".menu__overlay");function c(){var e=document.body.classList.contains("is-menu-shown");t.forEach((function(t){return t.setAttribute("aria-expanded",!e)})),document.body.classList.toggle("is-menu-shown"),e?document.body.removeEventListener("keydown",a):document.body.addEventListener("keydown",a)}function a(e){"Escape"===e.code&&c()}t.forEach((function(e){return e.addEventListener("click",c)})),n.addEventListener("click",c),o.addEventListener("click",(function(e){"A"===e.target.nodeName&&"A"===e.target.nodeName&&document.body.classList.remove("is-menu-shown")})),"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active"),document.body.classList.add("modal-open")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active"),document.body.classList.remove("modal-open")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.classList.remove("modal-open")}))}));var d=document.querySelector(".scroll-to-top");window.onscroll=function(){return e=80,void(window.pageYOffset>e?d.classList.remove("js-transparent"):d.classList.add("js-transparent"));var e},d.addEventListener("click",(function(){return document.getElementById("header").scrollIntoView()})),document.querySelector("[data-modal-checkbox]").addEventListener("click",(function(e){e.target.checked?document.querySelector("[data-submit-btn]").disabled=!1:document.querySelector("[data-submit-btn]").disabled=!0}))}();
//# sourceMappingURL=index.204abbff.js.map