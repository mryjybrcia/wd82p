//Javascript Basic Data Types
// 1. Numbers
/* - Integers (e.g 10, 400, -5)
   - Decimals - Floating points numbers (e.g 12.5, 56.777484)
   - Doubles
   **/
let age = 28;
let myAge = parseInt("27");
let tempInFahrenheit = parseFloat("89.7");
let tempInCelsius = 38.5;

let firstNumber = 10;
let secondNumber = 5;
let thirdNumber = parseInt("5");

console.log(6 + 9); //addition
console.log(20 - 15); //substraction
console.log(3 * 7); //multiplication
console.log(10 / 5); //division
console.log(5 ** 2); //exponent
console.log(8 % 3); //remainder / modulo
console.log((5 % 9) * 10);

console.log((secondNumber % 9) * firstNumber);

let year = 2023;
// increment
year++;
// decrement ( -- )
// year = year + 1;

// assignment (=)
let x = 3;
let y = 4;
x = x * y;

console.log(x);

console.log(year);

// comparison ( == ) ( > greater) (< less than) - comparison datatypes
let a = 5;
let b = 2;

console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
// console.log(secondNumber + thirdNumber);
// console.log(typeof age);
// console.log(typeof tempInCelsius);
// console.log(typeof myAge);
// console.log(typeof age);
// console.log(typeof tempInFahrenheit);

// 2. Strings
let string = "This is a string";
// let single = "Single quotes";
let double = "Double quotes";
let backtick = `Backticks`;

const name = "MJ";
const greeting = `Hello, ${name}`;

const one = "Hello";
const two = " how are you?";
const joined = `${one},${two}`;

const newline = `One day askgdasjhdgahjgdsdhsd`;

console.log(string);
console.log(double);
console.log(backtick);

console.log("The value of double: " + backtick);
console.log(greeting);
console.log(joined);
console.log(newline);

// 3. Boolean
// true or false
// 0 = falsy
// 1 = truthy

console.log(typeof 0);
