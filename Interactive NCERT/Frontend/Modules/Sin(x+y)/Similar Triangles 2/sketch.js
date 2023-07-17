let r,g,b,h,height,spl;
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
  spl='Cos(y)';
  
}

function draw() {
  background(220);

  translate(0,100);

  //Triangle with angle X

  TriangleX();

  //Triangle with angle y

  TriangleY();

  //Arc

  ArcX();
  ArcY();
  //Right angle

  //RightAngleX();
  //RightAngleY();

  // Dashed line

  MoveableLine(x,r,g,b);

  // cursor
  mouseHover();

 

  //Resized line height

  heightValue();

  push();
  textSize(15);
  text('x',95,196);
  pop();

  push();
  textSize(15);
  text('y',95,175);
  pop();

  push();
  textSize(15);
  text('Sin(y)',295,80);
  pop();

  push();
  textSize(15);
  text('Cos(y)',195,130);
  pop();

  // Vetex Ellipse

  push();
  fill(0);
  ellipse(54,198,15,15);
  pop();

}

function TriangleX(){
  push();
  strokeWeight(2);
  strokeCap("round");
  triangle(50,200,350,200,350,100);
  pop();
}

function TriangleY(){
  push();
  strokeWeight(2);
  strokeCap("round");
  triangle(50,200,305,115,265,10);
  pop();
}


function ArcX(){
  push();
  noFill();
  strokeWeight(2);
  arc(80,195,10,10,3*PI/2,PI/2);
  pop();
}

function ArcY(){
  push();
  noFill();
  strokeWeight(2);
  arc(80,180,20,20,-PI/2.4,2.2*PI);
  pop();
}

function RightAngleX(){
  push();
    strokeWeight(2);
    rect(340,190,10,10);
  pop();
}

function RightAngleY(){
  push();
    strokeWeight(2);
    rotate(radians(-18.2))
    rect(244,194,10,10);
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
  if(x-5<mouseX && mouseX<x+5 && mouseY<300 && mouseY>200 + h * (350-x)){
    cursor('grab');
  }
  else{
    cursor('pointer')
  }
}

function mousePressed() {
  
  if(x-5<mouseX && mouseX<x+5 && mouseY<300 && mouseY>200 + h * (350-x)){
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



function heightValue(){
  height=h*(x-50)/100;
  height=height.toFixed(2);
  if(x===305)
    text('Sin(x) X '+ spl,x-85,152 + h * (350-x)/2);
  else if(x>275)
    text('Sin(x) X '+height,x-80,152 + h * (350-x)/2);
      else
      text('Sin(x) X '+height,x+5,152 + h * (350-x)/2);
  }