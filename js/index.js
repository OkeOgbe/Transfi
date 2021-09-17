$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      items: 3,
      center: true,
          responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
      });
});

$(".menuIcon").on("click", () => {
    $(".nav__mobileMenu").addClass('active')
})

$('.close').on('click', () => {
    $('.nav__mobileMenu').removeClass('active')
})

$(window).on('scroll', () => {
    if ($(window).scrollTop() > 200) {
        $('.nav').addClass('fixed')
         $('.nav__mobile').addClass('fixed')
    } else {
        $('.nav').removeClass('fixed');
         $('.nav__mobile').removeClass('fixed')
    }
})