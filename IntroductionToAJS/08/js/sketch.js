/* Creative Coding
   Edel Prior
  November Week 9
   Notes
*/

//
function setup() {

  let canvas = createCanvas(windowWidth, windowHeight);
//  colorMode(HSB, 360, 100, 100);
  //rectMode(CENTER);

}

function draw() {
  background(200, 0, 0);
  translate(width / 2, height / 2);
  fill(255, 0, 0);
  noStroke();
  ellipse(0, 0, 200, 200);


}


function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(canvas, gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');
}
