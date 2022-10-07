"use strict";

console.clear();

// 자연수 n,m 직사각형 형태의 * 만들기
function sol_1(a, b) {
  const c = a * b;

  let 답변 = "\n";

  for (let i = 1; i <= c; i++) {
    답변 += "*";
    if (i % a === 0) {
      답변 += "\n";
    }
  }
  return 답변;
}

console.log(sol_1(5, 3));
/**"
*****
*****
*****
" */
