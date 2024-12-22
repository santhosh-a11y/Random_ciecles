let positionX, positionY;
let size;
let r, g, b;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  
  r=random(225);
  g=random(225);
  b=random(225);
  fill(r, g, b);
  size=random(10, 50);
  positionX = random(width);
  positionY = random(height);
  circle(positionX, positionY, size)
}
function mousePressed(){
  background(0);
}