$(() => {
    // Suggestion popin
    $('.suggestion .yes').on('click', function () {
        $('.suggestion .no').hide();
        $(this).addClass('clicked');
        $('.suggestion__text h3').html("Merci pour votre aide !");
        $('.suggestion__text p').html("Nous sommes ravis que ces informations vous aient été utiles.");
    })

    $('.suggestion .no').on('click', function () {
        $('.popin').fadeToggle(300);
        $('.popinOverlay').fadeToggle(300);
        $('body').addClass('suggestion-on');
    })

    $('.popin .close').on('click', function () {
        $('.popin').fadeToggle(200);
        $('.popinOverlay').fadeToggle(200);
        $('body').removeClass('suggestion-on');
    })

    $('.popinOverlay').on('click', function () {
        if (window.screen.width >= 992) {
            $('.popin').fadeToggle(200);
            $('.popinOverlay').fadeToggle(200);
            $('body').removeClass('suggestion-on');
        }
    })

    // Contact popin
    $('.contact').on('click', function () {
        $('.popinContact').fadeToggle(300);
        $('.popinOverlayContact').fadeToggle(300);
        $('body').addClass('suggestion-on');
    })

    $('.closeContact').on('click', function () {
        $('.popinContact').fadeToggle(200);
        $('.popinOverlayContact').fadeToggle(200);
        $('body').removeClass('suggestion-on');
    })

    $('.popinOverlayContact').on('click', function () {
        if (window.screen.width >= 992) {
            $('.popinContact').fadeToggle(200);
            $('.popinOverlayContact').fadeToggle(200);
            $('body').removeClass('suggestion-on');
        }
    })
})

// CLICK OUTSIDE INPUT POPIN TO CLOSE
$(document).click((event) => {
    if ((!$(event.target).closest(".popin form, .no, .popinContact form, .contact").length) && (window.screen.width <= 992)) {
        $('.popin').fadeOut(200);
        $('.popinOverlay').fadeOut(200);
        $('.popinContact').fadeOut(200);
        $('.popinOverlayContact').fadeOut(200);
        $('body').removeClass('suggestion-on');
    }
});