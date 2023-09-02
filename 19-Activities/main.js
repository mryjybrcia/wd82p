// EXERCISE 1 //
// Declare a variable called 'balance' and assign it a starting balance of 1000.
// Create variables 'transaction1', 'transaction2', and 'transaction3' to represent three transactions.
// Update the 'balance' variable after each transaction:
// - 'transaction1': Add 500 to 'balance'.
// - 'transaction2': Deduct 200 from 'balance'.
// - 'transaction3': Deduct 1000 from 'balance'.

// Your code here
// let balance = 1000;

// let transaction1 = 500;
// let transaction2 = 200;
// let transaction3 = 1000;

// console.log(balance + transaction1);
// console.log(balance - transaction2);
// console.log(balance - transaction3);

// // Log the final 'balance' after all three transactions.
// let finalBalance = balance + transaction1 - transaction2 - transaction3;
// console.log(finalBalance);

// Answer
let balance = 1000;

let transaction1 = 500;
let transaction2 = 200;
let transaction3 = 1000;

// let transaction1, transaction2, transaction3;
transaction1 = balance + 500;
balance = transaction1;

transaction2 = balance - 200;
balance = transaction2;

transaction3 = balance - 1000;
balance = transaction3;

console.log(balance);

// EXERCISE 2 //
// Create three variables 'testScore1', 'testScore2', and 'testScore3' and assign them different test scores as numbers.
// Calculate the average test score of these three scores and store it in a variable called 'averageScore'.
// Round the 'averageScore' to the nearest integer using Math.round().

// Your code here
// let testScore1 = 78;
// let testScore2 = 84;
// let testScore3 = 92;
// let averageScore = testScore1 + testScore2 + testScore3 / 3;

const testScore1 = 92;
const testScore2 = 85.6;
const testScore3 = 72.5;
const averageScore = Math.round((testScore1 + testScore2 + testScore3) / 3);
// Log the 'averageScore' to the console.
console.log(averageScore); //decimal result is 84.66666666666667

// EXERCISE 3 //
// Create a variable called 'temperature' and assign it a temperature value in Celsius.
// Write a conditional statement (if-else) to determine the weather condition based on the temperature:
// - If the temperature is above 30°C, log "It's hot outside!"
// - If the temperature is between 20°C and 30°C (inclusive), log "The weather is pleasant."
// - If the temperature is below 20°C, log "It's a bit chilly."

// Your code here
// const tempInCelsius = parseInt(prompt("How hot is it outside today?"));
// // console.log(typeof tempInCelsius);

// if (tempInCelsius > 30) {
//   console.log("It's hot outside!");
// } else if (tempInCelsius >= 20) {
//   console.log("The weather is pleasant.");
// } else {
//   console.log("It's a bit chilly.");
// }

const temperature = 21;

if (temperature > 30) {
  console.log("It's hot outside!");
} else if (temperature >= 20) {
  console.log("The weather is pleasant.");
} else {
  console.log("It's a bit chilly.");
}

// Answers: Activity

// let balance = 1000;

// let trans1 = 500;
// let trans2 = 200;
// let trans3 = 1000;

// let trans1 , trans2, trans3;
// trans1 = balance + 500;
// balance = trans1;

// trans2 = balance - 200;
// balance = trans2;

// trans3 = balance - 1000;
// balance = trans3;

// console.log(balance);

// const testScore1 = 92;
//const testScore2 = 85.6;
// const testScore3 = 72.5;
//const averageScore = math.round((testScore1 + testScore2 + testScore3) / 3);
//

//const temperature = 21;
//

//if (temperature>30) {
//   console.log("")
// } else if (temperature >= 20) {
//   console.log("The weather is pleasant.")
// } else{
//   console.log("It's a bit chilly.")
// }
