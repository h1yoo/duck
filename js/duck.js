$(document).ready(function(){
    //index 페이지에서 페이드 슬라이드
    const slide = setInterval(fade, 2300);
    let i = 3;
    function fade() {
        i--;
        if(i==0) {
            $("#index img").stop().fadeIn(1000);  //이미지 모두 보이게 하기
            i=3;
        }
        else {
            $("#index img").eq(i).stop().fadeOut(1000);
        }
    }

});   ///////////END