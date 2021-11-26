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
            slidesPerView: 3
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
    on: {
        resize: function() {
            slideSix.changeDirection('horizontal');
        }
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3
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

AOS.init();