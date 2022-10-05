// 문자열 짝수일 때 가운데 두 글자, 홀수일 때 한 글자
function sol_1(s) {
  let answer = ""; // 빈값 저장

  if (s.length % 2 == 0) {
    // 짝수 2로 나누었을 때 나머지가 0 이면
    answer = s[s.length / 2 - 1] + s[s.length / 2]; //
  } else {
    // 홀수
    answer = s[Math.floor(s.length / 2)]; // 소수점 버리기
  }
  return answer;
}
let s = "abcde";
console.log(sol_1(s));
