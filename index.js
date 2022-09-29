"use strict";

console.clear();

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
