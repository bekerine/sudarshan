
let xAngle,yAngle,xStart,yStart,Hypo,LineX;

let r,g,b;

let isDragging;

let h;



function setup() {
  createCanvas(500, 500);
  
 angleMode(DEGREES);

  xAngle=25;
  yAngle=30;
  xStart=width/6;
  yStart=9*height/10;
  Hypo=350;
  LineX=xStart+Hypo*cos(xAngle);

  
}

function draw() {
  background("#42ccf6");

   //Double Triangles.

   doubleTriangles(xAngle,yAngle,xStart,yStart,Hypo);

   //Arcs
 
   angleArcs(xAngle,yAngle,xStart,yStart,Hypo);
 

  // Dashed line

   moveableLine(LineX,xStart,yStart,xAngle,r,g,b);

  // cursor
  
   mouseHover(LineX,yStart,xAngle,xStart);

  //Resized line height

   heightValue();

  //Labels

  push();
  textSize(15);
  text('x',xStart+width/12,yStart-height/100);
  pop();

  
  push();
  textSize(15);
  text('Sin(x)',xStart+width/1.5,yStart-height/8);
  pop();

 //Arrows

 drawArrow(xStart+(LineX-xStart)/2,(yStart-(sin(xAngle)/cos(xAngle)*(LineX-xStart))/2)-10,xStart,yStart-10);

 drawArrow(xStart+(LineX-xStart)/2,(yStart-(sin(xAngle)/cos(xAngle)*(LineX-xStart))/2)-10,LineX,(yStart-sin(xAngle)/cos(xAngle)*(LineX-xStart))-10)


}

function moveableLine(LineX,xStart,yStart,xAngle,colorR=255,colorG=0,colorB=0){
  push();
   stroke(colorR,colorG,colorB);
   strokeCap('square')
   strokeWeight(2);
   line(LineX,yStart-2,LineX,yStart-sin(xAngle)/cos(xAngle)*(LineX-xStart)+2);
  pop();
} 

function mouseHover(LineX,yStart,xAngle,xStart){
  if(LineX-5<mouseX && mouseX<LineX+5 && mouseY<yStart && mouseY>yStart-sin(xAngle)/cos(xAngle)*(LineX-xStart)+2){
    cursor('grab');
  }
  else{
    cursor('pointer')
  }
}

function mousePressed() {
  
  if(LineX-5<mouseX && mouseX<LineX+5 && mouseY<yStart && mouseY>yStart-sin(xAngle)/cos(xAngle)*(LineX-xStart)+2){
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
      LineX=mouseX;
    if(LineX<xStart+width/5)
      LineX=xStart+width/5;
    if(LineX>xStart+Hypo*cos(xAngle))
      LineX=xStart+Hypo*cos(xAngle);
}    

function mouseReleased() {
  isDragging=false;
  r=255;
  g=0;
}

function heightValue(){
  h=sin(xAngle)/cos(xAngle)*(LineX-xStart);
  h=h.toFixed(2);
  m=map(h,0,147.92,0,1);
  m=m.toFixed(2);
  text(m,xStart+(LineX-xStart)/2*0.8,(yStart-(sin(xAngle)/cos(xAngle)*(LineX-xStart))/2)*0.95);

   if(LineX>275)
    text('Sin(x) X '+ m,LineX-90,yStart-h/3);
      else
      text('Sin(x) X '+ m,LineX+10, yStart-h/3);
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
  
    
  
   
    pop();
  }
  
  function angleArcs(xAngle,yAngle,xStart,yStart,Hypo){
    //Arcs
  
    angleMode(DEGREES);
    push();
      noFill();
  
      arc(xStart,yStart,Hypo*0.2,Hypo*0.2,-xAngle,0);
  
    pop();
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

