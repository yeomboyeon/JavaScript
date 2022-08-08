console.clear();

// 문제 : 매번 다르게 행동하는 함수를 만들어주세요.
let mode = 0;

function hello() {
    mode++;
    
    if(mode == 1){
        console.log("안녕하세요");
    } else if (mode == 2){
        console.log("곤니찌와");
    } else {
        console.log("헬로");
    }
}

hello();
// 출력 => 안녕하세요.

hello();
// 출력 => 곤니짜와

hello();
// 출력 => 헬로