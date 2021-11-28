let swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 5
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 5
        },
        760: {
            slidesPerView: 5
        }
    }
});
let swiper2 = new Swiper('.swiper-librarys', {
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4
        },
        760: {
            slidesPerView: 5
        }
    }
});
let slide = new Swiper('.slide', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function() {
            slide.changeDirection('horizontal');
        }
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3
        },
        760: {
            slidesPerView: 3
        }
    }
});
let slideSix = new Swiper('.slideSix', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3
        },
        760: {
            slidesPerView: 3
        }
    }
});

function getDirection() {
    let windowWidth = window.innerWidth;
    let direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}

// AOS animation
AOS.init();

// navbar
$(document).ready(function() {
    $(window).scroll(function(event) {
        var heightBody = $(window).scrollTop();
        if (heightBody >= 100) {
            $('.taro-menu').removeClass('py-8');
            $('.taro-menu').addClass('py-2 color_bg-navbar transition ease-in duration-700');
        } else {
            $('.taro-menu').addClass('py-8');
            $('.taro-menu').removeClass('py-2 color_bg-navbar transition ease-in duration-700');
        }
    })
})


// navbar mobile tablet
$(".menu-mobile-tablet, .overlay-mobile-tablet").click(function() {
    $('.header-menu_mobile-tablet').toggleClass('hidden');
    $('.overlay-mobile-tablet').toggleClass('hidden');
});