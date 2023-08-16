let initialPoints=[];

let isDragging=[];

let magneticPoints=[];

let distance=[];

let shortestDistance;

let shortIndex;

let magneticDistance;

let veriVal;


function setup() {
  createCanvas(700, 400);

  for(let i=0;i<8;i++){
    isDragging[i]=false;
  }

  initialPoints=[[3.5*width/10,3*height/15],
                 [3.5*width/10,2*height/15],
                 [6.5*width/10,3*height/15],
                 [6.5*width/10,2*height/15],
                 [4.5*width/10,3*height/15],
                 [4.5*width/10,2*height/15],
                 [5.5*width/10,3*height/15],
                 [5.5*width/10,2*height/15]];
  

  magneticPoints=[[6*width/20, 7*height/20],
                  [7*width/20, 9*height/20],
                  [16*width/20, 6.3*height/20],
                  [17.3*width/20, 8*height/20],
                  [6*width/20, 10.5*height/20],
                  [4.4*width/20, 9*height/20],
                  [16*width/20, 10.5*height/20],
                  [14.5*width/20, 8*height/20]
                ];

  magneticDistance=width/15;

  // Create buttons
                 
  let subBut = createButton("Submit");
  subBut.position(width/2-40,18*height/22);
  subBut.style('background-color', 'green');
  subBut.style('color', 'white');
  subBut.style('padding', '10px 20px');
  subBut.style('font-size', '16px');
  subBut.mousePressed(veri);

}

function draw() {
  background(220);

  // unitCircle

  unitCircle(200,width/4,height/2);

  // Radius and it's components

  radiusAndcomps(200,width/4,height/2,-PI/6);

 // refereceCircles();

  components();

}

function unitCircle(dia, xPos, yPos) {
  
  //circle perimeter
  
  push();

  ellipseMode(CENTER, CENTER);
  noFill();

  circle(xPos, yPos, dia);
  circle(xPos + 1.8* dia, yPos, dia);

  pop();
  
  // Axes
  
  push();

  // Axes of First Circle
  line(xPos-1.5*dia/2,yPos,xPos+1.5*dia/2,yPos);
  line(xPos,yPos-1.5*dia/2,xPos,yPos+1.5*dia/2);
  
  //Axes of Second Circle
  
  line(xPos + (1.8-1.5/2)* dia,yPos,xPos + (1.8+1.5/2)* dia,yPos);
  line(xPos + 1.8* dia,yPos-1.5*dia/2,xPos + 1.8* dia,yPos+1.5*dia/2);


  pop();
  
}

function radiusAndcomps(dia,xPos,yPos,angle){

  //First Circle

  let x1 = xPos + cos(angle) * dia/2;
  let y1 = yPos + sin(angle) * dia/2;

  // Draw the radius as a line from the center to the end point
  line(xPos, yPos, x1, y1);

  //Dashed Line

  push();

  drawingContext.setLineDash([2.5,2.5]);

  line(x1, y1,xPos, y1);
  line(x1, y1, x1, yPos);

  pop();

  //Second Circle

  let x2 = xPos +1.8*dia + cos(-PI/2-angle) * dia/2;
  let y2 = yPos + sin(-PI/2-angle) * dia/2;
 
  // Draw the radius as a line from the center to the end point
  line(xPos+1.8*dia, yPos, x2, y2);
 
  //Dashed Line
 
  push();
 
  drawingContext.setLineDash([2.5,2.5]);
 
  line(x2, y2,xPos+1.8*dia, y2);
  line(x2, y2, x2, yPos);
 
  pop();
}

function refereceCircles(){

  push();

  stroke('purple');
  strokeWeight(5);

  point(magneticPoints[0][0], magneticPoints[0][1]);
  point(magneticPoints[1][0], magneticPoints[1][1]);
  point(magneticPoints[2][0], magneticPoints[2][1]);
  point(magneticPoints[3][0], magneticPoints[3][1]);
  point(magneticPoints[4][0], magneticPoints[4][1]);
  point(magneticPoints[5][0], magneticPoints[5][1]);
  point(magneticPoints[6][0], magneticPoints[6][1]);
  point(magneticPoints[7][0], magneticPoints[7][1]);

  pop();
}

