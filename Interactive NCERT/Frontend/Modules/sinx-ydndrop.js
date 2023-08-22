let initialPoints=[];

let isDragging=[];

let magneticPoints=[];

let distance=[];

let shortestDistance;

let shortIndex;

let magneticDistance;

let veriVal;

function setup() {
  createCanvas(500, 500);

  for(let i=0;i<3;i++){
    isDragging[i]=false;
  }

  initialPoints=[[3.5*width/5,3*height/15],
                 [3.5*width/10,2*height/15],
                 [3.5*width/10,3*height/15],
                 [7*width/10,2*height/15],
                 ];
  

  magneticPoints=[[5.7*width/20, 16.25*height/20],
                  [6*width/20, 14.5*height/20],
                  [10.5*width/20, 9.5*height/20],
                  [12*width/20, 8.5*height/20],
                  ];

  magneticDistance=width/10;
  //create button 
  let subBut = createButton("Submit");
  subBut.position(1*width/10,19*height/20);
  subBut.mousePressed(veri);
  
}
function draw() {
  background(220,120);

  // Triangles.

  Triangles(50,25,width/6,7*height/10,350);

  angleArcs(50,25,width/6,7*height/10,350);

  constructions(50,25,width/6,7*height/10,350);
  
   push();
  noFill();
  strokeWeight(2);
  rect(width/6,height/15,4*width/6,2*height/10);
  pop();
  
  //refereceCircles();
  sides();

}

function Triangles(xAngle,yAngle,xStart,yStart,Hypo){
  
  // Sides

  push();
  
  strokeWeight(3);
  angleMode(DEGREES);

  //cos(x) side

  beginShape(LINES);
  vertex(85,420);
  vertex(xStart+Hypo*cos(xAngle),yStart+70);
  endShape();

  // sin(x) side

  beginShape(LINES);
  vertex(xStart+Hypo*cos(xAngle),yStart+70);
  vertex(xStart+Hypo*cos(xAngle),yStart-Hypo*sin(xAngle)+70);
  endShape();

  //  Hypotenuse

  beginShape(LINES);
  vertex(xStart,yStart+70);
  vertex(xStart+Hypo*cos(xAngle),yStart-Hypo*sin(xAngle)+70);
  endShape();

  // sin(y) side.

  beginShape(LINES);
  vertex(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle)+70);
  vertex(xStart+Hypo*cos(xAngle-yAngle),yStart-Hypo*sin(xAngle-yAngle)+70);
  endShape();

  //  Hypotenuse

  beginShape(LINES);
  vertex(xStart,yStart+70);
  vertex(xStart+Hypo*cos(xAngle-yAngle),yStart-Hypo*sin(xAngle-yAngle)+70);
  endShape();

  pop();
}
function angleArcs(xAngle,yAngle,xStart,yStart,Hypo){
  //Arcs

  angleMode(DEGREES);
  push();
    noFill();

    arc(xStart,yStart+70,Hypo*0.2,Hypo*0.2,-xAngle,0);

    arc(xStart,yStart+70,Hypo*0.4,Hypo*0.4,-xAngle,-(-yAngle+xAngle));

    arc(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle)+70,Hypo*0.1,Hypo*0.1,(90-xAngle),90);

    arc(xStart+Hypo*cos(xAngle)*cos(yAngle),yStart-Hypo*sin(xAngle)*cos(yAngle)+70,Hypo*0.2,Hypo*0.2,90,90+(90-xAngle));

    
  pop();
} 
function constructions(xAngle,yAngle,xStart,yStart,Hypo){

  //Constructions

  push();

  drawingContext.setLineDash([5,5]);
  
  strokeWeight(2);
  angleMode(DEGREES);

  beginShape(LINES);
  vertex(xStart+Hypo*cos(xAngle)*cos(yAngle),70+yStart-Hypo*sin(xAngle)*cos(yAngle));
  vertex(xStart+Hypo*cos(xAngle)*cos(yAngle),70+yStart-Hypo*sin(xAngle-yAngle));
  endShape();

  beginShape(LINES);
  vertex(xStart+Hypo*cos(xAngle)*cos(yAngle),70+yStart-Hypo*sin(xAngle-yAngle));
  vertex(xStart+Hypo*cos(xAngle-yAngle),70+yStart-Hypo*sin(xAngle-yAngle));
  endShape();

  pop();
}
function sides(){
  push();
  textSize(20);
  textAlign(CENTER,CENTER);
  rectMode(CENTER);

  //rect(initialPoints[0][0],initialPoints[0][1],60,20);
  text('90-x',initialPoints[0][0],initialPoints[0][1]);

  //rect(initialPoints[1][0],initialPoints[1][1],60,20);
  text('x',initialPoints[1][0],initialPoints[1][1]);

  //rect(initialPoints[2][0],initialPoints[2][1],60,20);
  text('x',initialPoints[2][0],initialPoints[2][1]);

  //rect(initialPoints[3][0],initialPoints[3][1],60,20);
  text('y',initialPoints[3][0],initialPoints[3][1]);

  pop();

}
function mousePressed(){

  if(mouseX < initialPoints[0][0]+30 && mouseX > initialPoints[0][0]-30 && mouseY < initialPoints[0][1]+10 && mouseY > initialPoints[0][1]-10)
    isDragging[0]=true;

  if(mouseX < initialPoints[1][0]+30 && mouseX > initialPoints[1][0]-30 && mouseY < initialPoints[1][1]+10  && mouseY > initialPoints[1][1]-10)
    isDragging[1]=true;

  if(mouseX < initialPoints[2][0]+30 && mouseX > initialPoints[2][0]-30 && mouseY < initialPoints[2][1]+10 && mouseY > initialPoints[2][1]-10)
    isDragging[2]=true;

  if(mouseX < initialPoints[3][0]+30 && mouseX > initialPoints[3][0]-30 && mouseY < initialPoints[3][1]+10 && mouseY > initialPoints[3][1]-10)
    isDragging[3]=true;
}
function mouseDragged(){

   if(isDragging[0]){
    initialPoints[0][0]=mouseX;
    initialPoints[0][1]=mouseY;
   }

   if(isDragging[1]){
    initialPoints[1][0]=mouseX;
   initialPoints[1][1]=mouseY;
   }

   if(isDragging[2]){
    initialPoints[2][0]=mouseX;
    initialPoints[2][1]=mouseY;
   }

   if(isDragging[3]){
   initialPoints[3][0]=mouseX;
    initialPoints[3][1]=mouseY;
   }
}
function mouseReleased() {

    shortDist();

    magDist();

    // Stop dragging the labels
     for(i=0;i<4;i++){
      isDragging[i]=false;
     }

     

}
function refereceCircles(){
    push();

    stroke('purple');
    strokeWeight(10);

    point(magneticPoints[0][0], magneticPoints[0][1]);
    point(magneticPoints[1][0], magneticPoints[1][1]);
    point(magneticPoints[2][0], magneticPoints[2][1]);
    point(magneticPoints[3][0], magneticPoints[3][1]);
    // point(magneticPoints[4][0], magneticPoints[4][1]);
    // point(magneticPoints[5][0], magneticPoints[5][1]);
    // point(magneticPoints[6][0], magneticPoints[6][1]);
    
  
    pop();
}
function shortDist() {

    distance=[dist(mouseX,mouseY,magneticPoints[0][0],magneticPoints[0][1]),
              dist(mouseX,mouseY,magneticPoints[1][0],magneticPoints[1][1]),
              dist(mouseX,mouseY,magneticPoints[2][0],magneticPoints[2][1]),
              dist(mouseX,mouseY,magneticPoints[3][0],magneticPoints[3][1]),
              ];

    shortestDistance=Math.min(...distance);

    shortIndex=distance.indexOf(shortestDistance);

}

