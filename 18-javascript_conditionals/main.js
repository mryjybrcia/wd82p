// console.log(2 > 1);
// console.log(2 == 1);
// console.log(2 != 1);

// let userLoggedIn = true;

// console.log(userLoggedIn);

// console.log("Z" > "A");
// console.log("Glow" > "Glee");
// console.log("bee" > "be");
// console.log("2" > 1);
// console.log("01" == 1);

// console.log(true == 1); // truthy

// console.log("0" === 0);
// console.log("1" >= 2);
// let hour = 15;

// if (hour < 12) {
//   console.log("Good morning!");
// } else if (hour < 18) {
//   console.log("Good afternoon!");
// } else {
//   console.log("Good evening!");
// }

// let userLoggedIn = false;

// if (userLoggedIn) {
//   console.log("Redirect to homepage");
// } else {
//   console.log("Redirect to login page");
// }

let grade = parseInt(prompt("What is your grade?"));

if (grade < 75) {
  console.log("Failed! Try again next quarter.");
} else if (grade <= 80) {
  console.log("Pass! Exert more effort.");
} else if (grade <= 85) {
  console.log("Good! Keep it up.");
} else if (grade <= 90) {
  console.log("Very good. A job well done");
} else {
  console.log("Excellent!");
}
