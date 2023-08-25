
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

  initialPoints=[[3.5*width/10,3*height/15],
                 [3.5*width/10,2*height/15],
                 [6.5*width/10,3*height/15],
                 [6.5*width/10,2*height/15],
                 ];
  

  magneticPoints=[[10*width/20, 19*height/20],
                  [17.5*width/20, 15*height/20],
                  [10*width/20, 14*height/20],
                  [14*width/20, 9*height/20],
                  ];

  magneticDistance=width/10;

  // Create buttons
 
  let subBut = createButton("Submit");
  subBut.position(1*width/10,19*height/20);
  subBut.mousePressed(veri);

  
}

function draw() {
  background("#42ccf6");

  //Double Triangles.

  doubleTriangles(25,30,width/6,9*height/10,350);

  //constructions

  //constructions(25,30,width/6,9*height/10,350);

  //Arcs

  angleArcs(25,30,width/6,9*height/10,350);

  // Angle Container

  push();
  noFill();
  strokeWeight(2);
  rect(width/6,height/15,4*width/6,2*height/10);
  pop();

  //Angles
  angles();

  //sides
  sides();

  //reference circles

  //refereceCircles();

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

/*function constructions(xAngle,yAngle,xStart,yStart,Hypo){

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
}*/

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

   // arc(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle),Hypo*0.2,Hypo*0.2,90,(90+90-(xAngle+yAngle)));

    //arc(xStart+Hypo*cos(xAngle+yAngle),yStart-Hypo*sin(xAngle+yAngle),Hypo*0.25,Hypo*0.25,90-xAngle,90);

  pop();
} 

function angles(){
  push();
  textSize(20);
  textAlign(CENTER,CENTER);
  rectMode(CENTER);

 // rect(initialPoints[0][0],initialPoints[0][0],15,15);
  text('x',5.4*width/20, 17.6*height/20);
 // rect(initialPoints[0][0],y1pos,10,20);
  text('y',5.1*width/20,16.5*height/20);

  text('1',3.2*width/10,6*height/10);
 /*rect(initialPoints[0][0],initialPoints[0][0],40,20);
  text('90-x',initialPoints[4][0],initialPoints[4][1]);
 // rect(x3pos,initialPoints[0][0],40,20);
  text('90-x',initialPoints[2][0],initialPoints[2][1]);
 // rect(initialPoints[0][0],initialPoints[0][1],80,20);
  //text('90-(x+y)',initialPoints[0][0],initialPoints[0][1]);
 // rect(initialPoints[0][0],initialPoints[0][0],15,15);
  text('x',initialPoints[3][0],initialPoints[3][1]);
 // rect(initialPoints[0][0],initialPoints[0][0],15,15)
  text('x',initialPoints[1][0],initialPoints[1][1]);*/

  pop();
}

function sides(){
  push();
  textSize(20);
  textAlign(CENTER,CENTER);
  rectMode(CENTER);

  //rect(initialPoints[0][0],initialPoints[0][1],60,20);
  text('cos(x)',initialPoints[0][0],initialPoints[0][1]);

  //rect(initialPoints[1][0],initialPoints[1][1],60,20);
  text('sin(x)',initialPoints[1][0],initialPoints[1][1]);

  //rect(initialPoints[2][0],initialPoints[2][1],60,20);
  text('cos(y)',initialPoints[2][0],initialPoints[2][1]);

  //rect(initialPoints[3][0],initialPoints[3][1],60,20);
  text('sin(y)',initialPoints[3][0],initialPoints[3][1]);

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

 /* if(mouseX <initialPoints[4][0]+20 && mouseX >initialPoints[4][0]-20 && mouseY < initialPoints[4][1]+10 && mouseY > initialPoints[4][1]-10)
    isDragging[4]=true;

  if(mouseX < initialPoints[5][0]+5 && mouseX > initialPoints[5][0]-5 && mouseY <initialPoints[5][1]+10 && mouseY >initialPoints[5][1]-10)
    isDragging[5]=true;

  if(mouseX < initialPoints[6][0]+7.5 && mouseX > initialPoints[6][0]-7.5 && mouseY < initialPoints[6][1]+7.5 && mouseY > initialPoints[6][1]-7.5)
    isDragging[6]=true; */
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

   /*if(isDragging[4]){
    initialPoints[4][0]=mouseX;
    initialPoints[4][1]=mouseY;
   }

   if(isDragging[5]){
    initialPoints[5][0]=mouseX;
    initialPoints[5][1]=mouseY;
   }

   if(isDragging[6]){
    initialPoints[6][0]=mouseX;
    initialPoints[6][1]=mouseY;
   }*/
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
    //point(magneticPoints[4][0], magneticPoints[4][1]);
    //point(magneticPoints[5][0], magneticPoints[5][1]);
    //point(magneticPoints[6][0], magneticPoints[6][1]);
    
  
    pop();
}

function dist(x1,y1,x2,y2){
    
    return sqrt((x2-x1)**2 +(y2-y1)**2);

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
      initialPoints[2][0]=6.5*width/10;
      initialPoints[2][1]=3*height/15;
    }

    if(isDragging[3])
    if(shortestDistance < magneticDistance){
      initialPoints[3][0]=magneticPoints[shortIndex][0];
      initialPoints[3][1]=magneticPoints[shortIndex][1];
    }
    else{
      initialPoints[3][0]=6.5*width/10;
      initialPoints[3][1]=2*height/15;
    }
}

function veri(){

  let answerStatus = false;
  veriVal = false;

  if(initialPoints[0][0]===magneticPoints[0][0] && initialPoints[0][1]===magneticPoints[0][1])
    if(initialPoints[1][0]===magneticPoints[1][0] && initialPoints[1][1]===magneticPoints[1][1])
      if(initialPoints[2][0]===magneticPoints[2][0] && initialPoints[2][1]===magneticPoints[2][1])
        if(initialPoints[3][0]===magneticPoints[3][0] && initialPoints[3][1]===magneticPoints[3][1]){
           window.alert("Congratulations!!");
           veriVal = true;
           answerStatus = true;
          }

  if(!veriVal)
    window.alert("Sides are Mismatched :(");
    answerStatus = false;
}