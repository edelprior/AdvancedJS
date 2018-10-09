// Advanced JS Module
// Edel Prior
// Using nodemon in the terminal as a live server and repersentation of JS
// October 2018 Year 4
// ***********************************************************************


// Design Tech Problem
// Commonly asked in interviews for Front End Dev jobs


console.log("starting nodemon for Notes on First Exercise");

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0)
  console.log("DesignTech");
  else if (i % 3 === 0)
    console.log("Design");
    else if (i % 5 === 0)
      console.log("Tech");
      else
      console.log(i);

    };


// INTRODUCTION OF TERNARY OR THE CONDITIONAL OPERATOR

// Notes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

// params [ condition ? exprT : exprF]
// condition = something that can be true (truthy) or false (falsy)

// Falsy can also return values of null, NaN, 0, "", undefined

for (let i = 1; i <= 100; i++) {
  let d = i % 3 === 0, t = i % 5 === 0;
  console.log(d ? t ? "DesignTech" : "Design" : t ? "Tech" : i);

}
