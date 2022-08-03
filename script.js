// 문제 : 실행되는 출력문에는 참 그렇지 않으면 거짓 이라고 적어주세요.
// 조건 : 넘버링을 해주세요. EX : 참2, 참3, 거짓2, 거짓3 ...

console.clear();

if ( true ) {
  console.log("참");
}

if ( false ) {
  console.log("거짓");
}

var a = 10;

// `==` => 같다.
if ( a == 10 ) {
  console.log("참2");
}

// `!=` => 같지 않다.
if ( a != 10 ) {
  console.log("거짓2");
}

if ( a > 10 ) {
  console.log("거짓3");
}

if ( a >= 10 ) {
  console.log("참3");
}

var b = 10;

if ( a == b ) {
  console.log("참4");
}

var c = a != b;

if ( c ) {
  console.log("거짓4");
}

if ( c == false ) {
  console.log("참5");
}

// `!` => 반전
if ( !c ) {
  console.log("참6");
}

// `!` => 반전
if ( !(!c) ) {
  console.log("거짓5");
}

var d = true;

if ( c != d ) {
  console.log("참7");
}

if ( c && d ) {
  console.log("거짓6");
}

if ( c || d ) {
  console.log("참8");
}

if ( c == false && d ) {
  console.log("참9");
}

if ( c || c ) {
  console.log("거짓7");
}

if ( false || false ) {
  console.log("거짓8");
}

if ( 1 == 1 && 2 == 2 && 3 == 3 && 4 == 5 ) {
  console.log("거짓9");
}

if ( 1 == 1 && 2 == 2 && 3 == 3 && 4 == 5 || true ) {
  console.log("참10");
}