## Function Declarations
___
-   A Function that is bound to an identifier or a name  ==  it has a label.

In this case it is `calculateTax`

```javascript
function calculateTax(cost) {
  const taxRate = .23;
  return cost * taxRate;
}
let costOfCar = 30000;

console.log(calculateTax(costOfCar));
```
