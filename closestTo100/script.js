'use strict';
const input_number1 = prompt('Input Your First Number');
const input_number2 = prompt('Input Your Second Number');

const function_check_closest = function (first, second) {
  let value_check = prompt('Input the value to check with eg 100');
  switch (true) {
    case value_check - first < value_check - second:
      console.log(
        `${first} is the one closer to ${value_check} as compared to ${second}`
      );
      break;
    case value_check - first > value_check - second:
      console.log(
        `${second} is the one closer to ${value_check} as compated to ${first}`
      );
      break;
    default:
      console.log(`${first} and ${second} are equal`);
  }
};
function_check_closest(input_number1, input_number2);
