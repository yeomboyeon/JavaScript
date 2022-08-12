let a = 0;
const lasta = $('.slides > div').length-1; // 인덱스 번호 선택

$('.page-nav > div').on('click', function(event){ // 이벤트 타겟 사용 방법
    
    const target = $(event.target); // 나 자신 target를 선택해서 index를 선택하겠다.
    const index = target.index();
    
    $('.slides > div').removeClass('active'); // 이미지 사진이 삭제되고 추가되도록
    $('.slides > div').eq(index).addClass('active'); 

    $('.page-nav > div').removeClass('active'); // 하단 원이 삭제되고 추가되도록
    $('.page-nav > div').eq(index).addClass('active'); // 
})