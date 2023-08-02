
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  //Double Triangles.

  doubleTriangles(25,30,width/6,9*height/10,350);

  //constructions

  constructions(25,30,width/6,9*height/10,350);

  //Arcs

  angleArcs(25,30,width/6,9*height/10,350);

  // Angle Container

  push();
  noFill();
  strokeWeight(2);
  rect(width/6,height/15,4*width/6,2*height/10);
  pop();

  //Angles
  push();
  textSize(20);
  textAlign(CENTER,CENTER);
  rectMode(CENTER);
  rect(2*width/10,2*height/15,15,15);
  text('x',2*width/10,2*height/15);
  rect(3*width/10,3*height/15,10,20);
  text('y',3*width/10,3*height/15);
  rect(3.5*width/10,2*height/15,40,20);
  text('90-x',3.5*width/10,2*height/15);
  rect(6.5*width/10,2.5*height/15,40,20);
  text('90-x',6.5*width/10,2.5*height/15);
  rect(4.5*width/10,3.5*height/15,80,20);
  text('90-(x+y)',4.5*width/10,3.5*height/15);
  rect(5.5*width/10,2*height/15,15,15);
  text('x',5.5*width/10,2*height/15);
  rect(7.5*width/10,3.5*height/15,15,15)
  text('x',7.5*width/10,3.5*height/15);
  pop();

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

function constructions(xAngle,yAngle,xStart,yStart,Hypo){

  //Constructions

  push();

  drawingContext.setLineDash([5,5]);
  
  strokeWeight(2);
  angleMode(DEGREES);

  beginShape(LINES);
  vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
  vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));
  endShape();

  beginShape(LINES);
  vertex(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
  vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
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

    arc(xStart+Hypo*cos(xAngle),yStart-Hypo*sin(xAngle),Hypo*0.1,Hypo*0.1,90,(90+90-xAngle));

    arc(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle),Hypo*0.2,Hypo*0.2,(90+90-xAngle),180);

    arc(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle),Hypo*0.1,Hypo*0.1,180,180+(90-xAngle));

    arc(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle),Hypo*0.2,Hypo*0.2,90,(90+90-(xAngle+yAngle)));

    arc(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle),Hypo*0.25,Hypo*0.25,90-xAngle,90);

  pop();
}   