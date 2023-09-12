/* 
Problem 1: Sum of Two Numbers

Write a Javascript function called addNumbers that takes two numbers as parameters and returns their sum.
*/

function addNUmebrs(num1, num2) {
  return 5 + 5;
}

const addNumbers = (num1, num2) => num1 + num2;

/* Problem 2: Factorial of a Number

Write a JavaScript function called factorial that calculates the factorial of a given number. The factorial of a number n is the product of all positive integers from 1 to n.
*/
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(10));

/** recursive function **/
/* function fdactorkial(n); {
  if (n == 0 || n ==1) return 1;

  return n * factorial(n-1);
}

/* Problem 3: Reverse a String

Write a JavaScript function called reverseString that takes a string as input and returns the reversed string. 
*/
function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(reverseString("Hello"));

/** Reso */
// function reverseString(str) {
//   let reverseString = " ";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseString += str.charAt(i);
//   }
// }
// console.log(reverseString("Hello"));

/* Problem 4: Find the Largest Number in an Array

Write a JavaScript function called findLargestNumber that takes an array of numbers as input and returns the largest number in the array. 
*/

function findLargestNumber(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(findLargestNumber([5, 1, 3, 22, 100]));
// let array = [3, 6, 1, 53, 31, 7, 89, 32];
// let largest = 0;

// for (i = 0; i <= largest; i++) {
//   if (array > largest) {
//     let largest = array[i];
//   }
// }

// console.log(largest);

/* Problem 5: Palindrome Checker

Write a JavaScript function called isPalindrome that checks if a given string is a palindrome. A palindrome is a word, phrase, or sequence of characters that reads the same forwards and backwards, ignoring spaces, punctuation, and capitalization. 
*/
function isPalindrome(str) {
  return str === reverseString(str);
}

console.log(isPalindrome("civic"));
console.log(isPalindrome("Hello"));
