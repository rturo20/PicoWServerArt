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

    // Draw ears
    // Left ear
    beginShape();
    vertex(120, 130);
    vertex(80, 50);
    vertex(160, 100);
    endShape(CLOSE);

    // Right ear
    beginShape();
    vertex(280, 130);
    vertex(320, 50);
    vertex(240, 100);
    endShape(CLOSE);

    // Inner ear details
    fill('#ffcdd2');
    beginShape();
    vertex(110, 100);
    vertex(90, 60);
    vertex(140, 90);
    endShape(CLOSE);

    beginShape();
    vertex(290, 100);
    vertex(310, 60);
    vertex(260, 90);
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

    // Add fur texture
    stroke('#777');
    strokeWeight(0.5);
    for(let i = 0; i < 100; i++) {
        let x = 100 + random(200);
        let y = 100 + random(200);
        let length = 5 + random(15);
        let angle = random(PI);
        
        line(x, y, 
             x + cos(angle) * length, 
             y + sin(angle) * length);
    }

    // Add some darker patches for texture
    noStroke();
    fill('rgba(102, 102, 102, 0.1)');
    for(let i = 0; i < 20; i++) {
        push();
        translate(100 + random(200), 100 + random(200));
        rotate(random(PI));
        ellipse(0, 0, 40, 30);
        pop();
    }
}

function saveCanvas() {
    save('cat-face.png');
} 