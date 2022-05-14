function autoChange() {
    if ($(window).width() < 700) {
        $('.brandSlide>img').eq(0).attr('src', 'images/brand_mobile1.jpg');
        $('.brandSlide>img').eq(1).attr('src', 'images/brand_mobile2.jpg');
        $('.brandSlide>img').eq(2).attr('src', 'images/brand_mobile3.jpg');

        $('#jssor_1').css({
            'height': '700px',
            'width': '700px'
        });

        $('#brandSlide').css({
            'height': '700px',
            'width': '700px'
        });


    } else {
        $('.brandSlide>img').eq(0).attr('src', 'images/brand1.jpg');
        $('.brandSlide>img').eq(1).attr('src', 'images/brand2.jpg');
        $('.brandSlide>img').eq(2).attr('src', 'images/brand3.jpg');

        $('#jssor_1').css({
            'height': '300px',
            'width': '1200px'
        });

        $('#brandSlide').css({
            'height': '300px',
            'width': '1200px'
        });
    }

}

$(document).ready(autoChange);
$(window).resize(autoChange);
