
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
const sliderBtnClass = 'diet-slider__btn';
const imgClass = 'example-interactive__img';
const sliderBtn = sliderBlock.querySelector('.' + sliderBtnClass);
const beforeBtn = sliderBlock.querySelector('.diet-slider__before-btn');
const afterBtn = sliderBlock.querySelector('.diet-slider__after-btn');

const afterImg = sliderBlock.querySelector('.' + imgClass + '--after');
const beforeImg = sliderBlock.querySelector('.' + imgClass + '--before');

console.log(window.innerWidth);

const beforeSlide = function (handle, beforeImage, afterImage, handleClass, imageClass) {
  if (handle.classList.contains(handleClass + '--before')) {
    handle.classList.remove(handleClass + '--before');
    handle.offsetWidth = sliderBtn.offsetWidth;
    handle.classList.add(handleClass + '--after');
    afterImage.classList.remove(imageClass + '--inactive');
    beforeImage.classList.add(imageClass + '--inactive');
  }
}

const afterSlide = function (handle, beforeImage, afterImage, handleClass, imageClass) {
  if (handle.classList.contains(handleClass + '--after')) {
    handle.classList.remove(handleClass + '--after');
    handle.offsetWidth = sliderBtn.offsetWidth;
    handle.classList.add(handleClass + '--before');
    beforeImage.classList.remove(imageClass + '--inactive');
    afterImage.classList.add(imageClass + '--inactive');
  }
}

sliderRail.addEventListener('click', function() {
  if (window.innerWidth < 768) {
    if (sliderBtn.classList.contains(sliderBtnClass + '--before')) {
      beforeSlide(sliderBtn, beforeImg, afterImg, sliderBtnClass, 'example-interactive__img');
    } else if (sliderBtn.classList.contains(sliderBtnClass + '--after')) {
      afterSlide(sliderBtn, beforeImg, afterImg, sliderBtnClass, 'example-interactive__img');
    }
  }
})

afterBtn.addEventListener('click', function() {
  if (sliderBtn.classList.contains(sliderBtnClass + '--before')) {
    beforeSlide(sliderBtn, beforeImg, afterImg, sliderBtnClass, 'example-interactive__img');
  }
})

beforeBtn.addEventListener('click', function() {
  if (sliderBtn.classList.contains(sliderBtnClass + '--after')) {
    afterSlide(sliderBtn, beforeImg, afterImg, sliderBtnClass, 'example-interactive__img');
  }
})




