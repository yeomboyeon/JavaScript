console.clear();

$('.page-nav > div').click(function(event){ // 나자신 선택(target)
    const target = $(event.target); // 타겟 설정
    const myTarget = target.index(); // 타겟을 인덱스에 저장

    //배경 사진 변경
    $('.slider > .slides > div').removeClass('active'); 
    // 사진이 있는 div에 active 태그 삭제
    $('.slider > .slides > div').eq(myTarget).addClass('active'); 
    // 사진이 있는 div에 선택한 mytarget에 active 태그 추가
    
    // 메뉴 활성화 변경
    target.siblings().removeClass('active'); 
    // siblings() : 선택한 요소의 형제 요소를 모두 찾아 active 태그를 삭제한다.
    target.addClass('active'); // 선택한 요소에 active 태그를 추가한다.
})

// 웹페이지의 특정 부분을 주기적으로 업데이트해줘야 하거나, 어떤 API로 부터 변경된 데이터를 주기적으로 받아와야 하는 경우
// 어떤 코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을 때 사용
// setTimeout() 함수와 대동소이. 첫번째 인자로 실행할 코드를 담고 있는 함수를 받고, 두번째 인자로 반복 주기를 밀리초(ms) 단위로 받음.
setInterval(function(){
    let changeIndex = $('.slides > .active').index()+1; // 변화를 캐치, 우로 1씩 증가

    if($('.page-nav > div').length === changeIndex){ // 배열의 길이가 changeIndex 길이와 같다면
        changeIndex = 0; // 인덱스 번호 0으로 돌아와라.
    }

    $('.slides > div').removeClass('active');
    $('.slides > div').eq(changeIndex).addClass('active');

    $('.page-nav > div').removeClass('active');
    $('.page-nav > div').eq(changeIndex).addClass('active');
}, 2000) // 밀리초(ms) 단위로 숫자 입력(2000이면 2초)