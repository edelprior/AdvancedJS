// Advanced JS Module
// Edel Prior
// Using nodemon in the terminal as a live server and repersentation of JS
// October 2018 Year 4
// ***********************************************************************
// ****************** PART ONE :: VARIABLES ******************************
// ***********************************************************************


// Don't forget JS/ in front of running tag when in nodemon i.e nodemon js/index.js

console.log("******");
console.log("SCOPE 1");

let z = 1;

if (z === 1) {
  var x = 2;

  console.log(x);
  // expected output = 2
}

  console.log(x);
  // expected output = 2

// ***********************************************************************

console.log("******");
console.log("SCOPE 2");

let z = 1;

if (z === 1) {
  let x = 2;

  console.log(x);
  // expected output = 2
}
console.log(x);
// x is not defined within the scope = ReferenceError = x is not defined

// ***********************************************************************

console.log("******");
console.log("SCOPE 3");

let x = 1;

if(x === 1) {
  let x = 2;

  console.log(x);
  // expected output = 2
}
console.log(x);
// expected output = 1

// ***********************************************************************

console.log("******");
console.log("SCOPE 4");
const x = 10;

x = 20;
// output = Assignment to a constant variable

// ***********************************************************************

console.log("******");
console.log("SCOPE 5");

const x = [20,30,60];
x[0] = 1;
console.log(x);
//expected output : [1,30,60]
// okay as the var(x) isn't being reassigned

// ***********************************************************************

console.log("******");
console.log("SCOPE 6");

const x = [20,30,60];
x = [1, 3, 5];
console.log(x);
expected output : Assignment alreaady assigned

// ***********************************************************************

console.log("******");
console.log("Assignment Operators");
let x = 4;
x += 2;
console.log(x);
// x equals 6
let y = 4
y -= 2;
console.log(y);
// y equals 2
let z = 4;
z *= 2;
console.log(z);
// z equals 8

// ***********************************************************************

console.log("******");
console.log("String Interpolation");
let myName = 'Edel';
let myCity = 'Dublin';
console.log(`My name is ${myName}. My favourite city is ${myCity}.`);
