$(".menuIcon").on("click", () => {
    $(".nav__mobileMenu").addClass('active') 
})

$('.close').on('click', () => {
    $('.nav__mobileMenu').removeClass('active')
})