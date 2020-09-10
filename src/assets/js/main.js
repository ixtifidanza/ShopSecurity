$(function() {


var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 30,
    effect: 'fade',
    autoplay: {
        delay: 3000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
})

var noveltySwiper = new Swiper('.novelty-container', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 30,
  allowTouchMove: false,
  navigation: {
    nextEl: '.novelty__button--prev',
    prevEl: '.novelty__button--next',
  },

})

var favoriteSwiper = new Swiper('.favorite-container', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 30,
  allowTouchMove: false,
  navigation: {
    nextEl: '.favorite__button--prev',
    prevEl: '.favorite__button--next',
  },
});

var favoriteSwiper2 = new Swiper('.favorite-container2', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 30,
  allowTouchMove: false,
  navigation: {
    nextEl: '.favorite__button--prev2',
    prevEl: '.favorite__button--next2',
  },
});

var favoriteSwiper3 = new Swiper('.favorite-container3', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 30,
  allowTouchMove: false,
  navigation: {
    nextEl: '.favorite__button--prev3',
    prevEl: '.favorite__button--next3',
  },
});


  
  $('ul.tabs__caption').on('click', 'li:not(.tabs__active)', function() {
    $(this)
      .addClass('tabs__active').siblings().removeClass('tabs__active')
      .closest('div.tabs').find('div.tabs__content').removeClass('tabs__content--active').eq($(this).index()).addClass('tabs__content--active');
  });

  $('.burger').click(function() {
    $('.burger-icon').toggleClass('burger-icon-active');
  })
  
});