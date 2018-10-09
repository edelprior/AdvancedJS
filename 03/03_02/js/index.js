// Advanced JS Module
// Edel Prior
// Using nodemon in the terminal as a live server and repersentation of JS
// October 2018 Year 4
// ***********************************************************************
// ****************** PART ONE :: FUNCTION EXPRESSIONS ****************
// ***********************************************************************


// Don't forget JS/ in front of running tag when in nodemon i.e nodemon js/index.js

// A function expression is the same as a decleration except it can be anonymous and still work
// often stored as a var and end with a [;]
// doesn't actually have the word 'function' at the beginning

const calculateTax = function (cost) {
  const taxRate = .23;
  return cost * taxRate;
};

let costOfCar = 40000;

console.log(calculateTax(costOfCar));
