"use strict";

console.clear();

/*
2.  Destructring 문법을 사용해서 아래 객체와 배열을 분해해주세요
    배열에서는 인자와 값이 1:1 매칭이 되어야만 undefined가 안된다.
    값이 객체냐, 배열이냐에 따라 변수에 기호를 동일하게 써줘야 한다.
    객체 기호 : { }
    배열 기호 : [ ]
*/

const { name, age, local } = { name: "홍길동", age: 40 };
// 3번째 인자를 받아줄 객체 값을 넣어주면 indefined 가 바뀜

console.log(name, age, local); // 홍길동 40 undefined

const { name: myName, age: myAge } = { name: "홍길동", age: 40 };
// 변수명을 바로 넣어줌

console.log(myName, myAge); // 홍길동 40

const [one, two] = [
  //const [{name, age}}, {name, age}] = [
  // 배열 안에서 객체를 또 나눌 수 있다.(실무에서 잘 하지는 않음.)
  { name: "영수", age: 20 },
  { name: "영수", age: 20 },
];

console.log(one, two);
// { name: "영수", age: 20 }, { name: "영수", age: 20 },

const [one1, two2] = [1, 2];

console.log(one1, two2); // 1 2

const [one2, , for4] = [1, 2, 3]; // 쉼표만 찍고 요소 무시하기

console.log(one2, for4); // 1 3

const [name1, name2, ...rest] = [
  "yeom",
  "boyeon",
  "ho",
  "bong",
  "jung",
  "love you",
]; // ...rest 나머지 요소 가져오기

console.log(name1); // yeom
console.log(name2); // boyeon
console.log(...rest); // "ho", "bong", "jung", "love you"
