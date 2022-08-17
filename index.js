// 1. 상자별 다른 색깔 주기
$('.box > div').eq(0).css('background-color','yellow');
$('.box > div').eq(1).css('background-color','green');
$('.box > div').eq(2).css('background-color','blue');
$('.box > div').eq(3).css('background-color','black');
$('.box > div').eq(4).css('background-color','pink');

// 2. box 엘리먼트 자식중에 홀, 짝수번째 엘리먼트
// $('.box > div:nth-child(even)').css('background-color','yellow');
// $('.box > div:nth-child(odd)').css('background-color','blue');
$('.box > div:even').css('background-color','yellow');
$('.box > div:odd').css('background-color','blue');

// 3. 날찾아줘 글자 색깔을 분홍색으로 바꿔주세요
$('.box').find('h1').css('color','pink');

// 4. 날찾아줘 입장에서 부모박스를 파랑색 배경으로 바꿔주세요
$('.box h1').closest('.parent').css('background-color','blue');

// 5. eq 문법, length 사용 마지막 상자 배경 초록색으로 변하기
const boxlength = $('.box > div').length;
$('.box > div').eq(boxlength-1).css('background-color','green');

// 1. 이벤트 연습+클래스 (각 상자마다 다른 이벤트 주기)
$('.box > div').eq(0).on('click', function(event){ 
  alert('1번 이벤트 시작');
});
$('.box > div').eq(1).on('click', function(event){ 
  alert('2번 이벤트 시작');
});
$('.box > div').eq(2).on('click', function(event){ 
  alert('3번 이벤트 시작');
});
$('.box > div').eq(3).on('click', function(event){ 
  alert('4번 이벤트 시작');
});
$('.box > div').eq(4).on('click', function(event){ 
  alert('5번 이벤트 시작');
});

// 2. 하나의 상자에 click, dblclick 이벤트 주기(객체로 넣기)
$('.box > div').eq(0).on({
  click : function(){ 
  alert('1번 클릭');
},
  mouseenter : function(){ 
  alert('1번 마우스 엔터');
},
  mouseleave : function(){ 
  alert('1번 마우스 떠나라');
}
})

// 3. 인풋안에 글자 입력시 밑에 그대로 나오게 해주세요 $(this) OR $(event.target)
$('input[type=text]').on('keyup', function(event){
  // $(event.target); // 둘다 같다.
  // $(this);
  const target = $(event.target);  // 이벤트 나 자신
  const value = target.val();
  // console.log(value);
  target.next('h1').text(value); // h1 태그 안에 value 값이 text 입력된다는 의미
})

// 4. 첫번째 상자를 누를때마다 자기 바로 뒤에 있는 상자에(있으면 제거) 클래스를 추가
$('.box > div').eq(0).on({
  click : function(event){ 
    const target = $(event.target);
    
    //add, remove, hasClass 하나로 묶어서 활용할 수 있음
    target.next('div').toggleClass('apple');
}
})

// #box-1 자식 기준 맨 밑에 html 요소를 넣을 때 사용(채팅창 처럼 아래로 추가됨)
$('#box-1').append('<div><h1>안녕하세요</h1></div>');
$('#box-1').append('<div><h1>안녕하세요!!!</h1></div>');

// append 반대인 prepend