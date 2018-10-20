
# Arrow Functions
___

* An Arrow function is a function expression just using more efficent syntax

* It is refactored (doesn't change the output)

## Example 1
#### Before Refactoring
```javascript
 const square  = function(x) {
 return x * x;
 }
```
#### After Refactoring
```javascript
const square = x => x * x
```

## Example 2
#### Before Refactoring
``` javascript
const logDateTime = function(){
   console.log(new Date())
 }
 ```
#### After Refactoring
``` javascript
const logDateTime = () => console.log(new Date())
```
