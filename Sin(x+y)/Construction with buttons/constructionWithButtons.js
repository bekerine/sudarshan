let con=false;
let deCon=false;
let p1, p2, p3, p4;

function setup() {
  createCanvas(400, 400);

  angleMode(DEGREES);

  xAngle=25;
  yAngle=30;
  xStart=width/6;
  yStart=9*height/10;
  Hypo=350;
 
  

  // Create buttons
 
  let conBut = createButton("Construct");
  conBut.position(width/3, height-30);
  conBut.mousePressed(constructButton);
 
  let deBut = createButton("Deconstruct");
  deBut.position(2*width/3, height-30);
  deBut.mousePressed(DeconstructButton);

  //Dashed lines
 
  p1 = createVector(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle)); // Starting point of vertical line
  p2 = createVector(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle)); // Ending point of vertical line

  p3 = createVector(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle)); // Starting point of horizontal line
  p4 = createVector(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle)); // Ending point of horizontal line   
  


}

function draw() {
  background(220);

   //Double Triangles.

   doubleTriangles(25,30,width/6,9*height/10,350);

   //constructions
   
   if(con)
   constructions(25,30,width/6,9*height/10,350);

   if(deCon)
   deConstructions(25,30,width/6,9*height/10,350);

   //Arcs
 
   angleArcs(25,30,width/6,9*height/10,350);

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

  beginShape(LINES);
  vertex(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
  vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));
  endShape();

  beginShape(LINES);
  vertex(xStart,yStart);
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

    //arc(xStart+Hypo*cos(xAngle),yStart-Hypo*sin(xAngle),Hypo*0.1,Hypo*0.1,90,(90+90-xAngle));

    //arc(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle),Hypo*0.2,Hypo*0.2,(90+90-xAngle),180);

    //arc(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle),Hypo*0.1,Hypo*0.1,180,180+(90-xAngle));

    //arc(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle),Hypo*0.2,Hypo*0.2,90,(90+90-(xAngle+yAngle)));

    //arc(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle),Hypo*0.25,Hypo*0.25,90-xAngle,90);

  pop();
}   

function constructButton() {
 con=true;
 deCon=false;
}

function DeconstructButton() {
  deCon=true;
  con=false;

  //p2.y=yStart-Hypo*sin(xAngle+yAngle);
  //p4.x=xStart+Hypo*cos(xAngle)*cos(yAngle);
 }

function labels(){
  push();
  textSize(15);
  text('x',xStart+width/10,yStart-height/100);
  pop();

  push();
  textSize(15);
  text('y',xStart+width/10,yStart-height/13);
  pop();

  push();
  textSize(15);
  text('sin(x)',xStart+width/1.5,yStart-height/7);
  pop();

  push();
  textSize(15);
  text('cos(y)',xStart+width/3,yStart-height/4.5);
  pop();

  push();
  textSize(15);
  text('1',xStart+width/4,yStart-height/2.5);
  pop();

  push();
  textSize(15);
  text('sin(y)',xStart+width/1.6,yStart-height/2);
  pop();

}

function constructions(xAngle,yAngle,xStart,yStart,Hypo){

  push();

  drawingContext.setLineDash([5,5]);
  
  strokeWeight(2);
  angleMode(DEGREES);

  


   if(p2.y < yStart-Hypo*sin(xAngle)*cos(yAngle)){
    p2.y+=deltaTime*0.5;
  }else if(p2.y > yStart-Hypo*sin(xAngle)*cos(yAngle))
      p2.y = yStart-Hypo*sin(xAngle)*cos(yAngle);
  
   if(p4.x > xStart+Hypo*cos(xAngle+yAngle)){
    p4.x-=deltaTime*0.23;
  }else if(p4.x < xStart+Hypo*cos(xAngle+yAngle))
          p4.x = xStart+Hypo*cos(xAngle+yAngle);
  

  line(p1.x, p1.y, p2.x, p2.y);

  line(p3.x, p3.y, p4.x, p4.y);

 /* beginShape(LINES);
  vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
  vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));
  endShape();

  beginShape(LINES);
  vertex(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
  vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
  endShape();*/

  pop();
}

function deConstructions(xAngle,yAngle,xStart,yStart,Hypo){

  push();

  drawingContext.setLineDash([5,5]);
  
  strokeWeight(2);
  angleMode(DEGREES);

   if(p2.y > yStart-Hypo*sin(xAngle+yAngle))
      p2.y-=deltaTime*0.5;
  else if(p2.y < yStart-Hypo*sin(xAngle+yAngle))
          p2.y = yStart-Hypo*sin(xAngle+yAngle);
  
  
   if(p4.x < xStart+Hypo*cos(xAngle)*cos(yAngle))
      p4.x+=deltaTime*0.23;
    else if(p4.x > xStart+Hypo*cos(xAngle)*cos(yAngle))
            p4.x = xStart+Hypo*cos(xAngle)*cos(yAngle);
  

  

  line(p1.x, p1.y, p2.x, p2.y);

  line(p3.x, p3.y, p4.x, p4.y);

 /* beginShape(LINES);
  vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
  vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));
  endShape();

  beginShape(LINES);
  vertex(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
  vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
  endShape();*/

  pop();
}