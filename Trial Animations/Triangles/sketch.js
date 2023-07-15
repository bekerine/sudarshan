// Declare Shape objects

let Shape=[];

let isDragging=[];


function setup() {
  createCanvas(600, 500);

  //create shape objects
  for(i=0;i<8;i++){
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
        this.X2=width*0.4;
        this.Y2=height*0.2;
        this.X3=width*0.6;
        this.Y3=height*0.2;
        this.X4=width*0.8;
        this.Y4=height*0.2;
        this.X5=width*0.15;
        this.Y5=height*0.4;
        this.X6=width*0.35;
        this.Y6=height*0.4;
        this.X7=width*0.6;
        this.Y7=height*0.4;
        this.X8=width*0.75;
        this.Y8=height*0.4;
        
    }

    display1(pX=width*0.2,pY=height*0.2){
      push();
      translate(pX,pY);
      rotate(PI);
      this.polygon(0, 0, 30, 3,'rgb(255,0,255)');
      pop();
    }

    display2(pX=width*0.4,pY=height*0.2){
      push();
      translate(pX,pY);
      this.polygon(0, 0, 30, 4,[125,125,255]);
      pop();
    }

    display3(pX=width*0.6,pY=height*0.2){
      push();
      translate(pX,pY);
      this.polygon(0, 0, 30, 6,[125,125,125]);
      pop();
    }

    display4(pX=width*0.8,pY=height*0.2){
      push();
      fill(0,255,255);
      ellipse(pX,pY,60,40);
      pop()
    }

    display5(pX=width*0.15,pY=height*0.4){
      push();
      fill(255,255,0);
      triangle(pX,pY,
        pX,pY+height*0.15,
        pX+width*0.15,pY+height*0.15);
      pop();
    }

    display6(pX=width*0.35,pY=height*0.4){
      push();
      fill(0,0,255);
      rect(pX,pY,
        width*0.1,height*0.2,
        width*0.3,height*0.55,
        width*0.3,height*0.4);
      pop();
    }

    display7(pX=width*0.6,pY=height*0.4){
      push();
      fill(0,255,0);
      triangle(pX,pY,
        pX-width*0.05,pY+height*0.15,
        pX+width*0.08,pY+height*0.05);
        pop();
    }

    display8(pX=width*0.75,pY=height*0.4){
      push();
      fill(255,0,0);
      rect(pX,pY,40,60);
      pop();
    }
    

    polygon(x, y, radius, npoints,coLor) {
      let angle = TWO_PI / npoints;
      push();
      fill(coLor);
      beginShape();
      for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + sin(a) * radius;
        let sy = y + cos(a) * radius;
        vertex(sx, sy);
      }
      endShape(CLOSE);
      pop();
    }


  }
  
   function mousePressed() {

     

    // Check if the mouse is over the shape
    let pixelColor = get(mouseX,mouseY);
    
      if (pixelColor[0] === 255 && pixelColor[1]===0 && pixelColor[2]===255) {
        isDragging[0] = true;
      }
      
      if (pixelColor[0] === 125 && pixelColor[1]===125 && pixelColor[2]===255) {
        isDragging[1] = true;
      }

      if (pixelColor[0] === 125 && pixelColor[1]===125 && pixelColor[2]===125) {
        isDragging[2] = true;
      }

      if (pixelColor[0] === 0 && pixelColor[1]===255 && pixelColor[2]===255) {
        isDragging[3] = true;
      }

      if (pixelColor[0] === 255 && pixelColor[1]===255 && pixelColor[2]===0) {
        isDragging[4] = true;
      }

      if (pixelColor[0] === 0 && pixelColor[1]=== 0 && pixelColor[2]===255) {
        isDragging[5] = true;
      }

      if (pixelColor[0] === 0 && pixelColor[1]===255 && pixelColor[2]===0) {
        isDragging[6] = true;
      }

      if (pixelColor[0] === 255 && pixelColor[1]===0 && pixelColor[2]===0) {
        isDragging[7] = true;
      }
    }
  

  function mouseReleased() {
    // Stop dragging the shape
     for(i=0;i<8;i++){
      isDragging[i]=false;
     }

  }

  function mouseDragged() {

    if(isDragging[0]){Shape[0].X1=mouseX;Shape[0].Y1=mouseY;}
    if(isDragging[1]){Shape[1].X2=mouseX;Shape[1].Y2=mouseY;}
    if(isDragging[2]){Shape[2].X3=mouseX;Shape[2].Y3=mouseY;}
    if(isDragging[3]){Shape[3].X4=mouseX;Shape[3].Y4=mouseY;}
    if(isDragging[4]){Shape[4].X5=mouseX-30;Shape[4].Y5=mouseY-40;}
    if(isDragging[5]){Shape[5].X6=mouseX-30;Shape[5].Y6=mouseY-40;}
    if(isDragging[6]){Shape[6].X7=mouseX;Shape[6].Y7=mouseY-25;}
    if(isDragging[7]){Shape[7].X8=mouseX-15;Shape[7].Y8=mouseY-20;}

  }
 
  function Veri(){
    let check=false;
    if(Shape[0].X1>60 && Shape[0].X1<540 && Shape[0].Y1>380 && Shape[0].Y1<480){
      if(Shape[4].X5+30>60 && Shape[4].X5<540 && Shape[4].Y5+40>380 && Shape[4].Y5<480){
        if(Shape[6].X7>60 && Shape[6].X7<540 && Shape[6].Y7+27>380 && Shape[6].Y7<480){
              alert("Congratulations!!");
              check=true;
        }
      }
    }
    if(!check){
      alert("The set should contain all the  triangles")
    }
  }