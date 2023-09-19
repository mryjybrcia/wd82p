// organizing javascript

// const fruits = ["apple", "orange", "banana"];
// const person = {
//   name: "Carlo",
//   age: 28,
// };

// 1. Plain old Javascript Objects
const myObject = {
  property: "Value!",
  otherProperty: 77,
  "Obnoxious Property": function () {},
};
// 2. Object constructors
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const playerThree = new Player("Steve", "Y");
const playerFour = new Player("John", "Y");

console.log(playerThree);

// 3. Factory Functions
function personFactory(name, marker) {
  return { name, marker };
}
const playerFive = personFactory("Jeff", "A");
console.log(playerFive);

// example 2
function pokemonFactory(name, level) {
  let health = level * 2;

  const getLevel = () => level;
  const getName = () => name;

  const die = () => console.log(`${name} has reached zero hp. I'm dead!`);

  const damage = (x) => {
    health -= x;

    if (health <= 0) die();
  };

  const attack = (enemy) => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }

    if (level >= enemy.getLevel()) {
      enemy.damage(5);
      console.log(`${name} has damaged ${enemy.getName()}.`);
    }
  };

  return { attack, damage, getLevel, getName };
}

const ashPlayer = pokemonFactory("Pikachu", 10);
const computerPlayer = pokemonFactory("Snorlax", 5);

ashPlayer.attack(computerPlayer);
computerPlayer.attack(ashPlayer);
ashPlayer.attack(computerPlayer);

// 4. Module Pattern
// 5. Classes
// 6. ES6 Modules
