"use strict";
const number = Math.trunc(Math.random() * 10) + 1;
const user_input = prompt("Input a number Between 1 and 10");
if (Number(user_input) === number) {
  alert("Good Work");
  console.log(number);
} else {
  alert("Not Matched");
  console.log(number);
}
