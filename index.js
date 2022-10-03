"use strict";

console.clear();

// filter()
// 매개변수로 아이디값을 받아 해당되는 아이디값만 삭제
// 4번 미아 티켓 제거
function test_04(paramId) {
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
  const newUser = user.filter((value, index) => {
    return value.id !== paramId; // 같지 않은 값만 담기
  });
  console.log(newUser);
}
test_04(4);
/** 4번은 같기 때문에 담기질 않아서 삭제됨
 * (3) [{…}, {…}, {…}]
0: {id: 1, name: '철수', ticket: 0}
1: {id: 2, name: '영희', ticket: 3}
2: {id: 3, name: '미아', ticket: 12}
length: 3
 */
