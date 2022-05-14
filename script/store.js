$(function () {

//    $('.map').eq(0).slideDown();
//    $('.watch').eq(0).addClass('active');

    $('.view').click(function () {
        $('.maplist').fadeOut();
        var no = $(this).parent().parent().index();
        $('.maplist').eq(no).fadeIn();
    })

})