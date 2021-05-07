var mic;


// setup() runs once at the load of the page.
function setup(){
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");
  frameRate(60);
  //new audio object
  mic = new p5.AudioIn();
  //for browser to start listening
  mic.start();
}

// draw() runs in a loop as many times as specified by frameRate() per second.
function draw(){
  background(0,180,255);
}

// windowResized() is called whenever the browser size changes.
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
