var myRed = 10;
var myGreen = 0;
var myBlue = 225;

function setup() {
  createCanvas(640,480);
  background(50,50,50);
}

function draw() {
  myRed = myRed + 0.5;
  myBlue = myBlue - 1;
  noStroke();
  fill(myRed,myGreen,myBlue);
  ellipse(mouseX, mouseY, 50);
  if (myRed > 255) {
    myRed= 55;
  }
  if (myBlue < 1) {
    myBlue = 200;
  }
  
  if (mouseIsPressed) {
    fill(50,50,50);
    ellipse(mouseX, mouseY, 100,100);
  }
}