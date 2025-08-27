/* VARIABLES */
let eyeWidth = 50;
let eyeHeight = 40;
let pupilWidth = 22;
let pupilHeight = 25;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  // Draw hair
  fill('#4a2e19');  // Dark brown hair
  rect(200, 225, 250, 300, 100, 100, 0, 0);  // Long part of hair
  triangle(130, 20, 110, 200, 150, 120);  // Left space bun
  triangle(270, 20, 250, 200, 290, 120);  // Right space bun

  // Face
  fill('#d1a56f');  // Brown skin colour
  ellipse(width/2, height/2, 175, 200);  // Face shape

  // Bangs
  fill('#4a2e19');  // Dark brown hair
  arc(200, 150, 180, 120, 180, 0);  // Bangs

  // Eyes
  if (mouseIsPressed) {
    // Eyes closed
    fill(0);
    ellipse(170, 170, eyeWidth, eyeHeight/8);
    ellipse(230, 170, eyeWidth, eyeHeight/8);
  }
  else {
    // Eyes open
    fill(255);  // White colour for eyes
    ellipse(170, 170, eyeWidth, eyeHeight);  // Left eye
    ellipse(230, 170, eyeWidth, eyeHeight);  // Right eye
  }
  // Pupils
  if (mouseIsPressed) {
    // Pupils closed
    ellipse(170, 170, pupilWidth, pupilHeight/8);
    ellipse(230, 170, pupilWidth, pupilHeight/8);
  } 
  else {
    // Pupils open
    fill('#4a2e19');  // Black colour for pupils
    ellipse(170, 170, pupilWidth, pupilHeight);  // Left pupil
    ellipse(230, 170, pupilWidth, pupilHeight);  // Right pupil
  }

  // Mouth
  fill('#d16f99');  // Pink colour for mouth
  arc(200, 230, 50, 50, 0, 180);  // Smiling mouth

  // Draw earrings
  fill('#FFD700');  // Gold colour
  rect(105, 250, 20, 60);  // Left earring
  rect(295, 250, 20, 60);  // Right earring

  // Text
  fill(0);  // Black colour for text
  textSize(12);
  text("Oh frabjous day! Callooh! Callay!", 10, 20);

  // Directions for mouse press
  fill(0);
  textSize(15);
  text('Click to see \nme blink.', 300, 350);
        }
