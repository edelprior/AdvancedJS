// Advanced JS
// Edel Prior
// November Week 10
// ~ this ~


// * * *
// Intro
// * * *

// Every object in JS has a this value
// the value may be different depending on the scope

// * * *
// Browser v Node
// * * *

// in the browser = window = top level this value
// console.log(this); // in a browser
// in Node.js = global = top level this value
// console.log(this); // in nodemon // {}

// THIS always refers to the 'owner' of the function being executed, or it is the object of the function

console.log("* * *");
console.log("Invocation Context");
console.log("* * *");

// the context in which the function in run as in, the stuff the function can acccess
// get to the Invocation by using THIS and call(), apply(), bind()
//
// console.log("* * *");
// console.log("call()");
// console.log("* * *");
// function printName() {
//   console.log(this.name);
// }
// const p1 = { name: 'John' };
// const p2 = { name: 'Mary' };
// //printName runs the function and is in that Context
//
// printName.call(p1);
// printName.call(p2);
// in the brackets after the call, call a different THIS value, inside a different environment
/// attaches call to p1
// second one points to a different context // the mary const 'p2'

// global.name = 'Barry';
//
// function printName() {
//   console.log(this.name);
// }
// const p1 = { name: 'John' };
// const p2 = { name: 'Mary' };
// //printName runs the function and is in that Context
//
// printName.call(p1);
// printName.call(p2);
// printName();
// in the brackets after
// in the above instance 'this' changes from p1, p2, and global
//
// console.log("* * *");
// console.log("apply()");
// console.log("* * *");

// uses [] rather than just , ,
//
// function printSalary(currency, delimiter) {
//   let sal = this.weeklyWage * this.weeksWorked;
//   console.log(`${currency}${sal}${delimiter}`);
// }
// let person = {
//   weeklyWage: 300,
//   weeksWorked: 48
// };
//
// printSalary('$', '.');
// printSalary.call(person);

// console.log("* * *");
// console.log("bind()");
// console.log("* * *");

// used in react
// kinda clumsy in will soon be eradicated

// global.weeklyWage = 100;
// global.weeksWorked = 2;
//
// function printSalary(currency, delimiter) {
//   let sal = this.weeklyWage * this.weeksWorked;
//   console.log(`${currency}${sal}${delimiter}`);
// }
// let person = {
//   weeklyWage: 300,
//   weeksWorked: 48
// };
//
// printSalary('$', '.');
//
// const printSalaryForPerson = printSalary.bind(person, '$', '!!!');
//
// printSalaryForPerson();
// printSalaryForPerson();


console.log("* * * * * *");
console.log("Activity");
console.log("* * * * * *");
console.log("apply()");
console.log("");
//
// function getAge(comment) {
// let today = new Date();
// let birthDate = new Date(this.dob);
// let age = today.getFullYear() - birthDate.getFullYear();
// let m = today.getMonth() - birthDate.getMonth();
// if (m < 0 || ( m === 0 && today.getDate() < birthDate.getDate()))
// {
//   age--;
// }
// //return age;
// console.log(`${age} ${""}${comment}`);
// }
//
// const date = { dob : "03 / 22 / 1997" };
//
// // const age = getAge.call(date);
// // console.log(age);
//
//  const age = getAge.apply(date, ["years old"]);
//  console.log(age);


console.log("bind()");
console.log("");

function getAge() {
let today = new Date();
let birthDate = new Date(this.dob);
let age = today.getFullYear() - birthDate.getFullYear();
let m = today.getMonth() - birthDate.getMonth();
if (m < 0 || ( m === 0 && today.getDate() < birthDate.getDate()))
{
  age--;
}
return age;
console.log(`${age}`);
}

const date = { dob : "03 / 22 / 1997" };

// const age = getAge.call(date);
// console.log(age);

 const age = getAge.apply(date, ["years old"]);
 console.log(age);


 console.log("* * * * * *");
 console.log("Arrow Function");
 console.log("* * * * * *");
 console.log("this and = >");
 console.log("");

 // => don't have their own 
