let circle1Center, circle2Center;
let circleRadius = 100;
let angle1, angle2 = 0;
let initialAngle1 = 0, initialAngle2 = 0;

let submitButton;
let resultMessage = "";

function setup() {
  createCanvas(800, 500); // Adjusted canvas height for the button
  circle1Center = createVector(width / 4, height / 2);
  circle2Center = createVector(3 * width / 4, height / 2);

  angle1 = radians(300); // Fixing the angle to 300 degrees in radians

  // Create the submit button
  submitButton = createButton('Submit');
  submitButton.position(circle2Center.x - 40, circle2Center.y + circleRadius + 20);
  submitButton.style('background-color', 'green');
  submitButton.style('color', 'white');
  submitButton.style('padding', '10px 20px');
  submitButton.style('font-size', '16px');
  submitButton.mousePressed(submitHandler);
}

function draw() {
  background(220);

  // Draw the first circle with the fixed angle
  drawCircle(circle1Center, angle1, initialAngle1);

  // Draw the second circle
  drawCircle(circle2Center, angle2, initialAngle2);

  // Display the result message
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(0);
  text(resultMessage, width / 2, height - 40);
}

function drawCircle(center, currentAngle, initialAngle) {
  // Calculate the position of the movable radius endpoint
  let endpointX = center.x + circleRadius * cos(currentAngle);
  let endpointY = center.y + circleRadius * sin(currentAngle);

  // Calculate the angle in degrees from the initial position
  let angleDegrees = int(degrees(currentAngle - initialAngle));
  if (angleDegrees < 0) {
    angleDegrees += 360;
  }

  // Draw the fixed circle
  noFill();
  stroke(0);
  ellipse(center.x, center.y, circleRadius * 2);

  // Draw the x and y axes
  stroke(150);
  line(center.x, center.y - circleRadius, center.x, center.y + circleRadius);
  line(center.x - circleRadius, center.y, center.x + circleRadius, center.y);

  // Draw the movable radius line
  line(center.x, center.y, endpointX, endpointY);

  // Draw the endpoint as a small circle
  fill(0);
  ellipse(endpointX, endpointY, 8);

  // Draw the angle label
  textAlign(LEFT, CENTER);
  textSize(16);
  text(`Angle: ${angleDegrees}°`, center.x + circleRadius + 10, center.y - circleRadius);

  // Update the angle based on mouse position
  if (mouseIsPressed && center === circle2Center) {
    let distance = dist(mouseX, mouseY, center.x, center.y);
    if (distance <= circleRadius) {
      angle2 = atan2(mouseY - center.y, mouseX - center.x);
    }
  }
}

function mousePressed() {
  let distance2 = dist(mouseX, mouseY, circle2Center.x, circle2Center.y);
  if (distance2 <= circleRadius) {
    initialAngle2 = atan2(mouseY - circle2Center.y, mouseX - circle2Center.x);
  }
}

function submitHandler() {
  // Check if the angle in the second circle is 210 degrees
  let angleDegrees2 = int(degrees(angle2 - initialAngle2));
  if (angleDegrees2 < 0) {
    angleDegrees2 += 360;
  }

  if (angleDegrees2 === 210) {
    resultMessage = "Success!";
  } else {
    resultMessage = "Retry";
  }
}

