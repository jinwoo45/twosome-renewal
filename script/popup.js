 $(function () {

     $('#popup').fadeIn(500); //팝업창 드래그 가능하게 함
     $('#popup').draggable(); //팝업창 드래그 가능하게 함


     /*가정: popup2 변수의 값이 'yes'일 때는 팝업창을 띄우지 않기
                  -> '오늘 하루 보지 않기' 버튼을 클릭할 때 'yes' 값 적용하기 */

     var check = navigator.platform; //접속기기의 환경
     console.log(check);
//     alert('접속기기:' + check + ',해상도:' + $(window).width())
     /*
         윈도우 데스크탑 : Win16, Win32, Win64
         매킨토시 : Mac, Macintel
     */

     //데스크탑 기기 리스트
     var x = "Win16|Win32|Mac|Macintel";

     //x.indexOf(check)<0
     //사용자의 접속환경(check)에 기기리스트(x)가 포함되어 있는지
     //포함되어 있으면 : 0, 아니면 :-1

     //쿠키의 값이  'yes'이면 팝업창을 숨기고, 'yes'가 아니면 보이기

     var popup = $.cookie('popup'); // popup2 변수값의 쿠기 읽어오기
     console.log(popup);

     //쿠키 값이 있으면('오늘 하루 열지 않기' 버튼을 누른 경우)
     if (popup == 'yes' || x.indexOf(check) < 0)
         $('#popup').hide();
     else
         $('#popup').show();


     //'오늘 하루 보지 않기' 버튼을 클릭하면 'yes' 값을 쿠기로 전달
     //유지 기간(expires)은 1일
     $('#popClose1').click(function () {
         $.cookie('popup', 'yes', {
             expires: 1,
             path: '/'
         });
         $('#popup').fadeOut();
     });

     //'다시 보지 않기' 버튼을 클릭하면 'yes' 값을 쿠기로 전달
     //유지 기간(expires)은 9999999999999일


     $('#popClose').click(function () {
         $('#popup').fadeOut();
     })
 });
