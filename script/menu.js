var gallery = ['menuC__box','coffee','none','juice'];


$(function () {
    
    $('.checkbox').eq(1).addClass('active');
    $('.menuC__box').fadeOut();
    $('.coffee').fadeIn();    
    
    $('.checkbox').click(function(){
        var no = $(this).index();
        $(this).toggleClass('active');
        
        var filterName =  gallery[no];
        
            if($(this).hasClass('active'))
                $("[class*="+filterName+"]").fadeIn();
            else
                $("[class*="+filterName+"]").fadeOut();
        
        $('.all').addClass('active');
        
        var x;
        for(x=1; x<4; x++){
            
            var check = $('.checkbox').eq(x).hasClass('active');
            if(!check)
                $('.all').removeClass('active');
        }
    });

    $('.all').click(function(){
        $(this).toggleClass('active');
    
        if($(this).hasClass('active')){
            $('.checkbox').addClass('active');
            $('.menuC__box').fadeIn();
        }
        else{
            $('.checkbox').removeClass('active');
            $('.menuC__box').fadeOut();
        }
    })
    
    
    $('.menu_img,.menu_caption,.modal2').click(function () {
        $(this).siblings('.menuModal').show();

        if ($(window).width() < 600) {
            $('.subBack2').show();
            $('body').css('overflow', 'hidden');
        }
    });

    $('.modalClose').click(function () {
        $(this).parent('.menuModal').fadeOut(300);
        $('.subBack2').fadeOut(300);
        $('body').css('overflow', 'auto');
    });

})
