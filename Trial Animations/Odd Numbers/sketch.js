// Declare Shape objects

let Shape=[];

let isDragging=[];


function setup() {
  createCanvas(600, 500);

  //create shape objects
  for(i=0;i<10;i++){
    Shape[i]=new shape();
  }
  
  // Create buttons
  conbut =createButton("Submit");
  conbut.size(70,30);
  conbut.position(60, 450);
  conbut.mousePressed(Veri);

}

function draw() {
  background(220,75);

    

//Shapes

Shape[0].display1(Shape[0].X1,Shape[0].Y1);
Shape[1].display2(Shape[1].X2,Shape[1].Y2);
Shape[2].display3(Shape[2].X3,Shape[2].Y3);
Shape[3].display4(Shape[3].X4,Shape[3].Y4);
Shape[4].display5(Shape[4].X5,Shape[4].Y5);
Shape[5].display6(Shape[5].X6,Shape[5].Y6);
Shape[6].display7(Shape[6].X7,Shape[6].Y7);
Shape[7].display8(Shape[7].X8,Shape[7].Y8);
Shape[8].display9(Shape[8].X9,Shape[8].Y9);
Shape[9].display10(Shape[9].X10,Shape[9].Y10);


  // Reference grid
  push();
  noFill();
  rect(60,380,width*0.80,height*0.20);
  pop();
}



  class shape {
    constructor(){
        this.X1=width*0.2;
        this.Y1=height*0.2;
        this.X2=width*0.3;
        this.Y2=height*0.3;
        this.X3=width*0.7;
        this.Y3=height*0.3;
        this.X4=width*0.8;
        this.Y4=height*0.2;
        this.X5=width*0.4;
        this.Y5=height*0.2;
        this.X6=width*0.2;
        this.Y6=height*0.4;
        this.X7=width*0.6;
        this.Y7=height*0.4;
        this.X8=width*0.6;
        this.Y8=height*0.2;
        this.X9=width*0.8;
        this.Y9=height*0.4;
        this.X10=width*0.4;
        this.Y10=height*0.4;
        
    }

    display1(pX,pY){
      push();
      translate(pX,pY);
      fill(255,125,125);
      ellipse(0,0,50,50);
      pop();
      push();
      textSize(30);
      textAlign(CENTER,CENTER);
      text(1,pX,pY);
      pop();
    }

    display2(pX,pY){
      push();
      translate(pX,pY);
      fill(255,0,0);
      ellipse(0,0,50,50);
      pop();
      push();
      textSize(30);
      textAlign(CENTER,CENTER);
      text(2,pX,pY);
      pop();
    }

    display3(pX,pY){
      push();
      translate(pX,pY);
      fill(0,255,0);
      ellipse(0,0,50,50);
      pop();
      push();
      textSize(30);
      textAlign(CENTER,CENTER);
      text(3,pX,pY);
      pop();
    }

    display4(pX,pY){
      push();
      translate(pX,pY);
      fill(0,255,255);
      ellipse(0,0,50,50);
      pop();
      push();
      textSize(30);
      textAlign(CENTER,CENTER);
      text(4,pX,pY);
      pop();
    }

    display5(pX,pY){
      push();
      translate(pX,pY);
      fill(255,255,0);
      ellipse(0,0,50,50);
      pop();
      push();
      textSize(30);
      textAlign(CENTER,CENTER);
      text(5,pX,pY);
      pop();
    }

    display6(pX,pY){
      push();
      translate(pX,pY);
      fill(255,125,255);
      ellipse(0,0,50,50);
      pop();
      push();
      textSize(30);
      textAlign(CENTER,CENTER);
      text(6,pX,pY);

      pop();
    }

    display7(pX,pY){
      push();
      translate(pX,pY);
      fill(125,125,255);
      ellipse(0,0,50,50);
      pop();
      push();
      textSize(30);
      textAlign(CENTER,CENTER);
      text(7,pX,pY);
      pop();
    }

    display8(pX,pY){
      push();
      translate(pX,pY);
      fill(255,125,0);
      ellipse(0,0,50,50);
      pop();
      push();
      textSize(30);
      textAlign(CENTER,CENTER);
      text(8,pX,pY);
      pop();
    }

    display9(pX,pY){
      push();
      translate(pX,pY);
      fill(125,25,125);
      ellipse(0,0,50,50);
      pop();
      push();
      textSize(30);
      textAlign(CENTER,CENTER);
      text(9,pX,pY);
      pop();
    }

    display10(pX,pY){
      push();
      translate(pX,pY);
      fill(25,125,255);
      ellipse(0,0,50,50);
      pop();
      push();
      textSize(30);
      textAlign(CENTER,CENTER);
      text(10,pX,pY);
      pop();
    }

  }
  
   function mousePressed() {

    // Check if the mouse is over the shape
    
      if (dist(mouseX, mouseY, Shape[0].X1,Shape[0].Y1)<25) {
        isDragging[0] = true;
      }
      
      if (dist(mouseX, mouseY, Shape[1].X2,Shape[1].Y2)<25) {
        isDragging[1] = true;
      }

      if (dist(mouseX, mouseY, Shape[2].X3,Shape[2].Y3)<25) {
        isDragging[2] = true;
      }

      if (dist(mouseX, mouseY, Shape[3].X4,Shape[3].Y4)<25) {
        isDragging[3] = true;
      }

      if (dist(mouseX, mouseY, Shape[4].X5,Shape[4].Y5)<25) {
        isDragging[4] = true;
      }

      if (dist(mouseX, mouseY, Shape[5].X6,Shape[5].Y6)<25) {
        isDragging[5] = true;
      }

      if (dist(mouseX, mouseY, Shape[6].X7,Shape[6].Y7)<25) {
        isDragging[6] = true;
      }

      if (dist(mouseX, mouseY, Shape[7].X8,Shape[7].Y8)<25) {
        isDragging[7] = true;
      }

      if (dist(mouseX, mouseY, Shape[8].X9,Shape[8].Y9)<25) {
        isDragging[8] = true;
      }

      if (dist(mouseX, mouseY, Shape[9].X10,Shape[9].Y10)<25) {
        isDragging[9] = true;
      }
    }
  

  function mouseReleased() {
    // Stop dragging the shape
     for(i=0;i<10;i++){
      isDragging[i]=false;
     }

  }

  function mouseDragged() {

    if(isDragging[0]){Shape[0].X1=mouseX;Shape[0].Y1=mouseY;}
    if(isDragging[1]){Shape[1].X2=mouseX;Shape[1].Y2=mouseY;}
    if(isDragging[2]){Shape[2].X3=mouseX;Shape[2].Y3=mouseY;}
    if(isDragging[3]){Shape[3].X4=mouseX;Shape[3].Y4=mouseY;}
    if(isDragging[4]){Shape[4].X5=mouseX;Shape[4].Y5=mouseY;}
    if(isDragging[5]){Shape[5].X6=mouseX;Shape[5].Y6=mouseY;}
    if(isDragging[6]){Shape[6].X7=mouseX;Shape[6].Y7=mouseY;}
    if(isDragging[7]){Shape[7].X8=mouseX;Shape[7].Y8=mouseY;}
    if(isDragging[8]){Shape[8].X9=mouseX;Shape[8].Y9=mouseY;}
    if(isDragging[9]){Shape[9].X10=mouseX;Shape[9].Y10=mouseY;}

  }
 
  function Veri(){
    let check=false;
    if(Shape[0].X1>60 && Shape[0].X1<540 && Shape[0].Y1>380 && Shape[0].Y1<480){
      if(Shape[2].X3>60 && Shape[2].X3<540 && Shape[2].Y3>380 && Shape[2].Y3<480){
        if(Shape[4].X5>60 && Shape[4].X5<540 && Shape[4].Y5>380 && Shape[4].Y5<480){
          if(Shape[6].X7>60 && Shape[6].X7<540 && Shape[6].Y7>380 && Shape[6].Y7<480){
            if(Shape[8].X9>60 && Shape[8].X9<540 && Shape[8].Y9+40>380 && Shape[8].Y9<480){
              alert("Congradulations!!");
              check=true;
            }
          }
        }
      }
    }
    if(!check){
      alert("The set should contain all the Odd natural numbers less than 10")
    }
  }