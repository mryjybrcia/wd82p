// Logical Operators (AND - &&, OR - ||, NOT = !)

// expression1 && expression2 && expression3
// expression1 || expression2 || expression3

// let age = 5;

// if (age > 5 || age < 10) {
//   console.log("Kids");
// } else {
//   console.log("Teenager");
// }

// const isAdult = true;
// const hasLicense = false;

// if (isAdult && hasLicense) {
//   console.log("You can drive a car.");
// } else {
//   console.log("You can't drive a car.");
// }

// const isRaining = true;
// const haveUmbrella = true;

// if (isRaining || haveUmbrella) {
//   console.log("You won't get wet.");
// } else {
//   console.log("You might get wet.");
// }

// const yearsOfExperience = 2;
// const hasDegree = true;
// const knowsProgramming = true;
// const hasCertification = false;

// if (
//   (yearsOfExperience >= 3 && hasDegree && knowsProgramming) ||
//   (hasCertification && knowsProgramming)
// ) {
//   console.log("You are qualified");
// } else {
//   console.log("Sorry, you do not meet the eligibility criteria for a job");
// }

// const iceCreamVanOutside = true;
// const houseStatusonFire = false;

// if (!(iceCreamVanOutside || houseStatusonFire)) {
//   console.log("You should leave the house quickly");
// } else {
//   console.log("You should stay inside");
// }

// let grade = 75;

// switch (true) {
//   case grade >= 90:
//     console.log("A");
//     break;
//   case grade >= 80:
//     console.log("B");
//     break;
//   case grade >= 70:
//     console.log("C");
//     break;
//   case grade >= 60:
//     console.log("D");
//     break;
//   default:
//     console.log("f");
//     break;
// }

// const day = "Sunday";

// switch (day) {
//   case "Monday":
//     console.log("Today is Monday!");
//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday!");
//     break;
//   case "Wednesday":
//     console.log("Today is Wednesday!");
//     break;
//   case "Thursday":
//     console.log("Today is Thursday!");
//     break;
//   case "Friday":
//     console.log("Today is Friday!");
//     break;
//   default:
//     console.log("Weekends!");
//     break;
// }

// let age = 18;
// let isEligibiletoVote;

// if (age >= 18) {
//   isEligibiletoVote = true;
// } else {
//   isEligibiletoVote = false;
// }

// console.log(isEligibiletoVote);

// condition ?(if) run this code :(else) run this code instead;
// let age = 17;
// let isEligibiletoVote = age >= 18 ? "You can vote" : "You can't vote";
// console.log(isEligibiletoVote);

//Creating a Function
// function printName(firstName, lastName) {
//   console.log(firstName + " " + lastName);
// }
// Invoking a function
// printName("Carlo", "Dacuyan");
// printName("Juan", "Tamad");

// function averagePrices(x, y) {
//   let sum = x + y;
//   let average = sum - 5;

//   console.log(average);
// }
// averagePrices("30", "20");

// let x = 30;
// let y = 14;

// const add (x) => 30 + 40;

// function hello(name = "Carlo") {
//   console.log(`Hello, ${name}`);
// }

// hello("Carl");
// hello("Juan");
// hello();

// ES6 (EcmaScript)
//Old way
// function add(x, y) {
//   return = x + y;
// }
//Arrow function
// const add = (x, y) => x + y;

// Create a function
// expects 2 parametes which are numbers
// Subtract 2 numbers
// and logs the output

// function addTwoNumbers = (24, 9) => 24 - 9;

// const x = 24;
// const y = 9;

// // let z = x + y;

// // let z = x - y;

// function subtract(x, y) {
//   console.log(x - y);
// }
//  console.log(z);
// const subtract (num1, num2) => num1 - num2;
// console.log(subtract(1,2));
// console.log(subtract(4,2));

// global scope  { invisible curly braces}
// let age = 18;
// let name = "Carlos";

// function print() {
//   //function scope or local scope
//   console.log(name);
// }

// print();

// function add(x, y) {
//   return x + y;
// }
// console.log(add(1, 2));
// console.log(add(5, 5));

// const add =(x, y) => x+y;
// const subtract = (x, y) => x - y;
// console.log(subtract(5, 5));

// const output = 0;

// function add(a, b) {
//   output = a + b;
// }
// add(2, 5);
// add(3, 7);

// console.log(output);

// const add = (a, b) => a + b;

// console.log(add(2, 5));

// function favoriteAnimal(animal) {
//   return animal + " is my favorite animal!";
// }
// console.log(favoriteAnimal("dog"));

// function printName(firstName, lastName) {
//   console.log(firstName + " " + lastName);
// }
// printName("Carlo", "Dacuyan");
// printName("Jose", "Rizal");
// printName("Juan", "Pablo");

// function combinedName(firstName, lastName) {
//   return firstName + " " + lastName;
// }

// console.log(combinedName("Carlo", "Dacuyan"));
// console.log(combinedName("Jose", "Rizal"));
// console.log(combinedName("Juan", "Pablo"));
// first
function add7(x, y) {
  return x + y;
}
console.log(add7(7, 7));

//second
function multiply(x, y) {
  return x * y;
}
console.log(multiply(7, 7));

// third
const str = `capitalize`;
const str2 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str2);

// third
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase(0) + str.slice(1);
}

console.log(capitalizeFirstLetter("capitalize"));

//fourth
function getlastLetter(name) {
  return name.substr(-1);
}
console.log(getlastLetter("Garlic")); //"c"
