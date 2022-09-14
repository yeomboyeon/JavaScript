"use strict";

console.clear();

/** 1. 최고, 최저값 찾기 (Sperad operator 이용)
 * Math.max(), Math.min()  */
const array1 = [1, 2, 3, 4, 5];
const c = [...array1]; // 배열 문자열로 벗끼기

console.log(...array1); // 1 2 3 4 5

console.log(c); // (5) [1, 2, 3, 4, 5]

const d = {
  name: "보연",
};
const f = { ...d }; // 객체 감싸기

console.log(f); // {name: '보연'}

const names = "보연";

console.log(...names); // 보 연

function solutionMax(params) {
  return Math.max(...params);
}

console.log("최고값 :", solutionMax(array1)); // 최고값 : 5

function solutionMin(params) {
  return Math.min(...params);
}
console.log("최저값 :", solutionMin(array1)); // 최저값 : 1

// 배열 합치기
// (기존 버전)
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr = arr1.concat(arr2);
// console.log(arr); // (6) [1, 2, 3, 4, 5, 6]

// (ES6 버전)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr = [...arr1, ...arr2];
console.log(arr); // (6) [1, 2, 3, 4, 5, 6]
