// Advanced JS Module
// Edel Prior
// Using nodemon in the terminal as a live server and repersentation of JS
// October 2018 Year 4
// ***********************************************************************
// ****************** PART TWO :: CONTROL FLOW & HOISTING ****************
// ***********************************************************************


// Don't forget JS/ in front of running tag when in nodemon i.e nodemon js/index.js


// ***********************************************************************

console.log("******");
console.log("EXAMPLE 1");

//
 let isNightTime = true;
// if (isNightTime) {
//   console.log('Turn on the lights!');
// }else {
//   console.log('Turn off the lights!');
// }

// ============================

isNightTime ? console.log('Turn on the Lights!') : console.log('Turn off the lights!');

// ***********************************************************************

console.log("*******");
console.log("EXAMPLE 2");

let moonPhase = 'full';
switch(moonPhase){
  case 'full':
  console.log('Howl');
  break;
  case 'mostly full':
  console.log('Arms and legs are getting hairier');
  break;
  case 'mostly new':
  console.log("back on two feet");
  break;
  default:
  console.log("Invalid moon phase");
  break;
}

// ***********************************************************************

console.log("*****");
console.log("EXAMPLE 3");

let a;
console.log(a);
// undefined

let b = null;
console.log(b);
// null

console.log(c);
// not defined