function components(){
  push();
  textSize(10);
  textAlign(CENTER,CENTER);
  rectMode(CENTER);

  //rect(initialPoints[0][0],initialPoints[0][1],60,20);
  text('sin(90-x)',initialPoints[0][0],initialPoints[0][1]);

  //rect(initialPoints[1][0],initialPoints[1][1],60,20);
  text('sin(x)',initialPoints[1][0],initialPoints[1][1]);

  //rect(initialPoints[2][0],initialPoints[2][1],60,20);
  text('sin(x)',initialPoints[2][0],initialPoints[2][1]);

  //rect(initialPoints[3][0],initialPoints[3][1],60,20);
  text('sin(90-x)',initialPoints[3][0],initialPoints[3][1]);

  //rect(initialPoints[0][0],initialPoints[0][1],60,20);
  text('cos(x)',initialPoints[4][0],initialPoints[4][1]);

  //rect(initialPoints[1][0],initialPoints[1][1],60,20);
  text('cos(90-x)',initialPoints[5][0],initialPoints[5][1]);

  //rect(initialPoints[2][0],initialPoints[2][1],60,20);
  text('cos(90-x)',initialPoints[6][0],initialPoints[6][1]);

  //rect(initialPoints[3][0],initialPoints[3][1],60,20);
  text('cos(x)',initialPoints[7][0],initialPoints[7][1]);

  pop();

}

function mousePressed(){

  if(mouseX < initialPoints[0][0]+15 && mouseX > initialPoints[0][0]-15 && mouseY < initialPoints[0][1]+5 && mouseY > initialPoints[0][1]-5)
    isDragging[0]=true;

  if(mouseX < initialPoints[1][0]+15 && mouseX > initialPoints[1][0]-15 && mouseY < initialPoints[1][1]+5  && mouseY > initialPoints[1][1]-5)
    isDragging[1]=true;

  if(mouseX < initialPoints[2][0]+15 && mouseX > initialPoints[2][0]-15 && mouseY < initialPoints[2][1]+5 && mouseY > initialPoints[2][1]-5)
    isDragging[2]=true;

  if(mouseX < initialPoints[3][0]+15 && mouseX > initialPoints[3][0]-15 && mouseY < initialPoints[3][1]+5 && mouseY > initialPoints[3][1]-5)
    isDragging[3]=true;

  if(mouseX <initialPoints[4][0]+15 && mouseX >initialPoints[4][0]-15 && mouseY < initialPoints[4][1]+5 && mouseY > initialPoints[4][1]-5)
    isDragging[4]=true;

  if(mouseX < initialPoints[5][0]+15 && mouseX > initialPoints[5][0]-15 && mouseY <initialPoints[5][1]+5 && mouseY >initialPoints[5][1]-5)
    isDragging[5]=true;

  if(mouseX < initialPoints[6][0]+15 && mouseX > initialPoints[6][0]-15 && mouseY < initialPoints[6][1]+5 && mouseY > initialPoints[6][1]-5)
    isDragging[6]=true; 

  if(mouseX < initialPoints[7][0]+15 && mouseX > initialPoints[7][0]-15 && mouseY < initialPoints[7][1]+5 && mouseY > initialPoints[7][1]-5)
    isDragging[7]=true; 
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

   if(isDragging[4]){
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
   }

   if(isDragging[7]){
    initialPoints[7][0]=mouseX;
    initialPoints[7][1]=mouseY;
   }
}

function mouseReleased() {

    shortDist();

    magDist();

    // Stop dragging the labels
     for(i=0;i<8;i++){
      isDragging[i]=false;
     }

     

}

