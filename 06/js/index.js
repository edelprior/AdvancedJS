Advanced JS Module
Edel Prior
Using nodemon in the terminal as a live server and repersentation of JS
October 2018 Year 4
Week 6
Don't forget JS/ in front of running tag when in nodemon i.e nodemon js/index.js


***********************************************************************
**************** Objects **********************************************
***********************************************************************

ACCESSING PROPERITY VALUE PAIRS INSIDE OBJECTS
console.log('******');
console.log('O B J E C T S');


const person = {
  name: 'John',
  age: 25
};
console.log(person.age);

person.name = 'Mark';

the dot operator allows you to go inside person and access it's properties can do person. on any of it's prooperties

console.log(person.name);
console.log('***************************');

////// Funky stuff

console.log('***************************');
const person = {name: 'John', age: 25};
const person2 = person;

person2.name = 'Mark';
console.log(person);
console.log(person2);
console.log('***************************');
object variables are references to the data in memory rather than the data itself
when 'copying' a person to make a new person, its just an object pointing at the same, original person, Mark

console.log('***************************');
const person = {
  name: 'John',
  age: 25
};
console.log(person.name);

person.name = 'Mark';
console.log(person.name);

console.log('***************************');

NOTES
JS fundamental datatype is the 'object'
even arrays
JS objects are == containers that can store data and functions
they're unordered collections
They're dynamic == can be added and deleted
anything not declared in JS is automatically an object
and  even though they're defined as different datatypes, they behave like OBJECTS
whole thing in the object is a property. Inside the property is a name and value

Object literal way to create OBJECTS

let empty = {};
let point = {
  x: 10,
  y: 20
};
let point2 = {
  x: point.x,
  y: point.y
};
console.log(point2.x); // 10

let book = {
  title: 'JS',
  subTitle: 'The Good Parts',
  author: {
    firstname: 'Douglas',
    lastname: 'Crockford'
  }
};
console.log(book.author.firstname); // Douglas

Creating objects with 'NEW'

let person1 = new Object(); // avoid
let person2 = {}; // better way to make a new object


QUERYING AND SETTING PROPERTIES

setting properties programmatically

let person = {
  name: 'Douglas Adams',
  address1: '2 The close',
  address2: '4 the Glens',
  address3: '2 fake street',
};

for(let i = 1; i < 4; i++) {
  console.log(person['address' + i]);
}

let address = {};

for(let i = 1; i < 5; i++){
  address['Flat' + ' ' + i + ' - ' + 'B'] = 0;
}
console.log(address);


const name = 'abcdefg';

console.log(name.lengt);
silent failure as this won't throw an error
will just say undefined


const person = {
  name: 'John',
  age: 25
};
console.log(`Person's weekly salary is ${person.salary/52}`);

Person's weekly salary is NaN
undefined/52 == NaN
How do we stop this from happening?

const person = {
  name: 'John',
  age: 25,
  salary: 104000
};
if (!person.salary) {
  console.log(`Person's weekly salary is ${person.salary/52}`);
}


Objects as associative Arrays ( substitute for Map)
let userStatus = {
  N00123: false,
  N00124: false,
  N00125: false,
  N00126: false,
  N00127: true
}

for (let user in userStatus) {
  console.log(user + 'logged in: ' + userStatus[user]);
}

'use strict';
throws errors for things that are allowed in JS but are seen as poor programming prcatices

APIs
