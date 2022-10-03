"use strict";

console.clear();

// findIndex()
// 배열의 요소 중 값을 찾아서 그 값만 변경
// 매개변수로 아이디값을 받아 해당되는 아이디값만 티켓을 하나 제거
// 3번 미아 티켓 제거
function test_03(paramId) {
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
  const findIndex = user.findIndex((value, index) => {
    return value.id === paramId;
  });
  console.log(findIndex); // 2
  console.log(user[findIndex]); // {id: 3, name: '미아', ticket: 12}

  user[findIndex].ticket = user[findIndex].ticket - 1; // 티켓 1 감소

  console.log(user);
  /**(4) [{…}, {…}, {…}, {…}]
  0: {id: 1, name: '철수', ticket: 0}
  1: {id: 2, name: '영희', ticket: 3}
  2: {id: 3, name: '미아', ticket: 11} >> 티켓 1 감소
  3: {id: 4, name: '길동', ticket: 5}
  length: 4
   */
}
test_03(3); // id가 3인 인원의 값을 변경
// test_03(4); // id가 4인 인원의 값을 변경시켜준다.
/**
 * (4) [{…}, {…}, {…}, {…}]
0: {id: 1, name: '철수', ticket: 3} >> 값 증가
1: {id: 2, name: '영희', ticket: 6} >> 값 증가
2: {id: 3, name: '미아', ticket: 12} >> 변동없음
3: {id: 4, name: '길동', ticket: 5} >> 변동없음
length: 4
 */
