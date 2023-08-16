let p1, p2, p3, p4,p5,p6,p7,p8,p9,p10,p11,p12;

let cosClick,sinClick,plusClick;

let lbl;

function setup() {
  createCanvas(600, 400);

 angleMode(DEGREES);

  xAngle=25;
  yAngle=30;
  xStart=width/8;
  yStart=9*height/10;
  Hypo=350;

  cosClick=false;
  sinClick=false;
  plusClick=false;

  lbl='sin(x)';

  let cosBut = createButton("sin(x) cos(y)");
   cosBut.position(2.2*width/4, height/20);
   cosBut.mousePressed(cosComponentbutton);
 
  let sinBut = createButton("cos(x) sin(y)");
   sinBut.position(3*width/4, height/20);
   sinBut.mousePressed(sinComponentbutton);

   let plusBut = createButton("+");
   plusBut.position(2.815*width/4,height/20);
   plusBut.mousePressed(plusButton);

 /* p1 = createVector(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart); // Starting point of vertical line
  p2 = createVector(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle)); // Ending point of vertical line

  p3 = createVector(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle)); // Starting point of horizontal line
  p4 = createVector(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle)); // Ending point of horizontal line  */

 /*p5 = createVector(xStart,yStart);
  p6 = createVector(xStart+Hypo*cos(xAngle),yStart);*/

  p7 = createVector(xStart+Hypo*cos(xAngle),yStart);
  p8 = createVector(xStart+Hypo*cos(xAngle),yStart-Hypo*sin(xAngle));

 /* p9 = createVector(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle)); 
  p10 = createVector(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));*/

  /*p11 = createVector(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
  p12 = createVector(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));*/

  p1 = createVector(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle)); 
  p2 = createVector(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));

}

function draw() {
  background(220);

   //Double Triangles.

   doubleTriangles(xAngle,yAngle,xStart,yStart,Hypo);

   //constructions
 
   constructions(xAngle,yAngle,xStart,yStart,Hypo);
 
   //Arcs
 
   angleArcs(xAngle,yAngle,xStart,yStart,Hypo);
 
   //Labels

   labels();

   // initial Setup

   if(!cosClick && !sinClick && !plusClick)
      initialSetup();

   //Button Operations

  if(cosClick)
    cosComponent();

  if(sinClick)
    sinComponent();

  if(plusClick)
    plusOperation();
  
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
  
    /*beginShape(LINES);
    vertex(xStart+Hypo*cos(xAngle),yStart);
    vertex(xStart+Hypo*cos(xAngle),yStart-Hypo*sin(xAngle));
    endShape();*/
  
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

    /*beginShape(LINES);
    vertex(xStart,yStart);
    vertex(xStart+Hypo*cos(xAngle),yStart);
    endShape();*/

    beginShape(LINES);
    vertex(xStart+Hypo*cos(xAngle),yStart);
    vertex(xStart+Hypo*cos(xAngle),yStart-Hypo*sin(xAngle));
    endShape();
  
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

    /*beginShape(LINES);
    vertex(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
    vertex(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart);
    endShape();*/
  
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

  function labels(){
  push();
  textSize(15);
  text('x',xStart+width/14,yStart-height/100);
  pop();

  push();
  textSize(15);
  text('y',xStart+width/14,yStart-height/13);
  pop();

  /*push();
  textSize(15);
  text('sin(x)',xStart+width/1.85,yStart-height/7);
  pop();*/

  push();
  textSize(15);
  text('cos(y)',xStart+width/4.3,yStart-height/4.5);
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
  text('sin(x+y) =',4.2*width/10,1.7*height/20);
  pop();

 /* push();
  textSize(15);
  text('+',7.3*width/10,1.7*height/20);
  pop();*/

}

function drawArrow(x1, y1, x2, y2) {
  // Calculate the angle between the two points
  let angle1 = atan2(y2 - y1, x2 - x1);
  let angle2 = atan2(y1 - y2, x1 - x2);
  
  // Calculate the arrowhead size
  let arrowSize = 6;
  
  // Draw the line
  line(x1, y1, x2, y2);
  
  // Draw the arrowhead
  push();
  fill(0);
  translate(x2, y2);
  rotate(angle1);
  triangle(-arrowSize, -arrowSize / 2, -arrowSize, arrowSize / 2, 0, 0);
  pop();

  push();
  fill(0);
  translate(x1, y1);
  rotate(angle2);
  triangle(-arrowSize, -arrowSize / 2, -arrowSize, arrowSize / 2, 0, 0);
  pop();
}

function cosComponentbutton(){

  cosClick=true;
  sinClick=false;
  plusClick=false;

  p7 = createVector(xStart+Hypo*cos(xAngle),yStart);
  p8 = createVector(xStart+Hypo*cos(xAngle),yStart-Hypo*sin(xAngle));

  p1 = createVector(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle)); 
  p2 = createVector(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));

  lbl='sin(x)';
}

