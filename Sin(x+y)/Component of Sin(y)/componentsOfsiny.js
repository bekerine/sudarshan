let xAngle,yAngle,xStart,yStart,Hypo;
let ver=false;
let hor=false;
let p1, p2;

function setup() {
  createCanvas(600, 400);

  
 angleMode(DEGREES);

  xAngle=25;
  yAngle=30;
  xStart=width/8;
  yStart=9*height/10;
  Hypo=350;

  let horBut = createButton("sin(x)");
  horBut.position(8*width/10, 2*height/20);
  horBut.mousePressed(horizontalButton);
 
  let verBut = createButton("cos(x)");
  verBut.position(8*width/10, 4*height/20);
  verBut.mousePressed(verticalButton);

  p1 = createVector(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle)); 
  p2 = createVector(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));

  
}

function draw() {
  background("#42ccf6");

   //Double Triangles.

   doubleTriangles(xAngle,yAngle,xStart,yStart,Hypo);

   //constructions
 
   constructions(xAngle,yAngle,xStart,yStart,Hypo);

  if(!ver && !hor)
   initalLine();

   //Components   

   if(ver)
     verticalComponent();

   if(hor)
     horizontalComponent();
  
   //Arcs
 
   angleArcs(xAngle,yAngle,xStart,yStart,Hypo);
 
   //Labels

   labels();

}

function doubleTriangles(xAngle,yAngle,xStart,yStart,Hypo){
  
    // Sides
    push();
    
    strokeWeight(3);
    angleMode(DEGREES);
  
    beginShape(LINES);
    vertex(xStart,yStart);
    vertex(xStart+Hypo*cos(xAngle),yStart);
    endShape();
  
    beginShape(LINES);
    vertex(xStart+Hypo*cos(xAngle),yStart);
    vertex(xStart+Hypo*cos(xAngle),yStart-Hypo*sin(xAngle));
    endShape();
  
    beginShape(LINES);
    vertex(xStart,yStart);
    vertex(xStart+Hypo*cos(xAngle),yStart-Hypo*sin(xAngle));
    endShape();
  
    /*beginShape(LINES);
    vertex(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
    vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));
    endShape();*/
  
    beginShape(LINES);
    vertex(xStart,yStart);
    vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));
    endShape();
  
    pop();
  }
  
  function constructions(xAngle,yAngle,xStart,yStart,Hypo){  
  
    //Constructions
  
    push();
  
    drawingContext.setLineDash([5,5]);
    
    strokeWeight(2);
    angleMode(DEGREES);
  
    beginShape(LINES);
    vertex(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
    vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
    endShape();

    beginShape(LINES);
    vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
    vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));
    endShape();

    beginShape(LINES);
    vertex(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
    vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));
    endShape();
  
    pop();

   
  }
  
  function angleArcs(xAngle,yAngle,xStart,yStart,Hypo){
    //Arcs
  
    angleMode(DEGREES);
    push();
      noFill();
  
      arc(xStart,yStart,Hypo*0.2,Hypo*0.2,-xAngle,0);
  
      arc(xStart,yStart,Hypo*0.25,Hypo*0.25,-(yAngle+xAngle),-xAngle);
  
     // arc(xStart+Hypo*cos(xAngle),yStart-Hypo*sin(xAngle),Hypo*0.1,Hypo*0.1,90,(90+90-xAngle));
  
     // arc(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle),Hypo*0.2,Hypo*0.2,(90+90-xAngle),180);
  
     //  arc(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle),Hypo*0.1,Hypo*0.1,180,180+(90-xAngle));
  
     // arc(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle),Hypo*0.2,Hypo*0.2,90,(90+90-(xAngle+yAngle)));
  
      arc(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle),Hypo*0.25,Hypo*0.25,90-xAngle,90);
  
    pop();
  }   

  function labels(){
  push();
  textSize(15);
  text('x',xStart+width/14,yStart-height/100);
  pop();

  push();
  textSize(15);
  text('x',xStart+7*width/20,yStart-5.7*height/10);
  pop();

  push();
  textSize(15);
  text('y',xStart+width/14,yStart-height/13);
  pop();

  push();
  textSize(15);
  text('sin(x)',xStart+width/1.85,yStart-height/7);
  pop();

  push();
  textSize(15);
  text('cos(x)',xStart+width/4.3,yStart+height/20);
  pop();

  push();
  textSize(15);
  text('1',xStart+width/6,yStart-height/2.5);
  pop();

  push();
  textSize(15);
  text('sin(y)',xStart+width/2.4,yStart-height/2);
  pop();

  push();
  textSize(15);
  text('sin(y) X',7.1*width/10, 2.8*height/20);
  pop();

  push();
  textSize(15);
  text('sin(y) X',7.1*width/10, 4.8*height/20);
  pop();

}

function initalLine(){
  push();
  
  strokeWeight(2);
  angleMode(DEGREES);

  beginShape(LINES);
    vertex(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
    vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));
  endShape();
  
    pop();
}

function verticalButton(){
  ver=true;
  hor=false;

  p1 = createVector(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle)); 
  p2 = createVector(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));
}

function horizontalButton(){
  ver=false;
  hor=true;

  p1 = createVector(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle)); 
  p2 = createVector(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));
}

function verticalComponent(){

  push();
  
  strokeWeight(2);
  angleMode(DEGREES);

  
  if(p1.x > xStart+Hypo*cos(xAngle+yAngle))
     p1.x-=deltaTime*0.1;
  else if(p1.x < xStart+Hypo*cos(xAngle+yAngle))
     p1.x = xStart+Hypo*cos(xAngle+yAngle);

  line(p1.x,p1.y,p2.x,p2.y);

  pop();
}

function horizontalComponent(){

  push();
  
  strokeWeight(2);
  angleMode(DEGREES);

  
  if(p2.y < yStart-Hypo*sin(xAngle)*cos(yAngle))
     p2.y+=deltaTime*0.1;
  else if(p2.y > yStart-Hypo*sin(xAngle)*cos(yAngle))
     p2.y = yStart-Hypo*sin(xAngle)*cos(yAngle);

  line(p1.x,p1.y,p2.x,p2.y);

  pop();
}