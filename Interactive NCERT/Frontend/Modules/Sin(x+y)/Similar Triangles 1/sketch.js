let r,g,b,h,height;
let isDragging;
let x=350;
let x1A1=185;
let y1A1=145;
let x2A1=50;
let y2A1=190;
let x1A2=215;
let y1A2=135;
let x2A2=350;
let y2A2=90;

function setup() {
  createCanvas(500, 400);
  h= 100/300;
}

function draw() {
  background(220);

  //Triangle

  Triangle();

  //Arc

  Arc();

  //Right angle

  RightAngle();

  // Dashed line

  MoveableLine(x,r,g,b);

  // cursor
  mouseHover();

  // Arrow1

  drawArrow(x1A1-(350-x)/2,y1A1 + (h * (350-x))/2,x2A1,y2A1);

  // Arrow2

  drawArrow(x1A2-(350-x)/2,y1A2 + (h * (350-x))/2,x,90 + h * (350-x));

  //Resized line height

  heightValue();

  push();
  textSize(15);
  text('x',95,196);
  
  pop();

}

function Triangle(){
  push();
  strokeWeight(2);
  triangle(50,200,350,200,350,100);
  pop();
}

function Arc(){
  push();
  noFill();
  strokeWeight(2);
  arc(80,195,10,10,3*PI/2,PI/2);
  pop();
}

function RightAngle(){
  push();
    strokeWeight(2);
    rect(340,190,10,10);
  pop();
}

function MoveableLine(posX=350,colorR=255,colorG=0,colorB=0){
  push();
   stroke(colorR,colorG,colorB);
   strokeCap('square')
   strokeWeight(2);
   line(posX,198,posX,102 + h * (350-x));
  pop();
}
  

function mouseHover(){
  if(x-5<mouseX && mouseX<x+5 && mouseY<200 && mouseY>100 + h * (350-x)){
    cursor('grab');
  }
  else{
    cursor('pointer')
  }
}

function mousePressed() {
  
  if(x-5<mouseX && mouseX<x+5 && mouseY<200 && mouseY>100 + h * (350-x)){
    isDragging=true;
    r=0;
    g=255;
  }
  else{
    isDragging=false;
  }
}

function mouseDragged(){
    if(isDragging)
      x=mouseX;
    if(x<150)
      x=150;
    if(x>350)
      x=350;
}

function mouseReleased() {
  isDragging=false;
  r=255;
  g=0;
}

function drawArrow(x1, y1, x2, y2) {
  // Calculate the angle between the two points
  let angle = atan2(y2 - y1, x2 - x1);
  
  // Calculate the arrowhead size
  let arrowSize = 10;
  
  // Draw the line
  line(x1, y1, x2, y2);
  
  // Draw the arrowhead
  push();
  fill(0);
  translate(x2, y2);
  rotate(angle);
  triangle(-arrowSize, -arrowSize / 2, -arrowSize, arrowSize / 2, 0, 0);
  pop();
}

function heightValue(){
  height=h*(x-50)/100;
  height=height.toFixed(2);
  text('Sin(x) X '+height,x+5,152 + h * (350-x)/2);
  push();
  
  
  text(height,185-(350-x)/2,145 + (h * (350-x))/2);
  
  pop();
}