//Advanced JS Module
//Edel Prior
//Using nodemon in the terminal as a live server and repersentation of JS
//October 2018 Year 4
//Week 9
//Don't forget JS/ in front of running tag when in nodemon i.e nodemon js/index.js

console.log('* * * * * * * * * *');
console.log('P R O T O T Y P E S');
console.log('* * * * * * * * * *');

console.log("- - - - - ");
console.log("E S 6");

class Car {
  constructor(make, model, price) {
    this.make = make;
    this.model = model;
    this.price = price;
  }
  print() {
    console.log(`The Car's
    manufacturer is ${this.make}. The model is ${this.model} and the price of the car is ${this.price}`);
  }
}

const Nissan = new Car('Almera');
Nissan.print();

const Honda = new Car('Civic');
Honda.print();

class ElectricCar extends Car {
  constructor(range, autonomous) {
    super(make, model, price);
    this.range = range;
    this.autonomous = autonomous;

  }
  print() {
    console.log(`test`);
  }
}
