console.log('Hello World!');

let age = 25;
let year = 2020;
console.log(age, year); // => 25 2020

age = 30;
console.log(age); // => 30

const points = 100;
console.log(points); // => 100
// points = 50; // => Uncaught TypeError: Assignment to constant variable.

var score = 75;
console.log(score); // => 75

// Strings

let message = "Hello World!";
console.log(message); // => Hello World!
console.log(message[0]); // => H

// String concatenation
let firstName = 'Kaj';
let lastName = 'Lund';
let fullName = firstName + ' ' + lastName;
console.log(fullName); // => kaj Lund

// String property length
console.log(fullName.length); // => 8

// String method toUpperCase()
console.log(fullName.toUpperCase()); // => KAJ LUND
let result = fullName.toLowerCase(); // => result = 'kaj lund'
console.log(result); // => 'kaj lund'

let idx = fullName.indexOf('L');
console.log(idx); // => 4
