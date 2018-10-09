// const password = document.getElementById("pw");
//
//
//
// password.addEventListener('keyup', function (evt) {
//     if (this.value.length > 10) {
//         this.style.color = 'green';
//
//     }
//     else {
//         this.style.color = 'red';
//     }
//
//
// });
//
//
//
//
//






//function checkPasswordLength()  {
//    let password = document.getElementById('password');
//    let goodColor = "#66cc66";
//    let badColor = "#ff6666";
//    let okayColor = "#ffa500";
//
//
//    if(password.length > 6) {
//    password.style.backgroundColor = badColor;
//
//    }
//
//    else if (password.length>7 && password.length<10) {
//    password.style.backgroundColor = okayColor;
//
//    }
//
//    else {
//    password.style.backgroundColor = goodColor;
//
//    }
//}

//
// function hypotenuse(a, b) {
//   function square(x){
//     return x * x;
//   }
//   return Math.sqrt(square(a) + square(b));
//   }
//   console.log(hypotenuse(4,8));


  const hypotenuse = (a,b) => {
  const square = x => x * x;
  return Math.sqrt(square(a) + square(b));
}
  console.log(hypotenuse(4,9));
console.log("BITCH GET TO WORK");

    //
    // const hypotenuse = (a,b) => {const square = (x) => x * x; return ((a*a) + (b*b));}
    // console.log(hypotenuse(4,9));
