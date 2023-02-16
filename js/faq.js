$(() => {
    $('.faq article').on('click', function () {
        $(this).toggleClass('active');
        $(this).children('.faq .description').slideToggle(400);
    })
})