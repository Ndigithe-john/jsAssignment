// const numbers = function () {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };
// numbers();
// const car_names = [
//   "Ford",
//   "Bentley",
//   "Porsche",
//   "Mercedes",
//   "BMW",
//   "Dodge",
//   "Chevrolet",
//   "Audi",
//   "Cadillac",
// ];

// for (let i = 0; i < car_names.length; i++) {
//   console.log(`${car_names[i]} is the current car in my list`);
// }

// const number = Math.trunc(Math.random() * 10) + 1;
// const user_input = prompt("Input a number Between 1 and 10");
// if (Number(user_input) === number) {
//   alert("Good Work");
//   console.log(number);
// } else {
//   alert("Not Matched");
//   console.log(number);
// }

const input_number1 = prompt("Input Your First Number");
const input_number2 = prompt("Input Your Second Number");

const function_check_closest = function (first, second) {
  let value_check = prompt("Input the value to check with eg 100");
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

const currentDate = new Date();
console.log(currentDate);
