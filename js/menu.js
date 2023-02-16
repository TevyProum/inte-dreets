$(() => {
    // MOBILE
    $('#burger').on('click', function () {
        $(this).toggleClass('closed');
        $('body').toggleClass('noscroll');
        $('nav').addClass('display');
        $('#searchIcon').addClass('display');
        $('.searchBar').removeClass('display');
        $('header .container').slideToggle(400);
        $('.overlay').toggleClass('opacity');
    });

    $('#searchIcon').on('click', function () {
        $(this).removeClass('display');
        $('nav').removeClass('display');
        $('.searchBar').addClass('display');
    })

    // DESKTOP
    $('.hero .searchBar input').on('click', function () {
        $('.searchBar').addClass('highlight');
        $('.hero__overlay').addClass('opacity');
    })

    $('.backToTop').on('click', function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })

    // DISPLAY SEARCH RESULTS
    $(".hero .searchBar input").on("keyup", (event) => {
        let $wordLength = event.currentTarget.value.length;

        if ($wordLength >= 3) {
            $('.popinResults').fadeIn(400).addClass('display')
        } else {
            $('.popinResults').fadeOut(400).removeClass('display')
        }
    });
})

// CLICK OUTSIDE HEADER TO CLOSE
$(document).click((event) => {
    if ((!$(event.target).closest("header").length) && (window.screen.width <= 992)) {
        $('#burger').removeClass('closed');
        $('body').removeClass('noscroll');
        $('header .container').slideUp(400);
        $('.overlay').removeClass('opacity');
    }
});

// CLICK OUTSIDE SEARCHBAR-HERO TO CLOSE
$(document).click((event) => {
    if (!$(event.target).closest(".hero input, .popinResults").length) {
        $('.searchBar').removeClass('highlight');
        $('.hero__overlay').removeClass('opacity');
        $('.popinResults').fadeOut(400).removeClass('display')
    }
});