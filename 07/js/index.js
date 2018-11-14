//Advanced JS Module
//Edel Prior
//Using nodemon in the terminal as a live server and repersentation of JS
//October 2018 Year 4
//Week 9
//Don't forget JS/ in front of running tag when in nodemon i.e nodemon js/index.js


//***********************************************************************
//**************** Objects **********************************************
//***********************************************************************

// ACCESSING PROPERITY VALUE PAIRS INSIDE OBJECTS

console.log('* * * * * * *');
console.log('O B J E C T S');
console.log('* * * * * * *');
//*********************
// Smelly Code
//
// let person = { name: 'Andrew', age: 47 };
// let person1 = { name: 'John', age: 22 };
// let person2 = { name: 'Sally', age: 34 };
// let person3 = { name: 'James', age: 16 };

// make an object class, to create many people
// a blueprint so they have the same properties but different values.
// First Year Java stuff
// JS is NOT Object Oriented
// now has dummy classes
// anti-pattern
// cumbersome, error prone, impossible to scale

//___________________________________________________
//___________________________________________________

// INTRODUCING OOP INTO JS (even though it doesn't exist)

// Object = Fundamental Datatype in JS
// The first Class (10 Years ago)
// Factory pattern

// function createNewPerson(name,age) {
//   let obj = {};
//   obj.name = name;
//   obj.age = age;
//   return obj;
// }
// let otherPerson = createNewPerson('Moe', 26);
// console.log(otherPerson.name);

// then, keyword 'new' gets added into JS
// most common way, should be familiar

// function Person(name,age) {
//   this.name = name;
//   this.age = age;
// }
// let person1 = new Person ('Zara', 26);
// console.log(person1.name);

// no methods or no inheritance, as of yet
// introduces Prototypes
// is a pointer that automaticalally is in every Object
// [[Prototype]]
// __proto__
// never directly change it such as person1.__proto__


console.log('- - - - - - - - - -');
console.log('P R O T O T Y P E S');
console.log('- - - - - - - - - -');

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.hi = function() {
//     console.log(`Hi my name is ${this.name}`);
//   };
// }
// Interesting bit
// it is a way of functions being able to be inherited

// ---------------------------------------------------------
// Class - ical inheritance
// blueprint that creates actual objects
// Person.prototype.hello = function() {
//   console.log(`Hello my name is ${this.name}`);
// }
//
// let person1 = new Person('Marianna', 40);
// person1.hello();
// person1.hi();

// Prototype Chain
// function() - Person - Object

// Reptile.prototype = Object.create(Animal.prototype);
// Draws the arrow from Reptile to its parent Animal

//---------------------------------------------------------
// Prototypal inheritance
// doesn't use constructor functions and doesn't use the 'new' keyword
// // build an object and the rest are copies of itself
//
// const Animal = {
//   name: 'animal';
//   constructor: function(name) {
//   this.name = name;
//   },
//   print: function() {
//     console.log(`${this.name} is an animal`);
//   }
// };
//
//
// const dog = Object.create(Animal);
// dog.constructor('Lassie');
// dog.print();
//
//
// // inheritance
//
// const Reptile = Object.create(Aniimal);
// Reptile.scales = 'not scaley';
// Reptile.print = function() {
//   console.log(`${this.name} is a reptile and is ${this.scales}.`);
//
// };
//
// const croc = Object.create(Reptile);
// croc.constructor('Snappy');
// croc.scales = 'very scaley';
// croc.print();


// Classes in ES6 ---------------------------------------------------------
//----------------------------------------------------------------------
//used alot in react


class Animal {
  constructor(name) {
    this.name = name;
  }
  print() {
    console.log(`${this.name} is an animal`);
  }
}
const dog = new Animal('Lassie');
dog.print();

class Reptile extends Animal {
  constructor(name, scales) {
    super(name);
    this.scales = scales;
  }
  print() {
    console.log(`${this.name} is a reptile and is ${this.scales}`);
  }
}

const croc = new Reptile('Snappy', 'very scaley');
croc.print();

console.log(croc instanceof Reptile);
console.log(croc instanceof Animal);

//------------------------------------

class User {
  constructor() {
    this.name = 'Anne';
    this.password = '234';
    this.permissions = 'ReadWrite';
  }
}
const user1 = new User();
console.log(user1.name);
