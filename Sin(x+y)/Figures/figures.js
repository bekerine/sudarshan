function setup() {
  createCanvas(800, 400);
}

function draw() {
  background("#42ccf6");

  doubleTriangles(25,30,1.5*width/3,9*height/10,350);

  tri(25,30,width/12,9*height/10,350)

  angleArcs(25,30,1.5*width/3,9*height/10,350);

  labels(25,30,1.5*width/3,9*height/10,350);
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

function tri(xAngle,yAngle,xStart,yStart,Hypo){
  push();
  
  strokeWeight(3);
  angleMode(DEGREES);

 

  beginShape(LINES);
  vertex(xStart,yStart);
  vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));
  endShape();

  beginShape(LINES);
  vertex(xStart,yStart);
  vertex(xStart+Hypo*cos(xAngle+yAngle),yStart);
  endShape();

  beginShape(LINES);
  vertex(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));
  vertex(xStart+Hypo*cos(xAngle+yAngle),yStart);
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

    arc(0.17*xStart,yStart,Hypo*0.25,Hypo*0.25,-(yAngle+xAngle),0);

    //arc(xStart+Hypo*cos(xAngle),yStart-Hypo*sin(xAngle),Hypo*0.1,Hypo*0.1,90,(90+90-xAngle));

    //arc(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle),Hypo*0.2,Hypo*0.2,(90+90-xAngle),180);

    //arc(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle),Hypo*0.1,Hypo*0.1,180,180+(90-xAngle));

    //arc(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle),Hypo*0.2,Hypo*0.2,90,(90+90-(xAngle+yAngle)));

    //arc(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle),Hypo*0.25,Hypo*0.25,90-xAngle,90);

  pop();
}

function labels(xAngle,yAngle,xStart,yStart,Hypo){
  push();
  textSize(20);
  text('x',xStart+width/20,yStart-height/100);
  pop();

  push();
  textSize(20);
  text('y',xStart+width/20,yStart-height/13);
  pop();

  push();
  textSize(20);
  text('x+y',xStart-1.08*width/3,yStart-0.85*height/13);
  pop();

  push();
  textSize(20);
  text('1',xStart+2*width/20,yStart-1.1*height/3);
  pop();
  
  push();
  textSize(20);
  text('1',xStart-0.95*width/3,yStart-1.1*height/3);
  pop();

}