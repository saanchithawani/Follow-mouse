let textToDraw = "follow me";
let positions = [];
let font;
let numCopies = 6; // Number of positions per letter

function preload() {
  font = loadFont('AlteHaasGroteskBold.ttf'); // Ensure the font is in the project folder
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(25);
  
  // Initialize positions
  for (let i = 0; i < textToDraw.length * numCopies; i++) {
    positions.push(createVector(-width / 2, -height / 2));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51, 0, 102);
  fill(204, 255, 153);
  textSize(25);

  // Shift positions like a trail
  for (let i = positions.length - 1; i > 0; i--) {
    positions[i].set(positions[i - 1]);
  }
  positions[0].set(mouseX, mouseY);

  // Draw the letters with spaced-out positions
  for (let i = 0; i < textToDraw.length; i++) {
    let posIndex = i * numCopies;
    text(textToDraw.charAt(i), positions[posIndex].x, positions[posIndex].y);
  }
}
