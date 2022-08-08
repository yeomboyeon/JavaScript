// 문제 : 4칙연산 함수를 만들고 실행해주세요.
// 각각 다른 연산 함수를 입력하기 위해서는 함수명,변수명이 달라야 한다.
console.clear();

function mode1(a, b){
    let num1 = a + b;
    return num1;
};

function mode2(a, b){
    let num2 = a - b;
    return num2;
};

function mode3(a, b){
    let num3 = a * b;
    return num3;
};

function mode4(a, b){
    let num4 = a / b;
    return num4;
};

let num1 = mode1(1, 2);
console.log(num1);

let num2 = mode2(3, 2);
console.log(num2);

let num3 = mode3(1, 2);
console.log(num3);

let num4 = mode4(1, 2);
console.log(num4);