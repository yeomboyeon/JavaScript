// 문제 : 구구구단 2단~9단을 출력해주세요.
// 조건 : for문 사용
// 출력예시
/*
2 * 1 = 2
...
9 * 9 = 81
*/
console.clear();

var dan;
dan = 2;

// 수정가능지역 시작 
for (var dan = 2; dan <=9; dan++){
    console.log("== " + dan + " 단 ==");
    for ( var i = 1; i <= 9; i++ ) {
    console.log(dan + " * " + i + " = " + dan * i);
    }
}

// 수정가능지역 끝