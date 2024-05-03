
$('.btn__menu').on('click', function () {
    $('header .nav, .btn__menu, body').toggleClass('is_active');
})

$('.shelter').on('click', function () {
    if ($(window).innerWidth() <= 700) {
        $(this).toggleClass('is__active').find('.shelter__contact, .shelter__text').slideToggle()
    }
    
})

// document.addEventListener('click', function (e) {
//     if (!e.target.closest('#nav') && e.target !== btn_menu) {
//         navbar.classList.remove('is_active');
//         btn_menu.classList.remove('is_active');
//     }
// });

// function hideModals() {
//     $('.modal').removeClass('is_active').fadeOut();
//     $('body, .header .nav, .btn_menu').removeClass('is_active');
// };

// $(function () {
//     function showModal(id) {
//         $(id).addClass('is_active').fadeIn(300);
//         $(id).addClass('is_active');
//     }

//     $('[data-modal]').on('click', function (e) {
//         e.preventDefault();
//         showModal('#' + $(this).attr("data-modal"));
//     });

//     $('.modal-close').on('click', () => {
//         hideModals();
//     });

//     $(document).on('click', function (e) {
//         if (!(
//             ($(e.target).parents('.modal-content').length) ||
//             ($(e.target).hasClass('btnModal')) ||
//             ($(e.target).hasClass('btn')) ||
//             ($(e.target).hasClass('nav')) ||
//             ($(e.target).hasClass('nav__link')) ||
//             ($(e.target).hasClass('btn_menu')) ||
//             ($(e.target).hasClass('modal-content'))
//         )) {
//             hideModals();
//         }
//     });
// });
