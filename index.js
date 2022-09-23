"use strict";

console.clear();

====== replace ======
let str = "BANANA";
let str_1 = arr.replace("A", "#");
console.log(str_1); // B#NANA

====== replaceAll ======
let arr = "BANANA";
let arr1 = arr.replaceAll("A", "#");
console.log(arr1); // B#N#N#

====== replace, /문자열/g, /문자열/gi ======
let arr = "Apple, banana, orange, banana";

let arr1 = arr.replace(/banana/g, "sort");
// 정규식(regular expression) 사용
// 정규식으로 찾으려는 문자열을 // 로 감싸기
// /뒤에 g 입력 (modifier) g = 'global match' 의미함

let arr2 = arr.replace(/Apple/gi, "soju");
// 대소문자 구분없이 문자열 치환
// /g뒤에 i 입력

console.log(arr1); // Apple, sort, orange, sort
console.log(arr2); // soju, banana, orange, banana