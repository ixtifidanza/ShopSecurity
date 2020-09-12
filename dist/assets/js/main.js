$(function () {


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
    loop: true,
    spaceBetween: 30,
    allowTouchMove: false,
    navigation: {
      prevEl: '.novelty__button--prev',
      nextEl: '.novelty__button--next',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        allowTouchMove: true,
        autoplay: {
          delay: 5000,
        },
      },
      568: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }

  })

  var favoriteSwiper = new Swiper('.favorite-container', {
    // Optional parameters
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    loop: true,
    spaceBetween: 30,
    allowTouchMove: false,
    grabCursor: true,
    navigation: {
      prevEl: '.favorite__button--prev',
      nextEl: '.favorite__button--next',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        allowTouchMove: true,
        autoplay: {
          delay: 5000,
        },
      },
      568: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }
  });

  var favoriteSwiper2 = new Swiper('.favorite-container2', {
    // Optional parameters
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    loop: true,
    spaceBetween: 30,
    allowTouchMove: false,
    navigation: {
      prevEl: '.favorite__button--prev2',
      nextEl: '.favorite__button--next2',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        allowTouchMove: true,
        autoplay: {
          delay: 5000,
        },
      },
      568: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }
  });

  var favoriteSwiper3 = new Swiper('.favorite-container3', {
    // Optional parameters
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    loop: true,
    spaceBetween: 30,
    allowTouchMove: false,
    navigation: {
      prevEl: '.favorite__button--prev3',
      nextEl: '.favorite__button--next3',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        allowTouchMove: true,
        autoplay: true,
        navigation: false,
      },
      568: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }
  });



  $('ul.tabs__caption').on('click', 'li:not(.tabs__active)', function () {
    $(this)
      .addClass('tabs__active').siblings().removeClass('tabs__active')
      .closest('div.tabs').find('div.tabs__content').removeClass('tabs__content--active').eq($(this).index()).addClass('tabs__content--active');
  });

  $(function () {
    $("nav.nav").on("click", "a:not(.active)", function () {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("section.megamenu")
        .find(".tab-pane")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });

  $('.burger').on('click', function () {
    $('.megamenu').toggleClass('show')
    $('.burger-icon').toggleClass('burger-icon-active');
    $('body').toggleClass('lock');
  })

});