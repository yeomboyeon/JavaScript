// 카카오톡 채팅방 만들기 

// 1. 입력 후 전송 버튼을 누르면(엔터를 치면) 이벤트 추가(jquery enter event 구글링)(event.keycode === 13)
// 2. 내가 입력한 값을 가져온다 $('input').val()
// 3. 맨 아래로 입력한 값이 들어간다. append()
// 4. 내가 입력한 값은 지워진다. $('input').val('')
// 5. 역할 바꿔서 채팅방에서 써보도록 구현(라디오 박스 활용)(jquery radio check)


// 1. submit : 새로고침 되는 것을 막아주는 함수(from 함수에만 적용됨)
// input 등 버튼 타입들은 form 태그로 감싸줘야 활용 가능
// from에 감싸준 것만으로도 이 안에 있는 모든 input 타입은 클릭,엔터 효과 발생
// submit 함수에는 event.preventDefault(); 같이 따라와야 한다.
$('#input-form').on('submit', function(event){
  
  event.preventDefault();
  
  // 체크한 값 가져오기 (:checked)
  const checkedValue = $('input[name=me]:checked').val();

  // 하나의 함수를 짤 때마다 확인해서 에러 유무 확인하기
  // alert('checkedValue');
  // return;

  // 입력한 값을 가져와서 변수에 저장($('input').val())
  const message = $('#text-input').val();

  // 기존꺼와 뭐가 다른지 유무 확인
  // 차이점 확인 : other - mine // 홍길동 - 아들
  // <div class="chat-message other">
  //     <section><i class="fa fa-user"></i></section>
  //     <span>아들</span>
  //     <div>굿모닝!!!! 입니다!</div>
  //     </div>

  // 삼항 연산자 기법 활용 작성
  const role = checkedValue === '엄마' ? 'mine' : 'other';
  const name = checkedValue === '엄마' ? '홍길동' : '아들';
  
      // 템플릿 리터럴(Template literals) 문법
      // 바뀔 메세지 전체 스타일을 그대로 가져와야 하기에 활용
      // 메세지가 어디에 들어가는지를 검사해서 해당 태그 자체를 복사, 변수에 저장
      // 바뀔 위치에 태그 변경 : ${message}
      // 바뀔 데이터에 문법(${message})을 표기하려면 전체를 "" 가 아닌 `` 로 감싸줘야 한다.
      // 중간에 표시된 "" 들은 '' 로 변경
      // 마지막은 ; 마무리
      const html = 
      `<div class='chat-message ${role}'>
         <section><i class='fa fa-user'></i></section>
         <span>${name}</span>
         <div>${message}</div>
         </div>`; 
      
      // 바뀔 데이터가 들어가야할 위치는 현재 표기된 데이터 하단이므로
      // 마지막으로 표기된 .message-group 태그의 last()
      // .message-group 태그의 last() 아래에 append() 활용해서 아래로 입력
      $('.message-box > .message-group').last().append(html);

      // 채팅창에 입력된 내용은 삭제 : .val('')
      $('#text-input').val('');

      // 현재 화면에서 글이 아래로 내려가게 되면 자동으로 스크롤이 내려가도록 설정
      // 검사를 해보면 scroll 설정이 어디에 설정되어 있는지를 확인해서 해당 태그를 선택해서 설정
      $('.message-box').scrollTop(999999999);
})