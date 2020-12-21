$(function(){

    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        },
    });
});

$('.characters__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.characters__slider-text',
    prevArrow: '<button class="slick-btn slick-prev"><img src="images/left-arrow.png" alt=""></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/right-arrow.png" alt=""></button>',
  });
  $('.characters__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.characters__slider-img',
    fade: true,
    arrows: false
  });
      