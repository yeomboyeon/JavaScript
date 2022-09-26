"use strict";

console.clear();

// 가장 긴 문자열 찾아 출력

function solution(s) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    //   for (let x = 0; x < s.length; x++) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];

console.log(solution(str));

// ======================
// 회문 문자열 찾기
// Math.floor() 소수점 이하 버림(홀수 일때 적용)
// 소문자던 대문자던 바꾸고 검색하기

function solution(str) {
  let answer = "YES";
  str = str.toLowerCase();
  let len = str.lenght;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    //   for (let i = 0; i < len.length; i++) {
    if (str[i] !== str[len - i - 1]) {
      return "NO";
    }
  }
  return answer;
}
let str = "gooG";
console.log(solution(str));

// ====================
// 문자열 압축

// 숫자 관련 대표 함수들
// itsNaN // NaN 값 체크할 때 활용
// isSafeInteger // 정수인지 아닌지 활용
// parseInt // 문자를 정수로 바꾸기(소수점 제거됨)
// 소수점도 가져갈려면 Number 활용
// 소수점에 문자까지 있을때 숫자만 가져갈려면 parseFloat 활용
// toFixed // 반올림
// toString // 숫자를 문자로
// Math.round
// Math.floor
// Math.ceil
// Math.abs
// Math.max
// Math.min

// 숫자만 추출
// 정규식
/**  / 사이에
모든 숫자를 매칭하는 [0-9]에
부정을 뜻하는 ^ 를 붙여
[^0-9] 를하면 모든 숫자를 제외한 문자만을 매칭하고
발생할 모든 패턴에 대한 전체 검색을 뜻하는 플래그인 g를 붙여 만듭니다.

 */
let Num = "g0en2T0s8eSoft";
let Num1 = /[^0-9]/g;
let result = Num.replace(Num1, "");
let answer = parseInt(result); // 문자열 숫자로 바꾸기

console.log(answer);

// =====
function sol() {
  let num = "";
  let 답변 = "";
  for (let i = 0; i < num.length; i++) {
    const number = parseInt(num[i]);
    if (isNaN(number) === false) {
      답변 += number;
    }
  }
  return parseInt(답변);
}
console.log(sol());

// 뒤집어진 숫자

// 홀수인지 짝수인지 알려면 어떻게 해야 하나?
// if (num % 2 === 0) = 짝수
// if (num % 2 === 1) = 홀수
