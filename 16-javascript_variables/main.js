// var message;
// message = "Hello, World!";

// console.log(message);

// let age = 18; //declaring = assigning
// const birthdate = "05/01/1995"; //declaring = assigning

// console.log(age); // calling
// console.log(birthdate); // calling

// let user = "Carlo",
//   age = 25,
//   message = "Hello";

// console.log(message);

// // Always use different variables for each data. do not use one for all. this is a bad practice

// let box;
// box = "10/18/2001";
// console.log(box); // displays data
// alert(box); // displays data, but via pop-up

// let age = 21;
// const BIRTHDATE = "10/18/2001";

// console.log(age);
// console.log(BIRTHDATE);

/* 1. Add 2 numbers together! (just type console.log(23 + 97) into your html file)*/
console.log(23 + 97);

/*2. Add a sequence of 6 different numbers together.*/
console.log(1, 2, 3, 4, 5, 6);
/* 3. Print the solution to the following equation: (4 + 6 + 9) / 77
 Answer should be approximately 0.24675 */
let equation = (4 + 6 + 9) / 77;
console.log(equation);

/*4. Let’s use variables!
Type this statement at the top of the script tag: let a = 10
In the console console.log(a) should print 10
Try the following in the console: 9 * a
and this: let b = 7 * a (returns undefined *) and then console.log(b)*/
let a = 10;
console.log(a);
console.log(9 * a);

let b = 7 * a;
console.log(b);

/*5. You should be getting the hang of this by now… try this sequence:
Declare a constant variable max with the value 57
Set another variable actual to max - 13
Set another variable percentage to actual / max
If you type percentage in the console and press Enter you should see a value like 0.7719*/
const MAX = 57;
let actualToMax = 13;
let percentage = actualToMax / MAX;

console.log(percentage);

/*6.Take a few minutes to keep playing around with various things in your script tag. Eventually, we will learn how to actually make those numbers and things show up on the webpage, but all of this logic will remain the same, so make sure you’re comfortable with it before moving on.*/
alert(
  "Hello there, fellow earthling! Hit F12, go to 'Console', and check out what I did ^_^"
);
