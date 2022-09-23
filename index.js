"use strict";

console.clear();

// reduce() 초기값 지정해줘야 에러 발생하지 않는다.
// sum 값을 지정해줌으로써 arr[0] = null으로 값이 설정된다.
// 적용방법 : array.reduce(function(누적값, 현재값, 인덱스, 배열){ return 누적값 + 현재값 }, 0);
//           array.reduce((누적값, 현재값, 인덱스, 배열) => return 결과, 초기값);

const arrResult = arr.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);
console.log(`arr 배열값 합계는 ? ${arrResult}`);
