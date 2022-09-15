"use strict";

console.clear();

// 배열 추가, 삭제
const a = [1, 2, 3, 4];

a.push(5); // 배열 맨뒤에 추가
console.log(a); // 1,2,3,4,5

a.unshift(0); // 배열 맨앞에 추가
console.log(a); // 0,1,2,3,4,5

a.pop(); // 배열 맨뒤 삭제
console.log(a); // 0,1,2,3,4

a.shift(); // 배열 맨앞 삭제
console.log(a); // 1,2,3,4

// delete 삭제
const man = {
  name: "보연",
  age: 20,
};

delete man.name;

console.log(man); // {age: 20}

// Template literals(템플릿 리터럴)
const myName = "보연";
console.log(`나의 이름은 ${myName}입니다`); // 나의 이름은 보연입니다

// default value: 사전에 정의된 값
// 디폴트 값 적용 순서 : 좌측에서 우측으로 적용

function add(a, b = 10) {
  // b = 10으로 사전에 값을 정의함
  return a + b;
}

console.log(add(1));
// 첫번째 인자 a를 1로 주었고, 뒤에는 값이 없기에
// b는 그대로 10 해서 결과는 1 + 10 = 11 나옴

const [one, two, five = 50] = [10, 20, 70];
console.log(five); // 70 우측에 할당된 값이 있다면 사전 정의된 값은 무시
