let circle1, circle2;
let resetButton;
let submitButton;
let retryButton;
let nextButton;
let successMessage = false;
let activeCircle = null;
let questionNumber = 1;

function setup() {
  createCanvas(400, 250);

  circle1 = new Circle(100, 150, 50, PI*0.165); // The first circle's radius is set to 150 degrees (PI/2 radians)
  circle2 = new Circle(300, 150, 50, 0, PI); // The second circle's radius starts at 0 degrees (HALF_PI radians)


  submitButton = createButton("Submit");
  submitButton.position(40, 10);
  submitButton.mousePressed(checkCondition);

  retryButton = createButton("Retry");
  retryButton.position(width / 2 - 40, height - 40);
  retryButton.mousePressed(resetFigure);
  retryButton.hide();

  nextButton = createButton("Next Question");
  nextButton.position(width / 2 - 45, height / 2 + 50);
  nextButton.mousePressed(nextQuestion);
  nextButton.hide();
}

function resetFigure() {
  circle2.resetRadius();
  successMessage = false;
  retryButton.hide();
  resetButton.show();
  nextButton.hide();
}

function checkCondition() {
  if (round(degrees(circle2.angle)) === 60) {
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
    fill(0);
    text(round(degrees(this.angle)) + "°", this.x + this.r + 10, this.y + 5);
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
