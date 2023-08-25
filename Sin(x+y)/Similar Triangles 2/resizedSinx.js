
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

  // Create buttons
 
  let subBut = createButton("Submit");
  subBut.position(1*width/10,19*height/20);
  subBut.mousePressed(veri);
  
}

function draw() {
  background(220);

   //Double Triangles.

   doubleTriangles(xAngle,yAngle,xStart,yStart,Hypo);

   //constructions
 
   constructions(xAngle,yAngle,xStart,yStart,Hypo);
 
   //Arcs
 
   angleArcs(xAngle,yAngle,xStart,yStart,Hypo);
 

  // Dashed line

  moveableLine(LineX,xStart,yStart,xAngle,r,g,b);

  // cursor
  
  mouseHover(LineX,yStart,xAngle,xStart);

 

  //Resized line height

  heightValue(xAngle,yAngle,yStart,LineX);

  //Labels

  push();
  textSize(15);
  text('x',xStart+width/12,yStart-height/100);
  pop();

  push();
  textSize(15);
  text('y',xStart+width/12,yStart-height/15);
  pop();

  push();
  textSize(15);
  text('Sin(x)',xStart+width/1.5,yStart-height/8);
  pop();

  push();
  textSize(15);
  text('Cos(y)',xStart+width/4,yStart-height/6);
  pop();


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
  m=map(h,0,Hypo*sin(xAngle),0,1);
  m=m.toFixed(2);
  if(LineX>xStart+Hypo*cos(xAngle)*cos(yAngle)-2 && LineX<xStart+Hypo*cos(xAngle)*cos(yAngle)+2)
    text('Sin(x) X Cos(y)',LineX-90,yStart-h/3);
  else if(LineX>275)
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
  
     // arc(xStart+Hypo*cos(xAngle),yStart-Hypo*sin(xAngle),Hypo*0.1,Hypo*0.1,90,(90+90-xAngle));
  
     // arc(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle),Hypo*0.2,Hypo*0.2,(90+90-xAngle),180);
  
     //  arc(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle),Hypo*0.1,Hypo*0.1,180,180+(90-xAngle));
  
     // arc(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle),Hypo*0.2,Hypo*0.2,90,(90+90-(xAngle+yAngle)));
  
     // arc(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle),Hypo*0.25,Hypo*0.25,90-xAngle,90);
  
    pop();
  } 
  
  function veri(){
    let answerStatus = false;

    if(LineX>xStart+Hypo*cos(xAngle)*cos(yAngle)-2 && LineX<xStart+Hypo*cos(xAngle)*cos(yAngle)+2){
      window.alert("Congratulations!!");
      answerStatus = true;
    }
    else{
      window.alert("Wrong Position :(");
      answerStatus = false;
    }
      
  }