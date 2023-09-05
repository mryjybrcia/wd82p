// Create an array of cars
const cars = ["Toyota", "Nisan", "Lexus", "Peugeot", "Honda"];

console.log(cars[2]);

// for correcting index
cars[1] = "Nissan";
console.log(cars);

// to know lengths
let size = cars.length;
console.log(size);

//removing the last element on array
cars.pop();
console.log(cars);

//removing first element of the array
cars.shift();
console.log(cars);

//removing a specific argument in array
cars.splice(0, 1);
console.log(cars);

//adding an item in array
cars.push("Geely");
console.log(cars);

//adding an array on the beginning
cars.unshift("Hyundai");
console.log(cars);

// adding an items in an index
cars.splice(1, 0, "Porsche");
console.log(cars);

//combining two arrays
const motorcycles = ["Honda", "Yamaha", "BMW", "Ducati"];
const motors = cars.concat(motorcycles);

console.log(motors);

//Array Looping
const fruits = ["apple", "banana", "orange"];

// for ( initialization, condition, iteration)
for (let i = 0; i < fruits.length; i++) {
  // count 6 times, with values of counter 0 through to 5
  console.log(fruits);
}

// easy way
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// one liner loop
fruits.forEach((fruit) => console.log(fruit));

// easiest loop
for (let fruit of fruits) {
  console.log(fruit);
}

//infinite loop
// while (true) {
//   console.log("Hello, World!");
// }
