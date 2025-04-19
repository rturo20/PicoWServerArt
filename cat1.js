function setup() {
    const canvas = createCanvas(400, 400);
    canvas.parent('canvasContainer');
    noLoop();
}

function draw() {
    background('#2a1b3d');  // Deep purple background
    
    // Enable smooth drawing
    smooth();
    
    drawEccentricCat();
    addMagicalEffects();
}

function drawEccentricCat() {
    // Body - slightly twisted pose
    push();
    noStroke();
    fill('#e85d75');  // Pinkish body
    beginShape();
    vertex(200, 200);
    bezierVertex(150, 250, 160, 300, 180, 350);
    bezierVertex(220, 380, 260, 360, 280, 320);
    bezierVertex(300, 280, 290, 240, 270, 200);
    endShape(CLOSE);
    
    // Add pattern to body
    stroke('#ffd3e1');
    strokeWeight(2);
    for(let i = 0; i < 15; i++) {
        let x = random(180, 270);
        let y = random(220, 320);
        drawSpiral(x, y, 10);
    }
    pop();

    // Tail - curly and spiraled
    push();
    noFill();
    stroke('#e85d75');
    strokeWeight(15);
    beginShape();
    for(let i = 0; i < 20; i++) {
        let angle = i * 0.5;
        let x = 280 + cos(angle) * (20 + i * 2);
        let y = 280 + sin(angle) * (20 + i * 2);
        curveVertex(x, y);
    }
    endShape();
    pop();

    // Head
    push();
    noStroke();
    fill('#e85d75');
    ellipse(200, 180, 120, 100);

    // Ears - asymmetrical
    // Left ear - pointy
    fill('#e85d75');
    push();
    translate(150, 140);
    rotate(-PI/4);
    triangle(0, 0, -20, -40, 20, -10);
    // Inner ear
    fill('#ff9ebd');
    triangle(0, -5, -15, -35, 15, -10);
    pop();

    // Right ear - rounded
    push();
    translate(250, 140);
    rotate(PI/4);
    fill('#e85d75');
    ellipse(0, -20, 40, 50);
    // Inner ear
    fill('#ff9ebd');
    ellipse(0, -20, 30, 40);
    pop();

    // Eyes - mismatched
    // Left eye - star-shaped
    fill('#4aff00');  // Bright green
    drawStar(170, 175, 20, 10);
    fill('#000');
    ellipse(170, 175, 8, 8);
    fill('#fff');
    ellipse(168, 173, 4, 4);

    // Right eye - crescent moon
    fill('#00fff2');  // Cyan
    drawMoonEye(230, 175, 20);
    fill('#000');
    ellipse(230, 175, 8, 8);
    fill('#fff');
    ellipse(228, 173, 4, 4);

    // Nose - heart-shaped
    fill('#ff3366');
    drawHeart(200, 195, 12);

    // Mouth - squiggly
    stroke('#333');
    strokeWeight(2);
    noFill();
    beginShape();
    for(let i = 0; i < 10; i++) {
        let x = 185 + i * 3;
        let y = 205 + sin(i * 0.8) * 5;
        vertex(x, y);
    }
    endShape();

    // Whiskers - curly
    stroke('#ffd3e1');
    strokeWeight(1.5);
    drawCurlyWhiskers(180, 195, -1);  // Left whiskers
    drawCurlyWhiskers(220, 195, 1);   // Right whiskers
    pop();
}

function drawSpiral(x, y, size) {
    beginShape();
    for(let i = 0; i < 20; i++) {
        let angle = i * 0.5;
        let sx = x + cos(angle) * (size - i/2);
        let sy = y + sin(angle) * (size - i/2);
        vertex(sx, sy);
    }
    endShape();
}

function drawStar(x, y, outer, inner) {
    beginShape();
    for(let i = 0; i < 10; i++) {
        let angle = i * PI / 5;
        let r = i % 2 === 0 ? outer : inner;
        let sx = x + cos(angle) * r;
        let sy = y + sin(angle) * r;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

function drawMoonEye(x, y, size) {
    beginShape();
    vertex(x - size/2, y - size/2);
    bezierVertex(
        x + size/2, y - size/2,
        x + size/2, y + size/2,
        x - size/2, y + size/2
    );
    bezierVertex(
        x, y + size/3,
        x, y - size/3,
        x - size/2, y - size/2
    );
    endShape(CLOSE);
}

function drawHeart(x, y, size) {
    beginShape();
    vertex(x, y + size);
    bezierVertex(
        x - size, y,
        x - size, y - size/2,
        x, y - size/4
    );
    bezierVertex(
        x + size, y - size/2,
        x + size, y,
        x, y + size
    );
    endShape(CLOSE);
}

function drawCurlyWhiskers(x, y, direction) {
    for(let i = 0; i < 3; i++) {
        beginShape();
        for(let j = 0; j < 10; j++) {
            let wx = x + direction * (j * 5);
            let wy = y + i * 10 + sin(j * 0.8) * 5;
            vertex(wx, wy);
        }
        endShape();
    }
}

function addMagicalEffects() {
    // Add sparkles
    stroke('#fff');
    strokeWeight(2);
    for(let i = 0; i < 30; i++) {
        let x = random(width);
        let y = random(height);
        let size = random(2, 6);
        drawStar(x, y, size, size/2);
    }

    // Add floating dots
    noStroke();
    fill('rgba(255, 255, 255, 0.5)');
    for(let i = 0; i < 50; i++) {
        let x = random(width);
        let y = random(height);
        let size = random(1, 4);
        ellipse(x, y, size, size);
    }

    // Add colorful aura
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = '#ff69b4';
    noFill();
    stroke('rgba(255, 105, 180, 0.3)');
    strokeWeight(10);
    ellipse(200, 200, 300, 300);
}

function saveCanvas() {
    save('eccentric-cat.png');
} 