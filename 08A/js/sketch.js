/* Creative Coding
   Edel Prior
  November Week 9
   Notes
*/

//
let circles = [];
let bouncingCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
background(255);
  for(let i = 0; i < circles.length; i++) {
    circles[i].moveCircle(); // call each method #1 and #2
    circles[i].drawCircle();
    
  }
  for(let i = 0; i < bouncingCircles.length; i++) {
    bouncingCircles[i].moveCircle(); // call each method #1 and #2
    bouncingCircles[i].drawCircle();
    bouncingCircles[i].checkEdges();
  }
}
// ---- Super Class ----
class Circle {
  constructor(x = 50, y = 50, r = 40, col = '#f00') {
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = col;
    this.vx = random(-5,5);
    this.vy = random(-5,5);
}

// Method #1 of the Super
moveCircle() {

  this.x += this.vx;
  this.y += this.vy;
  }


// Method #2 of the Super
drawCircle() {
  fill(this.col);
  ellipse(this.x,this.y,this.r);
  noStroke();
};

}

// Bouncing Circle CHILD class

class bouncingCircle extends Circle {
  constructor(x = 50, y = 50, r = 20, col = '#bd53b2') {
  super(x, y, r, col);
  }


checkEdges() {
  if (this.x > width || this.x < 0 ) {
    this.vx = this.vx * -1;
    }

  if (this.y > height || this.y < 0 ) {
      this.vy = this.vy * -1;
      }
  }
}
function mousePressed() {
  if (mouseX < windowWidth / 2) {
  circles.push( new Circle(mouseX, mouseY));
}
else {

  bouncingCircles.push( new bouncingCircle(mouseX, mouseY));
}
}
