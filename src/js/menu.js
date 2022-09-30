const menuBttns = document.querySelectorAll('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');
const menuOverlay = document.querySelector('.menu__overlay');
const menuNav = document.querySelector('.navigation__list');

menuBttns.forEach(el => el.addEventListener('click', toggleMenuVisibility));
menuOverlay.addEventListener('click', toggleMenuVisibility);
menuNav.addEventListener('click', toggleMenuVisibility);

function toggleMenuVisibility() {
  const expanded = document.body.classList.contains('is-menu-shown');

  menuBttns.forEach(el => el.setAttribute('aria-expanded', !expanded));
  document.body.classList.toggle('is-menu-shown');
  expanded
    ? document.body.removeEventListener('keydown', onKeyDown)
    : document.body.addEventListener('keydown', onKeyDown);
}

function onKeyDown(event) {
  event.code === 'Escape' ? toggleMenuVisibility() : null;
}
