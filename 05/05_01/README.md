# Iterators
___


// Don't forget JS/ in front of running tag when in nodemon i.e nodemon js/index.js


// ***********************************************************************
// ********************FOR EACH LOOPS *********************************
// ***********************************************************************

// const students = ['Arthur', 'Cillian', 'Evan'];

// function arrayProcessor(element, i, arr){
//   console.log(`index is $(i)`);
//   console.log(element.toUpperCase());
// console.log(arr);
// }
//
// students.forEach(arrayProcessor);


// refactored
//
// const arrayProcessor = (element) => console.log(element.toUpperCase());
//
// students.forEach(arrayProcessor);
//
// // refactored again
//
//
// // technically element above is student, smarter to rename
// students.forEach((student) => console.log(student.toUpperCase()));

// TASK ONE

// const bookList = ['Thinking in JS', 'JS Patterns', 'JS The Good Parts', 'ES6 & Beyond'];

// function speech(book) {
//   console.log(`I need to read ${book}`);
// }
// bookList.forEach(speech);

// refactored once

// const speech = (book) => console.log(`I need to read ${book}`);
// bookList.forEach(speech);

// refactored second time
//
// bookList.forEach((book) => console.log(`I need to read ${book}`));

// ***********************************************************************
// ********************EVERY LOOPS ************************************
// ***********************************************************************


// similar to for each'

// first exercise the 'old' way

// const marks = [40, 50, 50, 60];
//
// let allPass = true;
// for(let i = 0; i < marks.length; i++){
//   if(marks[i]<40) {
//     allPass = false;
//     break;
//   }
// }
// console.log(allPass ? 'Everyone Passed' : 'Someone failed');
// Ternary operator


// marks.every(function())
// let allPass = true;
// for(let i = 0; i < marks.length; i++){
//   if(marks[i]<40) {
//     allPass = false;
//     break;
//   }
// }
// console.log(allPass ? 'Everyone Passed' : 'Someone failed');
// refactored
//
// const marks = [40, 50, 50, 60];
// const allPass = marks.every(mark => mark >= 40);
// console.log(allPass ? 'Everyone Passed' : 'Someone failed');

// TASK TWO
// Use every() to check if all the elements in an array are divisible by 5.

// const nums = [5, 10, 15 ,30];
// const nums2 = [6, 10, 15, 30];

// ATTEMPT

// for (let i = 0; i < nums.length; i++){
//   if (nums[i] % 5) {
//     allDivisible = true;
//     break;
//     console.log(allDivisible ? 'They were all multiples of 5': 'They didnt divide nicely');
//
//     nums.every(function()
//      allDivisible = true;
//     for (let i = 0; i < nums.length; i++){
//       if (nums[i] % 5) {
//         allDivisible = true;
//         break;
// }
// }
//
//      console.log(allDivisible ? 'They were all multiples of 5': 'They didnt divide nicely');

// solution

// const div5 = num => num % 5 === 0 ;
// console.log(nums.every(div5));
// console.log(nums2.every(div5));
//
//

/// Differences between == and ===

//console.log(1 == '1'); // true
//console.log(1 === 1); // true ( safter to use this one)
// ***********************************************************************
// ********************SOME () LOOPS ************************************
// ***********************************************************************


// some()
// Checks an array and will return true if some of the elements pass the test

// const marks = [20, 30, 37, 45];
// const passed = num => num >= 40;
// console.log(marks.some(passed));

// returns true because some of the students passed
// the checker
//console.log(passed(40));

// TASK 3
//
// const names3 = ['Andrew', 'Mortimor', 'Alexandria'];
// const check = name => name.length > 5;
// console.log(names3.every(check));
//
// const names = ['Andrew', 'Mortimor', 'Alexandria'];
// const names2 = ['Jo', 'Jill', 'Alex'];
//
// const long = s => s.length > 5;
//
// console.log(names.some(long));
// console.log(names2.some(long));

// ***********************************************************************
// ******************** MAP() LOOPS **************************************
// ***********************************************************************

// // example
// const prices = [200, 200, 126, 100];
//
// const vat = .23;
//
// const vatofPrices = prices.map(calcVat);
// // sends the data in prices to calcvat and returns them
// console.log(vatofPrices);
//
// function calcVat(price) {
// const vat = .23;
// return price* vat;
// }

// example 2
//
// const names = ['Andrew', 'Aaron', 'Adam'];
//
// const makeList = text => `<li>${text}</li>`;
//
// const list = names.map(makeList);
//
// console.log(list);

// Mapping creates another array without harming the original one
// converting to HTML is very common
// starts building through JS a webapp
// data comes in and gets mapped into the html elements

// TASK 4

// const flavours = ['chocolate', 'red velvet', 'custard', 'jam', 'lemon'];
//
// const capitalize = flavours => flavours.toUpperCase();
//
// const updated = flavours.map(capitalize);
//
// console.log(updated);
//
//
// const flavours = ['chocolate', 'red velvet', 'custard', 'jam', 'lemon'];
//
// const capitalize = flavours.map(flavourElement => flavourElement[0].toUpperCase() + flavourElement.slice(1));
//
// console.log(capitalize);


// ***********************************************************************
// ******************** FILTER LOOPS **************************************
// ***********************************************************************


// TASK 5

// const posNeg = [1, -1, -2, 3, 5, -7];
//
// const isPositive = n => n > -1;
//
// const positivenums = posNeg.filter(isPositive);
//
// console.log(positivenums);

// ***********************************************************************
// ******************** REDUCE () LOOPS **********************************
// ***********************************************************************

// TASK 6

// only function so far that takes two params
// takes an accumulator and a key value

const prices = [100, 200, 300];

const totalPrice = 0;
const reducedValue = prices.reduce((totalPrice, value) => totalPrice + value);
console.log(reducedValue);

// total in a shopping cart for example
// used all the time
