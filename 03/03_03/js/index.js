// Advanced JS Module
// Edel Prior
// Using nodemon in the terminal as a live server and repersentation of JS
// October 2018 Year 4
// ***********************************************************************
// ****************** PART ONE :: ARROW FUNCTIONS ****************
// ***********************************************************************


// Don't forget JS/ in front of running tag when in nodemon i.e nodemon js/index.js

// An arrow function is a function expression just using more efficent syntax
// it is refactored (doesn't change the output)

const calculateTax = (cost) =>  cost * .23;

let costOfCar = 40000;

console.log(calculateTax(costOfCar));

//
// const square  = function(x) {
//   return x * x;
//   };

const square = x => x * x;

//
// const logDateTime = function(){
//   console.log(new Date());
// }

const logDateTime = () => console.log(new Date());
