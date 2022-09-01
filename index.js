/**==== 입력 구현
 * document에서 addEvents 함수 선언 0
 * 이벤트 함수 구성 0
 * 입력한 todo 기록 및 가져오기
 * 엔터 기능 구현 
 * input에 form 태그 감싸기 0
 * submit event 받기 0
 * event.preventDaults() 새로고침 막기 0
 * 템플릿 리터널 활용
 * 입력값 맨 위로 나오게 prepend()
 * 입력한 값 지우기
 */
/**==== 클리어 구현
 * 클리어 누르면 전체 삭제
 * 삭제는 나빼고 자식요소들만 삭제할 empty() 사용
 */
/**==== 단일 삭제 구현
 * 입력한 값마다 있는 삭제 버튼을 클릭시 해당 값만 삭제되는 코드
 * 나포함 전체가 사라지는 remove() 사용
 * 시작시 생성되는 값이 아닌 임의의 시간에 사용자 임의대로 생성되는 값을 지우는 거라
 * 별도 deleteTodo 함수를 만들어서 구현(event 추가)
 * onclick으로 생성하고 구현위치는 html 위치 내부 삭제 버튼에 생성
 */
/**==== 단일 수정 구현
 * 입력한 값의 수정 버튼을 누르면 해당 입력값만 수정되어야 한다.
 * 입력한 값은 최초 span 값인데 이 위치에 값을 입력 prepend(html)
 * 그 위치에 remove() 삭제하기
 * onclick 이벤트 생성
 * input 태그를 바꾸기 전에 엘리먼트.text()로 저장
 */

$(document).ready(function(){
    addEvents();
});

function deleteTodo(event){ // 단일 삭제 구현
    // console.log(event);
    const target = $(event.target);
    target.parent().remove();
}

function showupdateTodo(event){ // 단일 삭제 구현
// console.log(event);

    const nowUpdate = $('#input-modify-form').find('input[type=text]').length === 0 ? false : true;
    // #input-modify-form 태그안에서 input[type=text] 들중에서 찾아서(find) 값이 0(없다면) false 보내고 값이 있다면 true보내
    if(nowUpdate == true){
        $('#input-modify-form').find('input[type=text]').focus();
        return;
    } // 만약에 위 변수가 true라면 값이 있다면 그쪽으로 커서를 옮겨줘(focus)

    const target = $(event.target);// 내 타겟 지정
    const todo = target.siblings('span'); // 타겟 형제 스판태그 저장
    const todoText = todo.text(); // 스판태그 위치에 텍스트 저장
    const html = `<input type="text" value='${todoText}' />`; // 새로 입력한 값을 html에 저장
    const nowTagName = target.siblings().first().prop("tagName"); // 타겟한 첫번째 형제 태그이름을 변수에 저장

    if(nowTagName === "INPUT"){ // nowTagName 변수 값이 input면 아래 실행하지 않고 리턴
        return;
    }

    target.parent().prepend(html); // 타겟 부모 첫번째에 입력
    todo.remove(); // 타겟한 span 태그 삭제
    
}

function addEvents(){
    $('#input-form').on('submit', function(event){ //입력 구현
        event.preventDefault();
        // console.log("확인1");

        const todo = $('#input-form > input[type=text]').val();
        // console.log("확인2");

        let html = `<li><span> ${todo} </span>`;
        html += '<button type="button" onclick="deleteTodo(event);">삭제</button>';
        html += '<button type="button" onclick="showupdateTodo(event);">수정</button></li>';
        // console.log("확인3");

        $('#input-modify-form > ul > li').prepend(html);

        $('#input-form > input[type=text]').val('');
    });

    $('#input-form > div > button').on('click', function(){// 클리어 구현
        $('#input-modify-form > ul > li').empty();
    });

    $('#input-modify-form').on('submit', function(event){
        event.preventDefault();
        // console.log('dd');

        const updateInput = $('#input-modify-form').find('input[type=text]'); // 입력한 값을 찾겠다.
        const updateTodo = updateInput.val(); // 찾은 값을 변수에 저장
        updateInput.parent().prepend(`<span>${updateTodo}</span>`); // 변수의 부모 태그 아래에 가져온 값 입력
        updateInput.remove();
    });
}