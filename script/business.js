    $(document).ready(autoHeight_video);   //페이지 열릴 때
    $(window).resize(autoHeight_video);    //창의 크기를 조절할 때
    
    function autoHeight_video(){
        var newH = $('#videoBox').width() * (315/560);  
            //동영상 박스의 가로 대비 세로 크기(1008*567 기준)
         $('#videoBox,#video').height(newH);
            //동영상 박스의 세로 크기 변경
    }