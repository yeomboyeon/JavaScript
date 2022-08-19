// 카카오톡 채팅방 만들기 

// 1. 입력 후 전송 버튼을 누르면(엔터를 치면) 이벤트 추가(jquery enter event 구글링)(event.keycode === 13)
// 2. 내가 입력한 값을 가져온다 $('input').val()
// 3. 맨 아래로 입력한 값이 들어간다. append()
// 4. 내가 입력한 값은 지워진다. $('input').val('')
// 5. 역할 바꿔서 채팅방에서 써보도록 구현(라디오 박스 활용)

// 1. 
$('#input-form').on('submit', function(event){
    // submit의 새로고침 되는 것을 막아주는 함수
    event.preventDefault();
  
    // 여기부터 구현

    $(function() {
        // 전송 버튼을 누르면 입력한 값이 출력된다.
        $('.btn-submit').click(function() {
            $('#text-input').addClass($('.message-group').eq(1).append($('input').val()));
            $('#text-input').removeClass($('input').val(''));
        });
      
        $(document).ready(function(){
            $("#text-input").keydown(function(key){
                if(key.keyCode==13){ //키의 코드가 13번일 경우 (13번은 엔터키)   
                }
            });
        });
    }); 
})