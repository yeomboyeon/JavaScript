"use strict";

console.clear();

const a = [100, 200, 1, 2, 500, 214];

let maxNumber = Number.MIN_SAFE_INTEGER;
let minNumber = Number.MAX_SAFE_INTEGER;

console.log(maxNumber); // -9007199254740991
console.log(minNumber); // 9007199254740991

// max값이 배열을 돌면서 가장 높은 값이 남고 그 값은 maxNumber 값이 된다.
// min값이 배열을 돌면서 가장 낮은 값이 남고 그 값은 minNumber 값이 된다.
for (let k = 0; k < a.length; k++) {
  if (maxNumber < a[k]) {
    maxNumber = a[k];
  }
  if (minNumber > a[k]) {
    minNumber = a[k];
  }
}

console.log(`최고값은 ? ${maxNumber}`); // 최고값은 ? 500
console.log(`최저값은 ? ${minNumber}`); // 최저값은 ? 1
