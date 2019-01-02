// Advanced JS Module
// Edel Prior
// Using nodemon in the terminal as a live server and repersentation of JS
// October 2018 Year 4
// ***********************************************************************
// ****************** PART ONE :: FUNCTION DECLERATION ****************
// ***********************************************************************


// Don't forget JS/ in front of running tag when in nodemon i.e nodemon js/index.js

// A function decleration is a function that is bound to an identifier or a name // it has a label.

function calculateTax(cost) {
  const taxRate = .23;
  return cost * taxRate;
}

let costOfCar = 30000;

console.log(calculateTax(costOfCar));