function sinComponentbutton(){
  if(cosClick){
  sinClick=true;
  cosClick=false;
  plusClick=false;
  }
  else
    window.alert('Press \'sin(x) cos(y)\' first');

  /*p9 = createVector(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle)); 
  p10 = createVector(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));

  p11 = createVector(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));
  p12 = createVector(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle));

  p13 = createVector(xStart+Hypo*cos(xAngle+yAngle),yStart);
  p14 = createVector(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart);*/

  p1 = createVector(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle)); 
  p2 = createVector(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle));

  lbl='sin(x) cos(y)';

}

function plusButton(){
  if(sinClick){
    sinClick=false;
    cosClick=false;
    plusClick=true;
    }
    else
      window.alert('Press \'sin(x) cos(y)\' & \'cos(x) sin(y)\' first');
}
 
function cosComponent(){

  push();

  strokeWeight(3);
  angleMode(DEGREES);

  line(p1.x,p1.y,p2.x,p2.y);

 /*if(p6.x > xStart+Hypo*cos(xAngle)*cos(yAngle)){
     p6.x-=deltaTime*0.1;
     
  }
  else if(p6.x < xStart+Hypo*cos(xAngle)*cos(yAngle)){
     p6.x= xStart+Hypo*cos(xAngle)*cos(yAngle);
     
  }*/

  if(p7.x > xStart+Hypo*cos(xAngle)*cos(yAngle)){
    p7.x-=deltaTime*0.1;
    p8.x-=deltaTime*0.1;
    p8.y=yStart-sin(xAngle)/cos(xAngle)*(p8.x-xStart);
   
 }
  else if(p7.x < xStart+Hypo*cos(xAngle)*cos(yAngle)){
    p7.x= xStart+Hypo*cos(xAngle)*cos(yAngle);
    p8.x= xStart+Hypo*cos(xAngle)*cos(yAngle);
   
 }

  //line(p5.x,p5.y,p6.x,p6.y);
  line(p7.x,p7.y,p8.x,p8.y);

  pop();

  push();

  drawArrow(p7.x-10,p7.y-5,p8.x-10,p8.y+8);

  pop();

  push();

  /*textSize(15);
  textAlign(CENTER,CENTER);
  text(lbl,p7.x-60,p7.y-(p7.y-p8.y)/2);*/

  let angle2 = 270;
  translate(p7.x-20,p7.y-(p7.y-p8.y)/2);
  rotate(angle2);
  // Draw the letter to the screen
  textSize(15);
  textAlign(CENTER,CENTER);
  text(lbl, 0, 0);
  
  pop();


  if(p7.x === xStart+Hypo*cos(xAngle)*cos(yAngle)){
     lbl='sin(x) cos(y)';
  }

  
}

