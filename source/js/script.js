
// MENU

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

//SLIDER

const sliderBlock = document.querySelector('.example-interactive');
const sliderRail = sliderBlock.querySelector('.diet-slider__rail');
const sliderBtn = sliderBlock.querySelector('.diet-slider__btn');

const afterImg = sliderBlock.querySelector('.example-interactive__img--after');
const beforeImg = sliderBlock.querySelector('.example-interactive__img--before');

sliderRail.addEventListener('click', function() {
  if (sliderBtn.classList.contains('diet-slider__btn--before')) {
    sliderBtn.classList.remove('diet-slider__btn--before');
    sliderBtn.offsetWidth = sliderBtn.offsetWidth;
    sliderBtn.classList.add('diet-slider__btn--after');
    afterImg.classList.remove('example-interactive__img--inactive');
    beforeImg.classList.add('example-interactive__img--inactive');
  } else {
    sliderBtn.classList.remove('diet-slider__btn--after');
    sliderBtn.offsetWidth = sliderBtn.offsetWidth;
    sliderBtn.classList.add('diet-slider__btn--before');
    beforeImg.classList.remove('example-interactive__img--inactive');
    afterImg.classList.add('example-interactive__img--inactive');
  }
})

buttonAfter.addEventListener('click', function() {
  buttonBefore.classList.add('diet-slider__btn--inactive');
  buttonAfter.classList.remove('diet-slider__btn--inactive');
})
