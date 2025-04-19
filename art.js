function setup() {
    const canvas = createCanvas(400, 400);
    canvas.parent('canvasContainer');
    noLoop();
}

function draw() {
    background('#f0f0f0');
    
    // Set initial drawing styles
    stroke('#333');
    strokeWeight(2);
    strokeCap(ROUND);
    strokeJoin(ROUND);

    // Draw cat's head (main shape)
    fill('#8b8b8b');
    ellipse(200, 200, 240, 200);

    // Left ear
    push();
    translate(135, 160);  // Moved to upper left of head circle
    rotate(-PI/4);  // Angled slightly outward
    
    // Outer ear shape
    fill('#8b8b8b');
    beginShape();
    vertex(0, 0);
    vertex(-20, -50);  // Ear tip
    vertex(30, -20);
    endShape(CLOSE);

    // Inner ear - main pink part
    fill('#ffcdd2');
    beginShape();
    vertex(2, -5);
    vertex(-15, -40);  // Inner tip
    vertex(25, -18);
    endShape(CLOSE);

    // Inner ear details
    stroke('#666');
    strokeWeight(1);
    // Inner ear fur lines
    line(0, -10, -10, -35);
    line(5, -15, -5, -35);
    line(10, -20, 0, -30);
    pop();

    // Right ear
    push();
    translate(265, 160);  // Moved to upper right of head circle
    rotate(PI/4);  // Angled slightly outward
    
    // Outer ear shape
    fill('#8b8b8b');
    beginShape();
    vertex(0, 0);
    vertex(20, -50);  // Ear tip
    vertex(-30, -20);
    endShape(CLOSE);

    // Inner ear - main pink part
    fill('#ffcdd2');
    beginShape();
    vertex(-2, -5);
    vertex(15, -40);  // Inner tip
    vertex(-25, -18);
    endShape(CLOSE);

    // Inner ear details
    stroke('#666');
    strokeWeight(1);
    // Inner ear fur lines
    line(0, -10, 10, -35);
    line(-5, -15, 5, -35);
    line(-10, -20, 0, -30);
    pop();

    // Add ear shadows for depth
    noStroke();
    fill('rgba(0, 0, 0, 0.1)');
    // Left ear shadow
    beginShape();
    vertex(135, 160);
    vertex(120, 115);
    vertex(155, 145);
    endShape(CLOSE);
    
    // Right ear shadow
    beginShape();
    vertex(265, 160);
    vertex(280, 115);
    vertex(245, 145);
    endShape(CLOSE);

    // Draw eyes
    // Left eye
    fill('#ffeb3b');
    ellipse(150, 180, 50, 50);
    
    // Left eye pupil
    fill('#000');
    ellipse(150, 180, 16, 40);

    // Left eye highlight
    fill('#fff');
    ellipse(160, 170, 16, 16);

    // Right eye
    fill('#ffeb3b');
    ellipse(250, 180, 50, 50);
    
    // Right eye pupil
    fill('#000');
    ellipse(250, 180, 16, 40);

    // Right eye highlight
    fill('#fff');
    ellipse(260, 170, 16, 16);

    // Draw nose
    fill('#ff9d9d');
    triangle(200, 210, 185, 225, 215, 225);

    // Draw mouth
    noFill();
    bezier(185, 225, 190, 240, 190, 240, 200, 240);
    bezier(215, 225, 210, 240, 210, 240, 200, 240);

    // Draw whiskers
    stroke('#666');
    strokeWeight(1.5);
    
    // Left whiskers
    bezier(170, 220, 120, 200, 80, 200, 40, 190);
    bezier(170, 220, 120, 220, 80, 220, 40, 220);
    bezier(170, 220, 120, 240, 80, 240, 40, 250);

    // Right whiskers
    bezier(230, 220, 280, 200, 320, 200, 360, 190);
    bezier(230, 220, 280, 220, 320, 220, 360, 220);
    bezier(230, 220, 280, 240, 320, 240, 360, 250);

}

function saveCanvas() {
    save('cat-face.png');
} 