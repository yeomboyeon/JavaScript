"use strict";

console.clear();

/** 등수 구하기 알고리즘
 * 첫 줄에 n(3<=n<=1000) 입력
 * 두 번째 줄에 국어점수 의미하는 n개의 정수 입력
 * 같은 점수가 입력될 경우 높은 등수로 동일 처리
 * 가장 높은 점수가 92점인데 92점이 3명 존재하면
 * 1등이 3명이고 그 다음 학생은 4등이 된다.
 * 입력 예제 : 5
 * 87 89 92 100 76
 * 출력 예제 : 1
 * 4 3 2 1 5
 */

function solution(arr) {
  const len = arr.length; // 배열을 len 변수에 저장
  const answer = Array.from({ length: len }, () => 1); //  배열 값 모두에게 1 등으로 저장 [1, 1, 1, 1, 1];
  // const answer = [1, 1, 1, 1, 1];
  // 입력 배열이 많게 되면 Array.from을 활용해서 작성하면 됨

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[i]) answer[i]++;
      // 2중 for문 돌면서 인덱스 i 값보다 인덱스 j 값이 크다면 answer 인덱스 i 값을 1씩 늘리기
      // arr[j] = arr[i] 라면 answer[i] 은 증가되지 않음, 그래야만 동일 점수가 동일 등수가 됨
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];

console.log(`등수 구하기 값은? ${solution(arr)}`);
