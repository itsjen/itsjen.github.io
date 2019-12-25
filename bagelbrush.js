function setup() {
  // put setup code here
  createCanvas(1900,1100);
}

function draw() {
  // put drawing code here

  //draw an ellipse, with the center 50 pixels over from the left and 50 pixels down from the top, with a width and height of 80 pixels
  //ellipse(400, 400, 80, 80)

  //drawing white circles at the position of the mouse. When a mouse button is pressed, the circle color changes to black
  
colorMode(HSB);
  // background(frameCount % 360, 100, 100);
  //if (mouseIsPressed) {
  //	fill(230);
  //} else {
  //	fill(255);
  //}

  //hue, saturation, brightness
  // background(frameCount % 360, 100, 100);
  if(mouseIsPressed){
   noStroke();
    stroke((5*frameCount) % 200, 40, 100);
    fill((5*frameCount) % 360, 27, 98);

    // ellipse(mouseX, mouseY, 30,30);
    strokeWeight(1);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  colorMode(RGB),

  ellipse(mouseX, mouseY, 200,200);
}