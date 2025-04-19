let x 
let delta

function setup() {
  // create a canvas with a width of 400 pixels and a height of 400 pixels
  c = createCanvas(400, 400);
  
  x = c.width / 2 
  delta = 1
  
  btn1 = select('#button1')
  btn2 = select('#button2')
  btn3 = select('#button3')
  btn4 = select('#button4')
  
  button(btn1, 250, 'blue')
  button(btn2, 300, 'green')
  button(btn3, 350, 'red')
  button(btn4, 400, 'orange')
  
}

function draw() {
  // set the background color to white
  background(50);
  
  // set the fill color to blue
  fill(0, 100, 255);
  
  // set the stroke color to blackß
  stroke(0);
  
  if (x < 10 || x > c.width-10) {
      delta = -delta
  }
  
  x += delta
  // draw a circle at the center of the canvas with a radius of 50 pixels
  circle(x, height - 30, 20);
 
}

function button(btn, y_pos, colour) {

  btn.position(75, y_pos);
  btn.style('background-color', colour);
  btn.style('color', 'black');
  btn.style('font-size', '120%');
  btn.style('border', 'none');
  btn.style('padding', '10');
  btn.style('display', 'inline-block');
  btn.style('width', '250px');
  
}
