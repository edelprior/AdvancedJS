//Advanced JS Module
//Edel Prior
//Using nodemon in the terminal as a live server and repersentation of JS
//November 2018 Year 4
//Week 9

// -----------------------------
// #1 : ES6 Classes Activity CAR
// -----------------------------

console.log("- - - - - - - - - - - - - -  ");
console.log("Object Oriented Programming");
console.log("- - - - - - - - - - - - - -  ");
//
// class Car {
//   constructor(make, model, price) {
//     this.make = make;
//     this.model = model;
//     this.price = price;
//   }
//   print() {
//     console.log(`The Car's
//     manufacturer is ${this.make}. The model is ${this.model}
//     and the price of the car is ${this.price}`);
//   }
// }
//
// // won't pick up the super variables (make, model, price)
//
//
// const Nissan = new Car("Almera");
// Nissan.print();
//
// const Honda = new Car("Civic");
// Honda.print();
//
// class ElectricCar extends Car {
//   constructor(range, autonomous) {
//     super(make, model, price);
//     this.range = range;
//     this.autonomous = autonomous;
//   }
//   print() {
//     console.log(`The Car's
//     manufacturer is ${this.make}. The model is ${
//       this.model
//     } and the price of the car is ${this.price}.
//     The car is a n electric and it's range is ${this.range} miles. It is ${
//       this.autonomous
//     } to say that the car
//     is automatic.`);
//   }
//
//
// const prius = new ElectricCar("35,000", "true");
// prius.print();
//
// console.log(prius instanceof ElectricCar);
// console.log(prius instanceof Car);

// ----------------------------------
// #2 :Classical Classes Activity CAR
// ----------------------------------

//
// function Car(name) {
//   this.name = name;
//   // this.model = model;
//   // this.price = price;
// }
//
// Car.prototype.print = function() {
//   console.log(`The Car's manufacturer is ${this.name}`);
// };
//
// const Nissan = new Car("Almera");
// Nissan.print();
//
// const Honda = new Car("Civic");
// Honda.print();
//
// function ElectricCar(range, autonomous) {
//   Car.call(this, name);
//   this.range = range;
//   this.autonomous = autonomous;
// }
//
// ElectricCar.prototype = Object.create(Car.prototype);
// ElectricCar.prototype.constructor = ElectricCar;
//
// ElectricCar.prototype.print = function() {
//   console.log(`The Car's
//     manufacturer is ${this.name}. The model is
//     ${this.model} and the price of the car is ${this.price}.
//     The car is a n electric and it's range is ${this.range} miles.
//     It is ${this.autonomous} to say that the car is automatic.`);
// };
//
// const prius = new ElectricCar("35,000", "true");
// prius.print();
//
// console.log(prius instanceof ElectricCar);
// console.log(prius instanceof Car);

// -----------------------------------
// #3 :Prototypal Classes Activity CAR
// -----------------------------------
//
// const Car = {
//   constructor: function(name) {
//     this.name = name;
//   },
//   print: function() {
//     console.log(`${this.name} is a car`);
//   }
// };
//
// const nissan = Object.create(Car);
// nissan.constructor("Almera");
// nissan.print();
//
// const ElectricCar = Object.create(Car);
// ElectricCar.print = function() {
//   console.log(`${this.name} is an electric car and its range is ${this.range}`);
// };
//
// const prius = Object.create(ElectricCar);
// prius.constructor("Betty");
// //prius.range("35,000");
// prius.print();
