"use strict";

console.clear();
// ticket 제일 많이, 적게 가진 인원의 ticket 갯수는?
const user = [
  {
    name: "보연",
    ticket: 38,
  },
  {
    name: "연정",
    ticket: 37,
  },
  {
    name: "세희",
    ticket: 4,
  },
  {
    name: "관우",
    ticket: 2,
  },
];

let maxNumber = Number.MIN_SAFE_INTEGER;
let minNumber = Number.MAX_SAFE_INTEGER;

let ticketMaxNumber = maxNumber;
let ticketMinNumber = minNumber;

for (let k = 0; k < user.length; k++) {
  if (maxNumber < user[k].ticket) {
    maxNumber = user[k].ticket;
    ticketMaxNumber = user[k].ticket;
  }
  if (minNumber > user[k].ticket) {
    minNumber = user[k].ticket;
    ticketMinNumber = user[k].ticket;
  }
}
console.log(ticketMaxNumber); // 38
console.log(ticketMinNumber); // 2
