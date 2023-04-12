const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

// burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function() {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  }
)

menuLinks.forEach(function(el){
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
});

// search

let btn = document.querySelector('.header__btn');
let search = document.querySelector('.header__search');
let clos = document.querySelector('.header__search-closed');

btn.addEventListener('click',

function() {

  btn.classList.toggle('header__btn--active');

  search.classList.toggle('header__search--active');

})

clos.addEventListener('click',

function() {

  btn.classList.remove('header__btn--active');
  search.classList.remove('header__search--active');

}
)

// tabs

let tabsBtn = document.querySelectorAll('.how__link');
let tabsItem = document.querySelectorAll('.how__wrapper');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function(btn){ btn.classList.remove('how__link--active')});
      e.currentTarget.classList.add('how__link--active');

      tabsItem.forEach(function(element){ element.classList.remove('how__wrapper--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('how__wrapper--active');
  });
});

new Accordion('.accordion-container');
