$(function () {

    $('.map').eq(0).slideDown();
    $('.watch').eq(0).addClass('active');

    $('.watch').click(function () {
        $('.map').slideUp();
        $(this).parent().parent().next().children('.map').slideToggle();
        $('.watch').removeClass('active');
        $(this).addClass('active');
    })

})
