console.clear();
// 매개변수는 자판기(함수)에서 데이터가 들어오는 구멍이다.
var plus = function(num1, num2) {
    // 지역변수 sum, 전역변수 sum과는 아무 관련이 없다. 동명이인이다.
    var sum = num1 + num2;
    
    // return 구문은 함수(자판기)에서 데이터가 나가는 구멍이다.
    // 함수의 호출구문은 `return` 이후의 값으로 변신한다.
    // 즉 plus(5, 5) 가 실행하면 10으로 변신한다.
    // 참고로 데이터는 오직 딱 1개만 리턴될 수 있다.
    return sum;
};

// 전역변수 sum
var sum;

sum = plus(2, 4); // plus(2, 4) 가 실행되면 6으로 변신한다. 결국 sum에는 6이 들어간다.
console.log("sum : " + sum);

sum = plus(10, 20); // plus(10, 20) 가 실행되면 30으로 변신한다. 결국 sum에는 30이 들어간다.
console.log("sum : " + sum);