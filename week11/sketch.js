let hueOffset = 0;
function setup() {
  createCanvas(710, 400);
  background(0);
  strokeWeight(10);
  colorMode(HSB);
  noFill();
}

function draw() {

  fill(0, 0, 0, 10);
  rect(0, 0, width, height);
}

function mouseDragged() {

  let size = random(5, 20);
  stroke((mouseX + hueOffset) % 360, 90, 90);
  push();
  translate(mouseX, mouseY);
  rotate(radians((mouseY + frameCount) % 360));
  ellipse(0, 0, size, size * 1.5);
  pop();
  hueOffset += 1;
}

function keyPressed() {
  if (key === 'C' || key === 'c') {
    background(0); 
  }
}