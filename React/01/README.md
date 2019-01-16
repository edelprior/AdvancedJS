# React

## _The Fundamentals_

- A JS library that builds a UI made by Facebook
- Facebook, Instagram, Netflix, WhatsApp etc.

#### React has _reactive_ updates. This means when the state of a component changes, the UI is automatically changed to reflect this.

```javascript
const person = {
  name: "John",
  age: 25
};
console.log(person.age);

person.name = "Mark";
```

#### The dot operator allows you to go inside `person` and access it's properties.

#### Also can do `person.` on any of it's properties.

`console.log(person.name);`

## _2. User defined objects_

##### Own Property = a property defined directly on an object.

##### Inherited Property = A property defined by an object's prototype object.

```javascript
const person = { name: "John", age: 25 };
const person2 = person;

person2.name = "Mark";
console.log(person);
console.log(person2);
```

```javascript
const person = {
  name: "John",
  age: 25
};
console.log(person.name);

person.name = "Mark";
console.log(person.name);
```

# _Notes_

- JS fundamental datatype is the 'object' even arrays
- JS objects are == containers that can store data and functions
- They're an unordered collections
- They're dynamic == can be added and deleted
  anything not declared in JS is automatically an object
  and even though they're defined as different datatypes, they behave like OBJECTS
- The whole thing in the object is a property. Inside the property is a name and value

# 3._The literal way to create Objects_

```javascript
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
```

```javascript
let book = {
  title: "JS",
  subTitle: "The Good Parts",
  author: {
    firstname: "Douglas",
    lastname: "Crockford"
  }
};
console.log(book.author.firstname); // Douglas
```

### _Creating objects with 'NEW'_

```javascript
let person1 = new Object(); // avoid
let person2 = {}; // better way to make a new object
```

# 4. _Querying and Setting Properties_

## Setting properties programmatically

```javascript

let person = {
  name: 'Douglas Adams',
  address1: '2 The close',
  address2: '4 the Glens',
  address3: '2 fake street',
};

for(let i = 1; i &lt; 4; i++) {
  console.log(person['address' + i]);
}

let address = {};

for(let i = 1; i &lt; 5; i++){
  address['Flat' + ' ' + i + ' - ' + 'B'] = 0;
}
console.log(address);

```

### Error Handling

```javascript
const name = "abcdefg";

console.log(name.lengt);
// silent failure as this won't throw an error
// will just say undefined
```

```javascript
const person = {
  name: "John",
  age: 25
};
console.log(`Person's weekly salary is ${person.salary / 52}`);

// Person's weekly salary is NaN
// undefined/52 == NaN
// How do we stop this from happening?
```

```javascript
const person = {
  name: "John",
  age: 25,
  salary: 104000
};
if (!person.salary) {
  console.log(`Person's weekly salary is ${person.salary / 52}`);
}
```

# _Objects as associative Arrays_

#### Substitute for Map

```javascript
let userStatus = {
  N00123: false,
  N00124: false,
  N00125: false,
  N00126: false,
  N00127: true
};

for (let user in userStatus) {
  console.log(user + "logged in: " + userStatus[user]);
}
```

# _Side Note_

### `'use strict';`

#### Throws errors for things that are allowed in JS but are seen as poor programming prcatices
