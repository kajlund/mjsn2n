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

// String Concatenation
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

let email = 'luka@networknirvana.co.uk';
console.log(email.lastIndexOf('n'));  // => 17
console.log(email.slice(0, 4));       // start, stop => luka
console.log(email.substr(0, 4));      // start, count => luka
console.log(email.replace('n', 'x')); // replace first n with x unless regex => luka@xetworknirvana.co.uk