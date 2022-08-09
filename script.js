 'use strict'; // 자바 스크립트 시작전 맨 위에 선언을 해주고 시작(변수를 선언해주지 않고도 a= 1; 이라고 하면 선언되버리는 걸 방지해주는)

console.clear();

class User {
	constructor(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
}

	get age() { // this.age를 불러오는 함수
		return this._age;
	}

	set age(value) { // = age; 값을 불러오는 함수
		// this.age = value; // 이렇게 쓰면 무한 반복이 되버림.
		// this._age = value; // _ 붙여주어야 인식은 되나, -1 그대로 읽힘.
		this._age = value < 0 ? 0 : value; //간단 심플한 작성 방법
	}
}

const user1 = new User('Steve', 'Job', -1);  // 스티브, 직업, 나이

console.log(user1.age); // 나이를 불러오면 원래는 -1이 되나, 0으로 출력됨.

// .과 _로 작성해도 인식이 되는 이유는, get, set를 활용했기 때문에 가능한 코드임.
