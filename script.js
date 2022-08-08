// 문제 : 매개변수 2개짜리 printDan 함수를 구현해주세요.

console.clear();

function printDan(dan, limit) {
    
    console.log("==" + dan + "단 출력 ==")
    
    for(let i = 1; i <= limit; i++){
        console.log(dan + " * " + i + " = " + dan * i);
    }
}

printDan(3, 3);
// 출력
/*
== 3단 출력 ==
3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
*/

printDan(2, 1);
// 출력
/*
== 2단 출력 ==
2 * 1 = 2
*/