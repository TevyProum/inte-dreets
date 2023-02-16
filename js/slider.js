$(() => {

    $('.sliderCards__list').owlCarousel({
        dots: false,
        nav: true,
        navContainer: '.arrow',
        loop: true,
        responsive: {
            0: {
                items: 1,
                margin: 10,
            },
            600: {
                items: 2,
                margin: 20,
            },
            992: {
                items: 3.13,
                margin: 56,
            }
        },
    });

    $('.backgroundRedirection .owl-carousel').owlCarousel({
        dots: true,
        nav: false,
        mouseDrag: false,
        center: true,
        responsive: {
            0: {
                items: 1.1,
            },
            600: {
                items: 2,
                center: false,
                margin: 40,
            },
            992: {
                items: 3,
                center: false,
                margin: 40,
            }
        },
    });

    $('.sliderLogo .owl-carousel').owlCarousel({
        dots: false,
        nav: true,
        navContainer: '.arrowLogo',
        center: true,
        loop: true,
        margin: 40,
        responsive: {
            0: {
                items: 1.8,
            },
            600: {
                items: 3,
                center: false,
            },
            768: {
                items: 4,
                center: false,
            },
            992: {
                items: 5,
                center: false,
            },
            1200: {
                items: 6,
                center: false,
            },
            1200: {
                items: 7,
                center: false,
            }
        },
    });

    $('.actionTab .owl-carousel').owlCarousel({
        dots: false,
        nav: true,
        navContainer: '.arrowAction',
        items: 1
    });

    // $('.results__right .owl-carousel').owlCarousel({
    //     dots: false,
    //     nav: true,
    //     navContainer: '.arrowResults',
    //     items: 1,
    //     margin: 30
    // });
});