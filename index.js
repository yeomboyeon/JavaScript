let a = 0;
const lasta = $('.slides > div').length-1; // 인덱스 번호 선택

$('.btns > button').eq(0).on('click', function(){
    if(a === 0){ // 1번칸에서 5번칸으로 가려면 lasta로 가야 한다.
        a = lasta;
    } else {
        a--; // 좌로 가야하니 감소시킨다.
    }
    $('.slides > div').removeClass('active'); // 함수명 대문자 잘 쓰자..
    $('.slides > div').eq(a).addClass('active'); // 함수명 뒤에 클래스명에는 . 을 쓰지 않는다.
})

$('.btns > button').eq(1).on('click', function(){
    if(a == lasta){ // 5번칸에서 1번칸으로 가려면 인덱스번호 0이 되야 간다.
        a = 0; 
    }else {
        a++; // 우로 가야하니 증가시킨다.
    }
    $('.slides > div').removeClass('active'); // 삭제
    $('.slides > div').eq(a).addClass('active'); // 선택한 a 칸에 추가
})