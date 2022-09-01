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
 * ===== 단일 삭제 구현 (완료)
 * 삭제 버튼 누르면 event 넣기
 * 타겟잡고 타겟 부모까지 삭제
 * 별도 함수 작성
 * 
 * ===== 단일 수정 구현 (완료)
 * 수정 버튼에 이벤트 넣기
 * 별도 함수 작성
 * input 으로 바꾸기전에 텍스트(엘리먼트.text()) 기억하기(변수에 저장)
 * input val(텍스트)로 기억
 * form 구조 변경(추가)
 * 다른 글버튼에 있는 수정 클릭시 에러나는 거 보완
 */

// 래디 준비가 되면 실행되는 함수
$(document).ready(function(){
    addEvents();
});

function deleteTodo(event){ //삭제 구현. event를 꼭 가져와야 한다. 
    // console.log(event);
    const target = $(event.target); // 나 자신 타겟팅
    target.parent().remove(); // 타겟의 부모를 지운다.
}

function showUpdateInput(event){

    const nowUpdate = $('#input-modify-form').find('input[type=text]').length === 0 ? false : true;
    // 수정 중인 텍스트가 있는데 다른 글에서 수정 버튼을 눌르면 버그가 생기는 걸 없애주는 방법
    // 삼항 연산자 활용
    // 글을 작성중인게 있다면 참, 거짓으로 구분

    if(nowUpdate === true){
        $('#input-modify-form').find('input[type=text]').focus();
        return;
    }
    // 위 nowUpdate 변수에 값이 참이면 현재 수정인 텍스트 위치로 커서를 옮겨주도록 하기(focus()).

    const target = $(event.target); // 나 자신 타겟팅
    const todo = target.siblings('span'); 
    // todo 라는 변수에 타겟팅 한 형제 태그중 span을 저장
    // console.log('삭제 확인');

    const todoText = todo.text(); 
    // todotext 라는 변수에 todo에 저장된 텍스트를 저장한다. 
    
    const html = `<input type="text" value='${todoText}' />`; 
    // value 입력한 값이 들어가야 하기에

    const nowTagName = target.siblings().first().prop("tagName"); 
    // 타겟의 형제에서 첫번째 태그이름을 가져와 저장

        if(nowTagName === "INPUT"){ 
            return;
        }
        // 지금 nowTagName 이 input 이면 리턴하겠다. 아래 실행안하고 위로 올라가기

    target.parent().prepend(html); // todotext 지우기 전에 span 태그 자리에 입력하겠다. 

    todo.remove(); // todo 변수를 지우겠다. 나와 함께
}

// 이벤트를 넣는 함수
// 보통 이벤트로 관리할 함수가 엄청나게 많은데 이 함수하나로
// 관리하기 위해서 활용
function addEvents(){
    $('#input-form').on('submit', function(event){ // 입력창 구현
        event.preventDefault(); // 새로고침 하지 않게 하는 함수
        // console.log('확인');

        const todo = $('#input-form > input[type=text]').val();
        // console.log('확인');

        let html = `<li><span> ${todo} </span>`
            html += '<button type="button" onclick="deleteTodo(event);">삭제</button>';
            // 삭제 하기 위해서는 onclick="deleteTodo(event) 추가
            html += '<button type="button" onclick="showUpdateInput(event);">수정</button></li>';

        $('#input-modify-form > ul').prepend(html);
        // prepend() 맨 위에 입력시킨다 , // append() 맨 아래로 입력시킨다
        $('#input-form > input[type=text]').val('');
        // 입력되어져 있는 내용 삭제
    })

    $('#input-form > div > button').on('click', function(){ // 삭제 구현
        // console.log("클릭");
        $('#input-modify-form > ul').empty();
        // empty() 자식요소들만 삭제 ,      // remove() 나를 포함 자식 모두 삭제
        
    })

    $('#input-modify-form').on('submit', function(event){ // 수정 구현
        event.preventDefault(); // 새로고침 하지 않게 하는 함수
        // console.log('확인');

        // 어떤 글을 수정할 지 모르기 때문에 선택자 선택시 find() 찾기 함수 활용(children 접근 불가)
        const updateInput = $('#input-modify-form').find('input[type=text]');
        // console.log(updateInput);

        const updateTodo = updateInput.val();
        // updateTodo 변수에 updateInput 값을 가져오겠다.

        updateInput.parent().prepend(`<span>${updateTodo}</span>`);
        // updateInput 의 부모 태그 아래에 가져온 값을 입력하겠다.
    
        updateInput.remove();        
        // 변수에 있는 값은 지우겠다.
    })
}