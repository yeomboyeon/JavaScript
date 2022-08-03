// 문제 : 할인 대상인지 아닌지 출력해주세요.
// 조건 : 나이가 19세 이하이거나 60세 이상이면 할인 대상입니다.
// 조건 : 출력예시 처럼 출력되어야 합니다.
// 조건 : `구현시작` 부분만 수정 할 수 있습니다.

console.clear();
var age = 60; // 이 값을 바꿔가면서 실행해보세요.

console.log("당신의 나이는 " + age + "살 입니다.");

// 구현시작
// 출력예시 => 할인대상입니다. 또는 할인 대상이 아닙니다.

if (age <= 19) {
  console.log("할인 대상입니다.");
}
if (age >= 60) {
  console.log("할인 대상입니다.");
}
if (age > 19) {
  if (age > 60) {
    console.log("할인 대상이 아닙니다.");
  }
}
