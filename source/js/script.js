const mobileMenu = document.querySelector('.main-nav');
const toggleBtn = mobileMenu.querySelector('.main-nav__toggle-btn');
const menuList = mobileMenu.querySelector('.main-nav__list');

toggleBtn.classList.add('main-nav__toggle-btn--open-menu');
menuList.classList.add('main-nav__list--menu-closed');

toggleBtn.addEventListener('click', function() {
  toggleBtn.classList.toggle('main-nav__toggle-btn--open-menu');
  menuList.classList.toggle('main-nav__list--menu-closed');
  menuList.classList.toggle('main-nav__list--open-animation');
});

console.log(mobileMenu, toggleBtn, menuList);
