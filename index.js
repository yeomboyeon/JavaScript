"use strict";

console.clear();

/** map(), Math.max() 활용
 * 각 배열 안에서 최대값 출력하기
 * 입력 예제 : [[4,5,1,3][13,27,18,26][32,35,37,39][1000,1001,857,1]]
 * 출력 예제 : [5,27,39,1001]
 */

const arr = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];

function solutionMax() {
  const newUser = arr.map((value, index) => {
    // 배열에서 바꿀 값을 찾는다.
    return Math.max(...value); // 바꿀 값은 배열에서 가장 큰 값을 찾아서 변수에 저장
  });
  console.log(newUser); // 해당 변수를 출력
  // console.log(Math.max(...value));
}

solutionMax(); //(4) [5, 27, 39, 1001]
