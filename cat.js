function setup() {
    const canvas = createCanvas(400, 400);
    canvas.parent('canvasContainer');
    noLoop();
}

function draw() {
    background('#f5f5f5');
    
    // Set initial drawing styles
    strokeWeight(1);
    stroke('#333');

    // Draw cat body
    drawCatBody();
    drawCatHead();
    drawFurTexture();
    drawDetails();
}

function drawCatBody() {
    // Main body
    push();
    fill('#696969');
    noStroke();
    // Body shape
    beginShape();
    vertex(150, 200);
    bezierVertex(130, 250, 130, 300, 150, 320);
    bezierVertex(200, 350, 250, 350, 280, 320);
    bezierVertex(300, 300, 300, 250, 280, 200);
    endShape(CLOSE);
    pop();

    // Front leg
    push();
    fill('#5a5a5a');
    noStroke();
    beginShape();
    vertex(160, 280);
    bezierVertex(155, 300, 155, 350, 165, 380);
    bezierVertex(175, 380, 185, 380, 190, 380);
    bezierVertex(195, 350, 195, 300, 190, 280);
    endShape(CLOSE);
    pop();

    // Back leg
    push();
    fill('#5a5a5a');
    noStroke();
    beginShape();
    vertex(240, 280);
    bezierVertex(235, 300, 235, 350, 245, 380);
    bezierVertex(255, 380, 265, 380, 270, 380);
    bezierVertex(275, 350, 275, 300, 270, 280);
    endShape(CLOSE);
    pop();

    // Tail
    push();
    fill('#696969');
    noStroke();
    beginShape();
    vertex(280, 280);
    bezierVertex(300, 290, 320, 270, 330, 250);
    bezierVertex(340, 230, 340, 210, 330, 200);
    bezierVertex(320, 220, 300, 260, 280, 280);
    endShape(CLOSE);
    pop();
}

function drawCatHead() {
    push();
    // Head shape
    fill('#696969');
    noStroke();
    ellipse(200, 180, 100, 90);

    // Ears
    // Left ear
    push();
    translate(165, 150);
    rotate(-PI/6);
    fill('#696969');
    triangle(0, 0, -15, -30, 15, -15);
    // Inner ear
    fill('#ffcdd2');
    triangle(0, -5, -10, -25, 10, -15);
    pop();

    // Right ear
    push();
    translate(235, 150);
    rotate(PI/6);
    fill('#696969');
    triangle(0, 0, 15, -30, -15, -15);
    // Inner ear
    fill('#ffcdd2');
    triangle(0, -5, 10, -25, -10, -15);
    pop();

    // Eyes
    // Left eye
    fill('#ffeb3b');
    ellipse(180, 175, 25, 20);
    fill('#000');
    ellipse(180, 175, 8, 16);
    fill('#fff');
    ellipse(177, 172, 5, 5);

    // Right eye
    fill('#ffeb3b');
    ellipse(220, 175, 25, 20);
    fill('#000');
    ellipse(220, 175, 8, 16);
    fill('#fff');
    ellipse(217, 172, 5, 5);

    // Nose
    fill('#ffa4a4');
    triangle(198, 190, 202, 190, 200, 195);

    // Mouth
    stroke('#444');
    strokeWeight(1);
    noFill();
    bezier(200, 195, 195, 200, 190, 200, 185, 198);
    bezier(200, 195, 205, 200, 210, 200, 215, 198);

    // Whiskers
    stroke('#888');
    strokeWeight(0.5);
    // Left whiskers
    line(185, 195, 145, 190);
    line(185, 195, 145, 195);
    line(185, 195, 145, 200);
    // Right whiskers
    line(215, 195, 255, 190);
    line(215, 195, 255, 195);
    line(215, 195, 255, 200);
    pop();
}

function drawFurTexture() {
    // Add fur texture
    push();
    stroke('#5a5a5a');
    strokeWeight(0.3);
    
    // Body fur
    for(let i = 0; i < 300; i++) {
        let x = random(130, 300);
        let y = random(200, 350);
        let len = random(5, 15);
        let angle = random(PI/4, 3*PI/4);
        
        line(x, y, 
            x + cos(angle) * len,
            y + sin(angle) * len);
    }
    
    // Head fur
    for(let i = 0; i < 200; i++) {
        let x = random(150, 250);
        let y = random(140, 220);
        let len = random(3, 8);
        let angle = random(-PI, PI);
        
        line(x, y,
            x + cos(angle) * len,
            y + sin(angle) * len);
    }
    
    // Tail fur
    for(let i = 0; i < 100; i++) {
        let x = random(280, 330);
        let y = random(200, 280);
        let len = random(8, 12);
        let angle = random(-PI/4, PI/4);
        
        line(x, y,
            x + cos(angle) * len,
            y + sin(angle) * len);
    }
    pop();
}

function drawDetails() {
    // Add shadows and highlights
    push();
    noStroke();
    
    // Body shadows
    fill('rgba(0,0,0,0.1)');
    beginShape();
    vertex(150, 250);
    bezierVertex(160, 300, 180, 320, 200, 330);
    bezierVertex(220, 320, 240, 300, 250, 250);
    bezierVertex(200, 280, 150, 250, 150, 250);
    endShape();
    
    // Face shadows
    ellipse(200, 190, 60, 30);
    
    // Highlights
    fill('rgba(255,255,255,0.1)');
    ellipse(200, 160, 40, 20);
    ellipse(200, 250, 80, 40);
    pop();
}

function saveCanvas() {
    save('lifelike-cat.png');
} 