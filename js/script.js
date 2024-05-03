
$('.btn__menu, header .nav__link').on('click', function () {
    if ($(window).innerWidth() <= 1000) {
        $('header .nav, .btn__menu, body').toggleClass('is_active');
    }
})

$('.shelter').on('click', function () {
    if ($(window).innerWidth() <= 700) {
        $(this).toggleClass('is__active').find('.shelter__contact, .shelter__text').slideToggle()
    }

})
