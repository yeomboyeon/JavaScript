// 문제 : 99단 2단~9단을 출력해주세요.
// 조건 : 숫자를 2 이상 사용할 수 없다.
// 조건 : while문 사용
// 출력예시
/*
2 * 1 = 8
...
9 * 9 = 81
*/
console.clear();

var dan;
var limit = 9;
dan = 2;

// 수정가능지역 시작

while (dan <= limit) {
    /*2중 반복문 활용*/
    console.log("=== " + dan + "단 ===");

    var i = 1;

    while (i <= limit) {
        console.log(dan + " * " + i + " = " + dan * i);
        i++;
    }
    dan++;
}

// 수정가능지역 끝
