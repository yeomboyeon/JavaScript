"use strict";

console.clear();

/** map()
 * 배열의 요소들의 값을 변경해서 새로운 배열로 활용
 * 반복 처리 가능
 */

function test_02() {
  const user = [
    {
      id: 1,
      name: "철수",
      ticket: 0,
    },
    {
      id: 2,
      name: "영희",
      ticket: 3,
    },
    {
      id: 3,
      name: "미아",
      ticket: 12,
    },
    {
      id: 4,
      name: "길동",
      ticket: 5,
    },
  ];
  const newUser = user.map((value, index) => {
    if (value.ticket < 5) {
      value.ticket += 3;
    }
    return value;
  });
  console.log(newUser);
}
test_02();
/**
 * (4) [{…}, {…}, {…}, {…}]
0: {id: 1, name: '철수', ticket: 3} >> 값 증가
1: {id: 2, name: '영희', ticket: 6} >> 값 증가
2: {id: 3, name: '미아', ticket: 12} >> 변동없음
3: {id: 4, name: '길동', ticket: 5} >> 변동없음
length: 4
 */
