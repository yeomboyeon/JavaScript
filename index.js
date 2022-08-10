// 시작함과 동시에 경고창 표시
$(document).ready(function(){
    alert('html 준비끝');
})

/**
 * 1. String 문자열 Number 숫자
 * 2. Object 객체
 * 3. Array 배열
 * 4. Function 함수
 */
function add(a){
    return a;
}
const sum = add();
console.log(sum);

/* 1. 일반 함수 선언 function () {}
* 2. 화살표 함수 () => {}
* 선언방식은 다르나, 호출방식은 동일
*/

/**
 * 실행 순서(1. HTML >> CSS(h1 초록) >> JS(h1 빨강))
 * ** 우선순위는 JS가 가장 높음.
 * 
 *  * JQuery 선택자
 * <기본 선택자>
 * div : 태그 선택자
 * . : 클래스 선택자
 * # : ID 선택자
 * , : 결합 선택자
 * 
 * <계층 선택자>
 * parent > child
 * 
 * <속성 선택자>
 * []
 */

const divs = $('.div-01,#div-02'); // index.html 에서 자료 가져오기
// ''문자열로 감싼 뒤 .div-01 (클래스 불러오기), #div-02(id 불러오기)
divs.css('background-color', 'green');

const div1 = $('section > div'); // index.html 에서 자료 가져오기
div1.css('background-color', 'red');

const input = $('input[type=checkbox]'); // [] 속성별로 가져오기
input.css('background-color', 'blue');

// JQuery 이벤트 주입
// 항상 event라는 매개변수를 받을 수 있다.
// $('.div-01').on('click', function(){
//      alert('안녕하세요');
// })

// $('#div-02').on('click', function(){
//     alert('재미있다.');
// })

// $('input[type=text]').on('change', function(){
//     console.log('와우..');
// })

// $('input[type=text]').on('keyup', function(){
//     console.log('와우..');
// })

$('.div-01').on('click', function(){
    $('.last').removeClass('last'); // 선택자로 가져온 엘리먼트에 클래스 삭제
    $('.test-01').addClass('last'); // 선택자로 가져온 엘리먼트에 클래스 추가

    if($('.last').hasClass('test-01')){ // 클래스를 가지고 있는지 판단
        console.log('가지고 있다.');
    } else {
     console.log('가지고 있지 않다..');
    }
})

$('#div-02').on('click', function(event){
    const target = $(event.target);  // 이벤트 나 자신
    target.css('background-color','green');
})