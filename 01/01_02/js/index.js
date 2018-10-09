// Advanced JS Module
// Edel Prior
// Using nodemon in the terminal as a live server and repersentation of JS
// October 2018 Year 4
// ***********************************************************************

// Password Strength using event listeners
//
const pw = document.getElementById('pw');

pw.addEventListener('keyup', function (evt) {
  if(this.value.length > 10) {
    this.style.color = 'green';
  }
  else {
    this.style.color = 'red';
  }
});

$(".pw").keyup(function() {
  console.log( this.value );
  if(this.value.length < 6)
  $ (".pw").css("color", "red");
  else if (this.value.length <= 10)
  $(".pw").css("color", "orange");
  else
    $(".pw").css("color", "green");
  });
