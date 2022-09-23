"use strict";

console.clear();

// splice(start[, deleteCount[, item1[, item2[, ...]]]])
// - start : 음수이면 끝에서부터 세기
// - deleteCount : 배열에서 제거할 요소의 수
// - item : 배열에 추가할 요소(지정하지 않으면 splice() 요소 제거만 수행)

const fruits = ["수박", "바나나", "망고", "파인애플"];
// fruits.splice(2, 1);
// console.log(fruits); // ['수박', '바나나', '파인애플']
// fruits.splice(2, 2);
// console.log(fruits); // ['수박', '바나나']
const removed = fruits.splice(0, 3); // 삭제된 배열 값을 변수로 저장
console.log(removed); // ['수박', '바나나', '망고']
console.log(fruits); // ['파인애플']
