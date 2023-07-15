let num=210;
let i=0;
let w=50;
let h=100;
let inPut=[],Factor=[],conbut;
const num1=[];

function setup() {
  createCanvas(600, 600);

   // Display 210.
   textSize(30);
   textAlign(CENTER, CENTER);
   text(210,200,100);
 
  // Create buttons
   conbut = createButton("Continue");
   conbut.position(20, 500);
   conbut.mousePressed(Steps);

  noLoop();
}

function draw() {
  background('rgba(125,125,125,0)');

  if(i<4){

 // Factor dispaly
  Factor[i]=createP();
  Factor[i].position(220+i*w,170+i*h);

 // Input display
  inPut[i]=createInput();
  inPut[i].position(130+i*w,170+i*h);
  inPut[i].size(50,30);

  // Arrows 
  drawArrow(200+i*w,120+i*h,160+i*w,160+i*h);
  drawArrow(200+i*w,120+i*h,240+i*w,160+i*h);

  // Borders 
  Border(220+i*w,170+i*h);

  }
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

function Border(x,y){
  
   // Draw a rectangular border around the Factor
  push();
  stroke(0);
  noFill();
  rect(x, y, 58, 36);
  pop();
  
  // Draw a rectangular border around the input
  push();
  stroke(0);
  noFill();
  rect(x-90, y, 58, 36);
  pop();
  
}

function Steps(){

  //Factors
  num1[i] = parseFloat(inPut[i].value());

  if (num1[0] === 2 && num1[1] === undefined) {
    const quotient = num / num1[i];
    Factor[i].html(quotient);
    num=quotient;
    i++;
    redraw();
  }
  else if(num1[0] === 2 && num1[1]===3 && num1[2]===undefined){
    const quotient = num / num1[i];
    Factor[i].html(quotient);
    num=quotient;
    i++;
    redraw();
  }
  else if(num1[0] === 2 && num1[1]===3 && num1[2]===5 && num1[3]===undefined){
    const quotient = num / num1[i];
    Factor[i].html(quotient);
    num=quotient;
    i++;
    redraw();
  }
  else if(num1[0] === 2 && num1[1]===3 && num1[2]===5 && num1[3]===7){
    const quotient = num / num1[i];
    Factor[i].html(quotient);
    num=quotient;
    i++;
    redraw();
  }
}

