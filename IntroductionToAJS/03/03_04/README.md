
# Functions as Values
___

* Passing Anonymous Functions into other functions as arguements

* rather than making it anonymous (if it needs to be used again) store it in a var and pass it to the other function.
<br/> i.e. passing a function into another function.

## Example 1
#### Before Refactoring
```javascript
setTimeout(function () {
  console.log('5 seconds have elapsed!');
}, 5000);

const notification = function () {
  console.log('Timer has finsihed!');
};

setTimeout(notification, 5000);
```
#### After Refactoring
```javascript
setTimeout(() => console.log('Timer has finished!'), 5000);
```
