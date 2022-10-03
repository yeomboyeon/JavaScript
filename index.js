"use strict";

console.clear();

// 큰 수 출력
// n(1<=n<=100) 정수를 입력받고 자신의 바로 앞 수보다 큰 수만 출력
// 첫번째 수는 무조건 출력
// 입력 예제 6
// 7 3 9 5 6 12
// 출력 예제 7 9 6 12

function sol() {
  const arr = [7, 3, 9, 5, 6, 12];
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      newArr.push(arr[0]); // 무조건 맨 앞 출력
    } else {
      if (arr[i] < arr[i + 1]) {
        // 앞에 값이랑 비교해서 값보다 크면 넣기
        newArr.push(arr[i + 1]);
      }
    }
  }
  return newArr;
}
console.log(sol());
