"use strict";

console.clear();

const arrSort = arr.sort(function (a, b) {
  return a - b;
  // return b - a; (내림차순 정렬)
});
console.log(`오름차순 정렬된 arrSort 값 ? ${arrSort}`);
