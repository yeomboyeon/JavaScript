/** 입력 기능 구현
 * document 에서 addEvents 함수 받아오기
 * addEvents 함수 선언
 * event 감싸기
 * 입력한 todo 기록 및 가져오기 input
 * input 태그에 form 태그로 감싸주기
 * on. submit. event.preventDault() 새로고침 막기
 */
/** CLEAR 기능 구현
 * ul 태그 자식인 li 전부가 삭제되어야 함
 * remove는 자신만 삭제 empty 나포함 전체 삭제
 */
/** 각 태그별 삭제 기능 구현
 * 이벤트 타겟 설정
 * 타겟 받아와서 변수에 저장
 * 클릭하는 해당 태그만 삭제
 * deleteEvents 함수 별도 선언
 * 삭제 remove()
 * onclick 함수
 */
/** 각 태그별 수정 기능 구현
 * onclick html 태그에 작성
 * showDateEvents() 함수 선언
 * 수정 클릭시 해당 태그만 수정
 * 타겟 설정, 타겟의 형제태그를 변수에 저장
 * 그 변수의 텍스트를 또다른 변수에 저장
 * html 변수에 수정되는 값의 텍스트를 저장(input value)
 * 타겟의 형제의 첫번째 태그 이름을 prop 찾아서 변수에 저장
 * if 태그이름이 input 이면 리턴
 * 타겟의 형제 태그 변수의 부모의 첫번째에 html 추가
 * 타겟의 형제 태그 변수를 지운다.
 * ---addEvents--- 추가
 * submit 새로고침 막고
입력한 값 어딘지 find 찾고
찾은 값 val 입력받아
부모, 첫번째 스팬태그에 입력 재입력하고
기존에 입력된 값 remove 지운다.
 */
$(document).ready(function () {
  addEvents();
});

function deleteEvents(event) {
  const target = $(event.target);
  target.parent().remove();
}

function showDateEvents(event) {
  const target = $(event.target);
  const todo = target.siblings("span");
  const todoText = todo.text();
  const html = `<input type ="text" value ="${todoText}"/>`;
  const nowTagName = target.siblings().first().prop("TagName");

  if (nowTagName === "INPUT") {
    return;
  }
  target.parent().prepend(html);

  todo.remove();
}

function addEvents() {
  $("#input-form").on("submit", function (event) {
    event.preventDefault();

    const todo = $("#input-form > input[type=text]").val();

    let html = `<li>
    <span> ${todo} </span>
    <button type="button" onclick="deleteEvents(event)"/>삭제</button>
    <button type="button" onclick="showDateEvents(event)"/>수정</button></li>`;

    $("#input-modify-form > ul").prepend(html);

    $("#input-form > input[type=text]").val("");
  });

  $("#input-form > div > button").on("click", function () {
    $("#input-modify-form > ul > li").empty();
  });

  $("#input-modify-form").on("submit", function (event) {
    event.preventDefault(); // submit 새로고침 막고

    const updateInput = $("#input-modify-form").find("input[type=text]"); // 입력한 값 어딘지 find 찾고

    const updateTodo = updateInput.val(); // 찾은 값 val 입력받아

    updateInput.parent().prepend(`<span>${updateTodo}</span>`); // 부모, 첫번째 스팬태그에 입력 재입력하고

    updateInput.remove(); // 기존에 입력된 값 remove 지운다.
  });
}
