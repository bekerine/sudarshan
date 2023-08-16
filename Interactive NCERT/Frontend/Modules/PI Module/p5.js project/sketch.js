let circle1, circle2;
let resetButton;
let successMessage = false;
let activeCircle = null;

function setup() {
  createCanvas(400, 250);

  circle1 = new Circle(100, 150, 50);
  circle2 = new Circle(300, 150, 50);

  resetButton = createButton("Reset");
  resetButton.position(10, 10);
  resetButton.mousePressed(resetRadii);
}

function resetRadii() {
  circle1.resetRadius();
  circle2.resetRadius();
  successMessage = false;
}

class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.angle = 0;
  }

  resetRadius() {
    this.angle = 0;
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
    }

    // Calculate the position of the end point of the radius line
    let endX = this.x + this.r * cos(this.angle);
    let endY = this.y + this.r * sin(this.angle);

    // Ensure the end point stays inside the circle
    let d = dist(this.x, this.y, endX, endY);
    if (d > this.r) {
      endX = this.x + this.r * cos(this.angle);
      endY = this.y + this.r * sin(this.angle);
    }

    // Draw the radius line
    stroke(255, 0, 0);
    line(this.x, this.y, endX, endY);

    // Display the angle as text
    noStroke();
    fill(0);
    text(round(degrees(this.angle)) + "°", this.x + this.r + 10, this.y);

    // Check for the completion condition
    if (this == circle2 && round(degrees(this.angle)) === 90 - round(degrees(circle1.angle))) {
      successMessage = true;
    }
  }
}

function mousePressed() {
  if (circle1.isMouseInside() || circle2.isMouseInside()) {
    activeCircle = circle1.isMouseInside() ? circle1 : circle2;
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

  // Display "Successfully Completed" message if the condition is met
  if (successMessage) {
    textSize(20);
    textAlign(CENTER);
    fill(0, 128, 0);
    text("Successfully Completed", width / 2, height - 30);
  }
}
