"use strict";

console.clear();

// 자릿수의 합
// 문자열로 바꿔서 반복문 돌리기
// 입력예제 : 7
// 입력예제 : 128 460 603 40 521 137 123
// 출력예제 : 137

console.clear();

function solution() {
  const arr = [128, 460, 603, 40, 521, 137, 123];

  let max = Number.MIN_SAFE_INTEGER;

  let maxIndex = 0;

  arr.forEach((value, index) => {
    const str = value.toString(); // 숫자를 문자로 바꾸기

    let sum = 0;

    for (let x of str) {
      // for of 객체랑 문자 반복문 돌릴 때 자주쓰임
      // console.log(x);
      sum += Number(x);
    }

    if (sum >= max) {
      max = sum;
      maxIndex = index;
    }
  });
  return arr[maxIndex];
}

console.log(solution());
