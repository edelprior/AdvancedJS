
# Function Expressions
___
* A function expression is the same as a declaration BUT it can be anonymous and still work
*  often stored as a var and end with a `` ;``
*  doesn't actually have the word 'function' at the beginning

```javascript
 const calculateTax = function (cost) {
  const taxRate = .23;
  return cost * taxRate;
};

let costOfCar = 40000;

console.log(calculateTax(costOfCar));
```
