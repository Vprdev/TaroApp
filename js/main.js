let swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function() {
            swiper.changeDirection('horizontal');
        }
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

function getDirection() {
    let windowWidth = window.innerWidth;
    let direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}