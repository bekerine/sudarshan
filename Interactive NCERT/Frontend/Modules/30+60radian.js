let circle1, circle2;
let resetButton;
let submitButton;
let retryButton;
let nextButton;
let successMessage = false;
let activeCircle = null;
let questionNumber = 1;


function setup() {
  createCanvas(700, 400);

  circle1 = new Circle(200,200, 100, PI*-0.333); // The first circle's radius is set to 150 degrees (PI/2 radians)
  circle2 = new Circle(500, 200, 100, 0, PI); // The second circle's radius starts at 0 degrees (HALF_PI radians)
 


  submitButton = createButton("Submit");
  submitButton.position(290, 50);
  submitButton.mousePressed(checkCondition);
  submitButton.style('font-size', '24px');
  submitButton.style('padding', '5px 20px');
  submitButton.style('border', '');
  submitButton.style('background-color', 'blue');
  submitButton.style('color', 'white');
  submitButton.style('border-radius', '10px');

  retryButton = createButton("Retry");
  retryButton.position(width / 2 - 50, height -90);
  retryButton.mousePressed(resetFigure);
  retryButton.hide();
   retryButton.style('font-size', '24px');
  retryButton.style('padding', '5px 20px');
  retryButton.style('border', '');
  retryButton.style('background-color', 'red');
  retryButton.style('color', 'white');
  retryButton.style('border-radius', '10px');

  nextButton = createButton("Next Question");
  nextButton.position(width / 2-100, height / 2 + 100);
  nextButton.mousePressed(nextQuestion);
  nextButton.hide();
  nextButton.style('font-size', '24px');
  nextButton.style('padding', '5px 20px');
  nextButton.style('border', '');
  nextButton.style('background-color', 'green');
  nextButton.style('color', 'white');
  nextButton.style('border-radius', '10px');

}

function resetFigure() {
  circle2.resetRadius();
  successMessage = false;
  retryButton.hide();
  resetButton.show();
  nextButton.hide();
}

function checkCondition() {
  if (round(degrees(circle2.angle)) === -30) {
    successMessage = true;
    retryButton.hide();
    nextButton.show();
  } else {
    successMessage = false;
    retryButton.show();
    nextButton.hide();
  }
  resetButton.hide();
}

function nextQuestion() {
  questionNumber++;
  circle2.resetRadius();
  successMessage = false;
  retryButton.hide();
  nextButton.hide();
  resetButton.show();
}

class Circle {
  constructor(x, y, r, initialAngle, angleLimit) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.initialAngle = initialAngle;
    this.angle = initialAngle;
    this.angleLimit = angleLimit;
  }

  resetRadius() {
    this.angle = this.initialAngle;
  }

  isMouseInside() {
    let d = dist(this.x, this.y, mouseX, mouseY);
    return d < this.r;
  }

  display() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);

    // Draw X and Y lines at the origin
    stroke(0);
    line(this.x, this.y - this.r, this.x, this.y + this.r);
    line(this.x - this.r, this.y, this.x + this.r, this.y);

    // Calculate the angle of the radius based on mouse position
    if (activeCircle === this && mouseIsPressed && this.isMouseInside()) {
      let dx = mouseX - this.x;
      let dy = mouseY - this.y;
      this.angle = atan2(dy, dx);
      this.angle = constrain(this.angle, -this.angleLimit, this.angleLimit);
    }

    // Calculate the position of the end point of the radius line
    let endX = this.x + this.r * cos(this.angle);
    let endY = this.y + this.r * sin(this.angle);

    // Draw the radius line
    stroke(255, 0, 0);
    line(this.x, this.y, endX, endY);

    // Display the angle as text
    noStroke();
    fill(0)
    textSize(12);
  textAlign(LEFT);
    text(nf(-this.angle, 1, 2) + " radians", this.x + this.r + 10, this.y + 5);
    text(round(degrees(-this.angle)) + "°"+" Degree", this.x + this.r + 10, this.y + 20);
  }
}

function mousePressed() {
  if (circle2.isMouseInside()) {
    activeCircle = circle2;
  } else {
    activeCircle = null;
  }
}

function mouseReleased() {
  activeCircle = null;
}

function draw() {
  // Clear the canvas and redraw the circles and radius information
  background(220);
  circle1.display();
  circle2.display();

  // Display "Successful" message after clicking submit button and condition is met
  if (successMessage) {
    textSize(20);
    textAlign(CENTER);
    fill(0, 128, 0);
    text("Successful", width / 2, height - 30);
  }
}
