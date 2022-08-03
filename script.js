// 문제 : 1부터 100까지의 합을 출력해주세요.
// 조건 : while문 사용
// 출력예시
/*
sum : 5050
*/
console.clear();

/*정답 1번 방법*/
// var sum = 0; /*sum 초기값 설정*/
// var start = 1; /*시작하는 초기값 설정*/
// var end = 100; /*끝나는 초기값 설정*/

// var i = start; /*i를 시작하는 초기값 변수로 설정*/

// while (i <= end) {  /*i가 end 보다 작거나 같다면*/
//     sum = sum + i;  /*sum+i 반복*/
//     i++; /*i 1씩 증가*/
// }
// console.log("sum : " + sum); /*반복문 바깥에서 출력되어야 합이 출력*/

/*정답 2번 방법*/
var sum = 0; /*sum 초기값 설정*/
let i = 1;

while (i <= 100) {  /*i가 end 보다 작거나 같다면*/
    sum = sum + i;  /*sum+i 반복*/
    i++; /*i 1씩 증가*/
}
console.log("sum : " + sum); /*반복문 바깥에서 출력되어야 합이 출력*/