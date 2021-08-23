$(".menuIcon").on("click", () => {
    $(".nav__mobileMenu").addClass('active')
})

$('.close').on('click', () => {
    $('.nav__mobileMenu').removeClass('active')
})

$(window).on('scroll', () => {
    if ($(window).scrollTop() > 200) {
        $('.nav').addClass('fixed')
    } else {
        $('.nav').removeClass('fixed');
    }
})