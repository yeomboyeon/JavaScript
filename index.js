$('#addClassBtn').click(function(){ // addClass 로 추가
    $('#target').addClass('testClass');
});

$('#removeClassBtn').click(function(){ // removeClass 로 삭제
    $('#target').removeClass('testClass');
});

$('#hasClassBtn').click(function(){ // hasClass 로 해당 태그 찾기
    if($('#target').hasClass('testClass') == true) {
    alert('textClass 있음');
    } else if ($('#target').hasClass('testClass') == false) {
    alert('textClass 없음');
    }
});

$('#toggleClassBtn').click(function(){ // 지정한 요소에 클래스 추가
    $('#target').toggleClass('testClass');
});