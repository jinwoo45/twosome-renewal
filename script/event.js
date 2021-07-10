$(function () {
    $('.eB1').click(function () {
        $(this).addClass('active');
        $('.eB2').removeClass('active');
        $('#eventOutBox2').fadeOut();
        $('#eventOutBox').fadeIn();
    })

    $('.eB2').click(function () {
        $(this).addClass('active');
        $('.eB1').removeClass('active');
        $('#eventOutBox').fadeOut();
        $('#eventOutBox2').fadeIn();
    })
})
