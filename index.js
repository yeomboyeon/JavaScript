"use strict";

console.clear();
/**concat(), ...변수명 : 배열 값 합치기
 */

const arr = [1, 2, 3, 4, 5];
const arr1 = [6, 7, 8, 9, 10];

const arr2 = [...arr, ...arr1];

const arr3 = arr.concat(arr1);

console.log(arr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
