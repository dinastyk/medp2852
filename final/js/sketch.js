function setup() {

const cnv = createCanvas(windowWidth, windowHeight);
cnv.style('position', 'fixed');
cnv.style('top', '0');
cnv.style('left', '0');
cnv.style('z-index', '-1');       // behind other page content
cnv.style('pointer-events', 'none'); // so it doesn’t intercept clicks
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);   
}


  // Set background to black
  background(0);
  // Set width of the lines
  strokeWeight(10);
  // Set color mode to hue-saturation-brightness (HSB)
  colorMode(HSB);
  describe('A blank canvas where the user draws by dragging the mouse');
}

function mouseDragged() {

  let lineHue = mouseX - mouseY;
  stroke(lineHue, 90, 90);
  line(pmouseX, pmouseY, mouseX, mouseY);
}