function sinComponent(){

  push();

  strokeWeight(3);
  angleMode(DEGREES);

  line(p7.x,p7.y,p8.x,p8.y);

  pop();

  push();

  drawArrow(p7.x-10,p7.y-5,p8.x-10,p8.y+8);

  pop();

  push();

  /*textSize(15);
  textAlign(CENTER,CENTER);
  text(lbl,p7.x-60,p7.y-(p7.y-p8.y)/2);*/

  let angle2 = 270;
  translate(p7.x-20,p7.y-(p7.y-p8.y)/2);
  rotate(angle2);
  // Draw the letter to the screen
  textSize(15);
  textAlign(CENTER,CENTER);
  text(lbl, 0, 0);
  
  pop();



  push();
  
  strokeWeight(3);
  angleMode(DEGREES);

  
  if(p1.x > xStart+Hypo*cos(xAngle+yAngle))
     p1.x-=deltaTime*0.1;
  else if(p1.x < xStart+Hypo*cos(xAngle+yAngle))
     p1.x= xStart+Hypo*cos(xAngle+yAngle)

  line(p1.x,p1.y,p2.x,p2.y);

  pop();

  if(p1.x ===  xStart+Hypo*cos(xAngle+yAngle)){
    push();

       drawArrow(p1.x-10,p1.y-5,p2.x-10,p2.y+20);

    pop();

    push();
    let angle2 = 270;
    translate(p1.x-30,p1.y-(p1.y-p2.y)/3);
    rotate(angle2);
    // Draw the letter to the screen
    textSize(15);
    textAlign(CENTER,CENTER);
    text("cos(x) sin(y)", 0, 0);
    
    pop();
  
  }
}

function plusOperation(){

  push();

  strokeWeight(3);
  angleMode(DEGREES);

  line(p7.x,p7.y,p8.x,p8.y);
  line(p1.x,p1.y,p2.x,p2.y);

  pop();

  push();

  drawArrow(p7.x-10,p7.y-5,p8.x-10,p8.y+8);

  pop();

  push();

  /*textSize(15);
  textAlign(CENTER,CENTER);
  text(lbl,p7.x-60,p7.y-(p7.y-p8.y)/2);*/

  let angle2 = 270;
  translate(p7.x-20,p7.y-(p7.y-p8.y)/2);
  rotate(angle2);
  // Draw the letter to the screen
  textSize(15);
  textAlign(CENTER,CENTER);
  text(lbl, 0, 0);
  
  pop();

  push();

  drawArrow(p1.x-10,p1.y-5,p2.x-10,p2.y+20);

  pop();

  push();
 
  translate(p1.x-30,p1.y-(p1.y-p2.y)/3);
  rotate(angle2);
  // Draw the letter to the screen
  textSize(15);
  textAlign(CENTER,CENTER);
  text("cos(x) sin(y)", 0, 0);

  pop();

  

    if(p1.x < xStart+Hypo*1.2){
     p1.x+=deltaTime*0.1;
     p2.x+=deltaTime*0.1;
    }else if(p1.x > xStart+Hypo*1.2){
      p1.x = xStart+Hypo*1.2;
      p2.x = xStart+Hypo*1.2;
    }

    if(p7.x < xStart+Hypo*1.2){
      p7.x+=deltaTime*0.1;
      p8.x+=deltaTime*0.1;
     }else if(p7.x > xStart+Hypo*1.2){
      p7.x = xStart+Hypo*1.2;
      p8.x = xStart+Hypo*1.2;
    }


    if(p7.x ===  xStart+Hypo*1.2 && p1.x === xStart+Hypo*1.2){
       
       push();
        strokeWeight(3);
        angleMode(DEGREES);

        line(xStart+Hypo*cos(xAngle+yAngle)+250,yStart,xStart+Hypo*cos(xAngle+yAngle)+250,yStart-Hypo*sin(xAngle+yAngle));
  
       pop();

       push();

       textSize(15);
       textAlign(CENTER,CENTER);
       text('sin(x+y)',xStart+Hypo*cos(xAngle+yAngle)+285,yStart-Hypo*sin(xAngle+yAngle)/2);

       pop();
    }
       
  
}

function initialSetup(){

  push();

  strokeWeight(3);
  angleMode(DEGREES);

  //line(p5.x,p5.y,p6.x,p6.y);
  line(p7.x,p7.y,p8.x,p8.y);
  line(p1.x,p1.y,p2.x,p2.y);
  //line(p9.x,p9.y,p10.x,p10.y);

  pop();

  push();

  drawArrow(p7.x-10,p7.y-5,p8.x-10,p8.y+8);

  pop();

  push();

  textSize(15);
  textAlign(CENTER,CENTER);
  text(lbl,p7.x-30,p7.y-(p7.y-p8.y)/2);
  
  pop();


}