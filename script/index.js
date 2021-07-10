var slideNo = 0;
var slideNo2 = 0;
var loop, loop2;

function slide(no) {

    slideNo += no;

    if (slideNo > 2) slideNo = 0;
    if (slideNo < 0) slideNo = 2;

    slideLeft();

    $('.circle').css({
        'color': '#555',
        'opacity': '.6'
    });
    $('.circle').eq(slideNo).css({
        'color': '#c92346',
        'opacity': '1'
    });;
}

function slideLeft() {
    $('#slideBox').stop().animate({
        'margin-left': '-100%'
    }, 300, function () {
        $('.slide:first').appendTo('#slideBox');
        $('#slideBox').css('margin-left', 0);
    })
}


function playSlide() {
    loop = setInterval("slide(1)", 3000);
}

function stopSlide() {
    clearInterval(loop);
}

function autoChange2() {
    if ($(window).width() < 700) {
        $('.swiper-slide>img').eq(0).attr('src', 'images/slide1_2.jpg');
        $('.swiper-slide>img').eq(1).attr('src', 'images/slide2_2.jpg');
        $('.swiper-slide>img').eq(2).attr('src', 'images/slide3_2.jpg');
        $('.secC__bg').attr('src', 'images/secC_bg1_2.jpg');

        var y = $('.slide').width() * (777 / 700);

        $('#secA').css('height', y);

    } else {
        $('.swiper-slide>img').eq(0).attr('src', 'images/slide1.jpg');
        $('.swiper-slide>img').eq(1).attr('src', 'images/slide2.jpg');
        $('.swiper-slide>img').eq(2).attr('src', 'images/slide3.jpg');
        $('.secC__bg').attr('src', 'images/secC_bg1.jpg');

        var y = $('.slide').width() * (700 / 1920);

        $('#secA').css('height', y);
    }
    
    if ($(window).width() > 900) {
        $('#secC').css('background-image', "url('images/secC_bg1.jpg')");
    }
    
    else if($(window).width() > 500) {
        $('#secC').css('background-image', "url('images/secC_bg1_2.jpg')");
    }
        
    else{
        $('#secC').css('background-image', "url('images/secC_bg1_3.jpg')");
    }
}

var slideWidth;

function autoWidth() {
    //pc화면 기준: 3등분
    slideWidth = $('#menuBox').width() / 3;

    if ($(window).width() <= 550)
        slideWidth = $('#menuBox').width();

    $('.menuSlide').width(slideWidth);

    $('#menuBox__In').width(slideWidth * 6);

}

var loop3;

function toLeft() {
    $('#menuBox__In').stop().animate({
        'margin-left': -slideWidth
    }, 300, function () {
        $('.menuSlide:first').appendTo('#menuBox__In');
        $('#menuBox__In').css('margin-left', 0);
    });
}

function toRight() {
    $('.menuSlide:last').prependTo('#menuBox__In');
    $('#menuBox__In').css('margin-left', -slideWidth);
    $('#menuBox__In').stop().animate({
        'margin-left': 0
    }, 300);
}

function playSlide2() {
    loop3 = setInterval('toLeft()', 3000);
}

function stopSlide2() {
    clearInterval(loop3);
}


$(document).ready(autoChange2);
$(window).resize(autoChange2);

$(document).ready(autoWidth);
$(window).resize(autoWidth);


$(function () {

//    playSlide();
//    playSlide2();

    $('.circle').click(function () {
        var no = $(this).index();

        slideNo = no;
        slide(0)
    });

    $('.pause').click(function () {
        $(this).css('display', 'none');
        $('.play').css('display', 'block');
        stopSlide();
    });

    $('.play').click(function () {
        $(this).css('display', 'none');
        $('.pause').css('display', 'block');
        playSlide();
    });

    $('.left').click(function () {
        if (!$('#menuBox__In').is(':animated'))
            toRight();
    })

    $('.right').click(function () {
        if (!$('#menuBox__In').is(':animated'))
            toLeft();
    })
    
    $('.news').click(function(){
        $(this).addClass('active');
        $('.notice').removeClass('active');
        $('.noticeBox').fadeOut(200);
        $('.newsBox').delay(200).fadeIn(600);
    })

    $('.notice').click(function(){
        $(this).addClass('active');
        $('.news').removeClass('active');
        $('.newsBox').fadeOut(200);
        $('.noticeBox').delay(200).fadeIn(600);
    })

    
    
}); //$(function)

