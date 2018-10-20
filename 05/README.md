# Iterators
## ``forEach()``
## ``Every()``
## ``Some()``
## ``Map()``
## ``Filter()``
## ``Reduce()``
* * *

* * *

# _1. For Each Loops_

## `forEach()`

#### Before Refactoring

```javascript
const students = ['Arthur', 'Cillian', 'Evan'];

function arrayProcessor(element, i, arr){
   console.log(`index is $(i)`);
   console.log(element.toUpperCase());
   console.log(arr);
 }
 students.forEach(arrayProcessor);
```

#### Refactored x 1

```javascript
 const arrayProcessor = (element) => console.log(element.toUpperCase());

 students.forEach(arrayProcessor);
```

#### Refactored x 2

```javascript
// technically element above is student, smarter to rename 'element' as student
 students.forEach((student) => console.log(student.toUpperCase()));
```

### Task 05_01

#### Before Refactoring

```javascript
 const bookList = ['Thinking in JS', 'JS Patterns', 'JS The Good Parts', 'ES6 & Beyond'];

 function speech(book) {
 console.log(`I need to read ${book}`);
 }
 bookList.forEach(speech);
```

#### Refactored x 1

```javascript
 const speech = (book) => console.log(`I need to read ${book}`)
 bookList.forEach(speech)
```

#### Refactored x 2

```javascript
 bookList.forEach((book) => console.log(`I need to read ${book}`))
```

* * *

* * *

# _2. Every Loops_

## `Every()`

#### Similar to `forEach()`

##### Without using `forEvery()`

```javascript
const marks = [40, 50, 50, 60];

let allPass = true;
for(let i = 0; i < marks.length; i++){
  if(marks[i] < 40) {
    allPass = false;
    break;
  }
}
console.log(allPass ? 'Everyone Passed' : 'Someone failed');
//Ternary operator
```

##### Introducing  `Every()`

```javascript
marks.every(function()
 let allPass = true;
 for(let i = 0; i < marks.length; i++){
   if(marks[i]<40) {
    allPass = false;
     break;
  }
})
 console.log(allPass ? 'Everyone Passed' : 'Someone failed');
```

#### Refactored

```javascript
 const marks = [40, 50, 50, 60];
 const allPass = marks.every(mark => mark >= 40);
 console.log(allPass ? 'Everyone Passed' : 'Someone failed');
```

### Task 05_02

#### Use `every()` to check if all the elements in an array are divisible by 5.

```javascript
const nums = [5, 10, 15 ,30];
const nums2 = [6, 10, 15, 30];

const div5 = num => num % 5 === 0 ;

console.log(nums.every(div5));
console.log(nums2.every(div5));
```

### Differences between == and ===

```javascript
console.log(1 == '1'); // true
console.log(1 === 1); // true ( safter to use this one)
```

* * *

* * *

# _3. Some Loops_

## `some()`

##### Checks an array and will return true if some of the elements pass the test.

```javascript
const marks = [20, 30, 37, 45];
const passed = num => num >= 40;

console.log(marks.some(passed));
console.log(passed(40));

// returns true because some of the students passed
// the checker
```

### Task 05_03

```javascript
const names = ['Andrew', 'Mortimor', 'Alexandria'];
const names2 = ['Jo', 'Jill', 'Alex'];
const check = name => name.length > 5;
console.log(names.every(check));

const long = s => s.length > 5;

console.log(names.some(long));
console.log(names2.some(long));
```

* * *

* * *

# _4. Map Loops_

## `map()`

#### Mapping creates another array without harming the Original one

-   converting to HTML is very common
-   starts building through JS a webapp /data comes in and gets mapped into the html elements

##### Example 1

```javascript
const prices = [200, 200, 126, 100];

const vat = .23;

const vatofPrices = prices.map(calcVat);
// sends the data in prices to calcvat and returns them
console.log(vatofPrices);

function calcVat(price) {
const vat = .23;
return price * vat;
}
```

##### Example 2

```javascript
const names = ['Andrew', 'Aaron', 'Adam'];

const makeList = text => `<li> ${text} </li>`;

const list = names.map(makeList);

console.log(list);
```

### Task 05_04

```javascript
const flavours = ['chocolate', 'red velvet', 'custard', 'jam', 'lemon'];

const capitalize = flavours => flavours.toUpperCase();

const updated = flavours.map(capitalize);
console.log(updated);

const flavours = ['chocolate', 'red velvet', 'custard', 'jam', 'lemon'];

const capitalize = flavours.map(flavourElement => flavourElement[0].toUpperCase() + flavourElement.slice(1));
console.log(capitalize);
```

* * *

* * *

# _5. Filter Loops_

## `filter()`

### Task 05_05

```javascript
 const posNeg = [1, -1, -2, 3, 5, -7];
 const isPositive = n => n > -1;

 const positivenums = posNeg.filter(isPositive);
 console.log(positivenums);
```

* * *

* * *

# _6. Reduce Loops_

## `reduce()`

#### Only function so far that takes two params

#### Takes an Accumulator and a key value

#### Total in a shopping cart for example

### Task 05_06

```javascript
const prices = [100, 200, 300]
const totalPrice = 0

const reducedValue = prices.reduce((totalPrice, value) => totalPrice + value)

console.log(reducedValue)
```
