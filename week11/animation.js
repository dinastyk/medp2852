let balls = [];
let ballCount = 10;
let speed = 3;

function setup() {
  createCanvas(720, 400);
  colorMode(HSB);
  for (let i = 0; i < ballCount; i++) {
    balls.push({
      x: random(width),
      yOffset: random(100),
      hue: random(360),
      speed: random(1, 5)
    });
  }
}

function draw() {
  background(0, 0, 10);

  for (let b of balls) {
    fill((b.hue + frameCount) % 360, 90, 90);
    let y = height / 2 + sin(frameCount * 0.05 + b.yOffset) * 100;
    circle(b.x, y, 30);
    b.x += b.speed;

    if (b.x > width + 15) b.x = -15;
  }

  fill(0, 0, 100);
  textSize(16);
  text('Press ↑ or ↓ to change speed', 10, height - 10);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    balls.forEach(b => b.speed += 0.5);
  } else if (keyCode === DOWN_ARROW) {
    balls.forEach(b => b.speed = max(0.5, b.speed - 0.5));
  }
}
