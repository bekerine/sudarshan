let angle1 = 0; // Angle for the first circle's radius
let angle2 = 90 - angle1; // Angle for the second circle's radius

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  // Draw the first circle
  drawCircle(200, 200, angle1);

  // Draw the second circle
  drawCircle(500, 200, angle2);
}

function drawCircle(centerX, centerY, circleAngle) {
  ellipse(centerX, centerY, 300, 300);
  line(centerX - 150, centerY, centerX + 150, centerY);
  line(centerX, centerY - 150, centerX, centerY + 150);

  let x = centerX + cos(radians(circleAngle)) * 150;
  let y = centerY + sin(radians(circleAngle)) * 150;

  line(centerX, centerY, x, y);

  drawingContext.setLineDash([5, 5]);

  line(x, y, centerX, y);
  line(x, y, x, centerY);
  circle(centerX + abs(centerY - y), y, 10);

  drawingContext.setLineDash([]);
push()
  // Display angle in degrees below the circle
  textSize(14);
  textAlign(CENTER);

  text(`Angle: ${circleAngle.toFixed(2)}°`, centerX, centerY + 170);
}

function mouseDragged() {
  // Check if the mouse is within the first circle
  if (dist(mouseX, mouseY, 200, 200) < 150) {
    // Update the angle based on the mouse position relative to the center
    angle1 = degrees(atan2(mouseY - 200, mouseX - 200));
    angle2 = 90 - angle1;
  }
}
