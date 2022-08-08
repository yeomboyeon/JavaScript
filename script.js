// 함수는 자판기이다.
// 함수에 입력값(동전과 음료수 버튼 번호)를 넣으면 반환값(음료수) 를 얻을 수 있다.
// typeof 함수는 인자로 입력받은 값의 타입을 반환(리턴)한다.

console.clear();

let a = 1 > 1;
let typeOfA = typeof(a);
console.log("typeOfA : " + typeOfA); // boolean

let b = 1 == 1;
let typeOfB = typeof(b);
console.log("typeOfB : " + typeOfB); // boolean

let c = 1 + 1;
let typeOfC = typeof(c);
console.log("typeOfC : " + typeOfC); // number

let d = "1 + 1";
let typeOfD = typeof(d);
console.log("typeOfD : " + typeOfD); // string