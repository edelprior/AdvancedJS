// Advanced JS Module
// Edel Prior
// Using nodemon in the terminal as a live server and repersentation of JS
// October 2018 Year 4
// ***********************************************************************
// ****************** PART ONE :: FUNCTIONS AS VALUES  *******************
// ***********************************************************************


// Don't forget JS/ in front of running tag when in nodemon i.e nodemon js/index.js

// passing anonymous funcitons into other functions as arguements

setTimeout(function () {
  console.log('5 seconds have elapsed! ');
}, 5000);

// rather than making it anonymous (if it needs to be used again) store it in a var and pass it to the other function i.e. passing a functin int a function.

const notification = function () {
  console.log('Timer has finsihed!');
};
setTimeout(notification, 5000);

// refactored

setTimeout(() => console.log('Timer has finished!'), 5000);
