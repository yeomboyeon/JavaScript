/**
 * ===== 입력한 todo 구현 (완료)
 * 입력한 todo 기록하기
 * 엔터 기능 구현하기
 * input에다가 form 태그로 감싸기  0
 * submit event로 받기 0
 * 새로고침 막기 event.preventDault() 0
 * 템플릿 리터널 활용
 * 입력값 가져오기 맨위로 나오도록 prepend
 * 입력창에 입력한 값 지우기
 *
 * ===== clear 버튼 구현 (완료)
 * clear 누르면 지금까지 출력된 거 없애기
 * clear 버튼에 event onclick 넣기
 * todo 없애기
 * 테스트 console.log("");
 *
 * ===== 단일 삭제 구현 (진행중)
 * 삭제 버튼 누르면 event 넣기
 * 삭제
 *
 * ===== 단일 수정 구현 (진행중)
 * 수정 버튼에 이벤트 넣기
 * input 으로 바꾸기전에 텍스트(엘리먼트.text()) 기억하기(변수에 저장)
 * input val(텍스트)로 기억
 * form 구조 변경(추가)
 */

$(document).ready(function () {
  addEvents();
});

function addEvents() {
  $("#input-form").on("submit", function (event) {
    event.preventDefault();

    const message = $("input[type=text]").val();

    let html = `<li><span> ${message} </span>
              <button type="button">삭제</button>
              <button type="button">수정</button></li>`;

    $("form > ul").prepend(html);

    $("input[type=text]").val("");
  });

  $("#input-form > div > button").on("click", function () {
    // empty(자식들 전체 삭제) 와 remove(자신포함 완전 삭제)
    $("#input-modify-form > ul").empty();
  });
}