function magDist(){

    if(isDragging[0])
    if(shortestDistance < magneticDistance){
      initialPoints[0][0]=magneticPoints[shortIndex][0];
      initialPoints[0][1]=magneticPoints[shortIndex][1];
    }
    else{
      initialPoints[0][0]=3.5*width/10;
      initialPoints[0][1]=3*height/15;
    }

    if(isDragging[1])
    if(shortestDistance < magneticDistance){
      initialPoints[1][0]=magneticPoints[shortIndex][0];
      initialPoints[1][1]=magneticPoints[shortIndex][1];
    }
    else{
      initialPoints[1][0]=3.5*width/10;
      initialPoints[1][1]=2*height/15;
    }

    if(isDragging[2])
    if(shortestDistance < magneticDistance){
      initialPoints[2][0]=magneticPoints[shortIndex][0];
      initialPoints[2][1]=magneticPoints[shortIndex][1];
    }
    else{
      initialPoints[2][0]=3.5*width/10;
      initialPoints[2][1]=3*height/15;
    }

    if(isDragging[3])
    if(shortestDistance < magneticDistance){
      initialPoints[3][0]=magneticPoints[shortIndex][0];
      initialPoints[3][1]=magneticPoints[shortIndex][1];
    }
    else{
      initialPoints[3][0]=7*width/10;
      initialPoints[3][1]=2*height/15;
    }
}

function veri(){

  let answerStatus = false;
  veriVal = false;

  if(initialPoints[0][0]===magneticPoints[2][0] && initialPoints[0][1]===magneticPoints[2][1])
    if(initialPoints[1][0]===magneticPoints[0][0] && initialPoints[1][1]===magneticPoints[0][1])
      if(initialPoints[2][0]===magneticPoints[3][0] && initialPoints[2][1]===magneticPoints[3][1])
        if(initialPoints[3][0]===magneticPoints[1][0] && initialPoints[3][1]===magneticPoints[1][1]){
           window.alert("Congratulations!!");
           veriVal = true;
           answerStatus = true;
          }

  if(!veriVal)
    window.alert("Sides are Mismatched :(");
    answerStatus = false;
}
