console.clear();

// 문제 : 매번 다르게 행동하는 함수(v2)를 만들어주세요.

// var hello = function(mode) { } 와 아래는 같은 뜻
function hello(mode) {
    var msg = "안녕하세요.";
    
    if ( mode == "일본어" ) {
        msg = "곤니찌와";
    }
    else if ( mode == "영어" ) {
        msg = "헬로";
    }
    
    console.log(msg);
}

// "한국어" => 함수에게 넘기는 부가적인 정보, 인자
hello("한국어");
// 출력 => 안녕하세요.

hello("일본어");
// 출력 => 곤니짜와

hello("영어");
// 출력 => 헬로