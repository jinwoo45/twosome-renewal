var before2 = 0;
$(window).scroll(function () {
    var current = $(this).scrollTop();

    if (current > before2)
        $('#top').css('right', '20px');

    else
        $('#top').css('right', '-60px');

})
 
 $(function () {


     $('#top').click(function () {
         $('html,body').stop().animate({
             scrollTop: '0'
         }, 1000);
     });
     
     var no = $('.sub').length;   //서브메뉴의 총 개수

		var x;
		for(x=0;  x<no;  x++){
			var url = $('.sub').eq(x).attr('href');   //서브메뉴의 링크값
			if(url)   //링크값 여부에 따라 각각의 스타일 적용하기
				$('.sub').eq(x).addClass('subActive');
			else
				$('.sub').eq(x).addClass('subInactive');
		}   //end for()


		$('.sub, .login,.menuImg,#secC_button').click(function(){
			var url = $(this).attr('href');   //서브메뉴의 링크값

			//링크값이 있을 때만 해당 페이지로 이동하기
			if(url)
				window.location.href=url; 
		});   //$('.sub').click()
		
 }); //  $(function(){


 function autoChange1() {
     if ($(window).width() > 900) {
         $('#logoImage').attr('src', 'images/logo.png');

         $(".main,#subBack").mouseenter(function () {
             $(".submenu,#subBack").stop().slideDown(200);
             $('#header').css('border-bottom','none');
         });

         $(".main,#subBack").mouseleave(function () {
             $('#header').css('border-bottom','2px solid #d50037');
             $(".submenu,#subBack").stop().slideUp(200);
         });
     } else {
         $('#logoImage').attr('src', 'images/mobile_logo.png');

         $(".main").mouseenter(function () {
             $('.submenu,#subBack').hide();
             $(this).children('.submenu').stop().slideDown(500);
         });

         $('#view').click(function () {
             $('#menu').css('right', '0');
             $('#black').show();
             $('body').css('overflow', 'hidden');
             //body 스크롤 제한 on/off

         })

         $('.close,#black,#menuLogo').click(function () {
             $('#menu').css('right', '-50%');
             $('#black').hide();
             $('body').css('overflow', 'auto');
         })
     }
 }

 $(document).ready(autoChange1);
 $(window).resize(autoChange1);


 var before = 0;

 $(window).scroll(function () {
     var current = $(this).scrollTop();

     if (current > before && current > 150)
         $('#header').css('top', '-100px');
     else
         $('#header').css('top', '0');

     before = current;
 })