function shortDist() {

    distance=[dist(mouseX,mouseY,magneticPoints[0][0],magneticPoints[0][1]),
              dist(mouseX,mouseY,magneticPoints[1][0],magneticPoints[1][1]),
              dist(mouseX,mouseY,magneticPoints[2][0],magneticPoints[2][1]),
              dist(mouseX,mouseY,magneticPoints[3][0],magneticPoints[3][1]),
              dist(mouseX,mouseY,magneticPoints[4][0],magneticPoints[4][1]),
              dist(mouseX,mouseY,magneticPoints[5][0],magneticPoints[5][1]),
              dist(mouseX,mouseY,magneticPoints[6][0],magneticPoints[6][1]),
              dist(mouseX,mouseY,magneticPoints[7][0],magneticPoints[7][1])
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

    if(isDragging[4])
    if(shortestDistance < magneticDistance){
      initialPoints[4][0]=magneticPoints[shortIndex][0];
      initialPoints[4][1]=magneticPoints[shortIndex][1];
    }
    else{
      initialPoints[4][0]=4.5*width/10;
      initialPoints[4][1]=3*height/15;
    }

    if(isDragging[5])
    if(shortestDistance < magneticDistance){
      initialPoints[5][0]=magneticPoints[shortIndex][0];
      initialPoints[5][1]=magneticPoints[shortIndex][1];
    }
    else{
      initialPoints[5][0]=4.5*width/10;
      initialPoints[5][1]=2*height/15;
    }

    if(isDragging[6])
    if(shortestDistance < magneticDistance){
      initialPoints[6][0]=magneticPoints[shortIndex][0];
      initialPoints[6][1]=magneticPoints[shortIndex][1];
    }
    else{
      initialPoints[6][0]=5.5*width/10;
      initialPoints[6][1]=3*height/15;
    }

    if(isDragging[7])
    if(shortestDistance < magneticDistance){
      initialPoints[7][0]=magneticPoints[shortIndex][0];
      initialPoints[7][1]=magneticPoints[shortIndex][1];
    }
    else{
      initialPoints[7][0]=5.5*width/10;
      initialPoints[7][1]=2*height/15;
    }
}

function veri(){

  veriVal=false;

  if(initialPoints[0][0]===magneticPoints[0][0] && initialPoints[0][1]===magneticPoints[0][1] 
    || initialPoints[3][0]===magneticPoints[0][0] && initialPoints[3][1]===magneticPoints[0][1] )
    if(initialPoints[1][0]===magneticPoints[1][0] && initialPoints[1][1]===magneticPoints[1][1]
       || initialPoints[2][0]===magneticPoints[1][0] && initialPoints[2][1]===magneticPoints[1][1])
      if(initialPoints[2][0]===magneticPoints[2][0] && initialPoints[2][1]===magneticPoints[2][1]
         || initialPoints[1][0]===magneticPoints[2][0] && initialPoints[1][1]===magneticPoints[2][1])
        if(initialPoints[3][0]===magneticPoints[3][0] && initialPoints[3][1]===magneticPoints[3][1]
           || initialPoints[0][0]===magneticPoints[3][0] && initialPoints[0][1]===magneticPoints[3][1])
           if(initialPoints[4][0]===magneticPoints[4][0] && initialPoints[4][1]===magneticPoints[4][1] 
            || initialPoints[7][0]===magneticPoints[4][0] && initialPoints[7][1]===magneticPoints[4][1] )
            if(initialPoints[5][0]===magneticPoints[5][0] && initialPoints[5][1]===magneticPoints[5][1]
               || initialPoints[6][0]===magneticPoints[5][0] && initialPoints[6][1]===magneticPoints[5][1])
              if(initialPoints[6][0]===magneticPoints[6][0] && initialPoints[6][1]===magneticPoints[6][1]
                 || initialPoints[5][0]===magneticPoints[6][0] && initialPoints[5][1]===magneticPoints[6][1])
                if(initialPoints[7][0]===magneticPoints[7][0] && initialPoints[7][1]===magneticPoints[7][1]
                   || initialPoints[4][0]===magneticPoints[7][0] && initialPoints[4][1]===magneticPoints[7][1]){
           window.alert("Congradulations!!");
           veriVal=true;
          }

  if(!veriVal)
    window.alert("Sides are Mismatched :(")
}
