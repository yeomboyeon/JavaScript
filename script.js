// 문제 : age의 값에 따라서 성년인지 미성년인지 출력해주세요
console.clear();

let age;

console.log("== 정답 v1 ==");

age = 20;

if ( age >= 20 ) {
  console.log("성년입니다.");
}

if ( age < 20 ) {
  console.log("미성년입니다.");
}

console.log("== 정답 v2 ==");

age = 15;

if ( age >= 20 ) {
  console.log("성년입니다.");
}
else {
  console.log("미성년입니다.");
}

console.log("== 정답 v3 ==");

age = 215;

if ( age < 20 ) {
  console.log("미성년입니다.");
}
else {
  console.log("성년입니다.");
}