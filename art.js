// Get the canvas element and its context
const canvas = document.createElement('canvas');
canvas.width = 400;
canvas.height = 400;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Function to draw a curved line
function drawCurve(startX, startY, cp1x, cp1y, cp2x, cp2y, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
    ctx.stroke();
}

// Function to draw the cat
function drawCat() {
    // Set the background
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, 400, 400);
    
    // Set initial drawing styles
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Draw cat's head (main shape)
    ctx.beginPath();
    ctx.fillStyle = '#8b8b8b';
    ctx.ellipse(200, 180, 70, 60, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Draw ears
    // Left ear
    ctx.beginPath();
    ctx.moveTo(150, 140);
    ctx.lineTo(130, 90);
    ctx.lineTo(170, 120);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Right ear
    ctx.beginPath();
    ctx.moveTo(250, 140);
    ctx.lineTo(270, 90);
    ctx.lineTo(230, 120);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw eyes
    // Left eye
    ctx.beginPath();
    ctx.fillStyle = '#ffeb3b';
    ctx.ellipse(170, 170, 15, 15, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Left eye pupil
    ctx.beginPath();
    ctx.fillStyle = '#000';
    ctx.ellipse(170, 170, 5, 12, Math.PI/2, 0, Math.PI * 2);
    ctx.fill();

    // Right eye
    ctx.beginPath();
    ctx.fillStyle = '#ffeb3b';
    ctx.ellipse(230, 170, 15, 15, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Right eye pupil
    ctx.beginPath();
    ctx.fillStyle = '#000';
    ctx.ellipse(230, 170, 5, 12, Math.PI/2, 0, Math.PI * 2);
    ctx.fill();

    // Draw nose
    ctx.beginPath();
    ctx.fillStyle = '#ff9d9d';
    ctx.moveTo(200, 190);
    ctx.lineTo(190, 200);
    ctx.lineTo(210, 200);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw mouth
    drawCurve(190, 200, 195, 210, 195, 210, 200, 210);
    drawCurve(210, 200, 205, 210, 205, 210, 200, 210);

    // Draw whiskers
    // Left whiskers
    drawCurve(180, 200, 140, 190, 120, 190, 100, 185);
    drawCurve(180, 200, 140, 200, 120, 200, 100, 200);
    drawCurve(180, 200, 140, 210, 120, 210, 100, 215);

    // Right whiskers
    drawCurve(220, 200, 260, 190, 280, 190, 300, 185);
    drawCurve(220, 200, 260, 200, 280, 200, 300, 200);
    drawCurve(220, 200, 260, 210, 280, 210, 300, 215);

    // Draw body
    ctx.beginPath();
    ctx.fillStyle = '#8b8b8b';
    ctx.ellipse(200, 300, 80, 60, 0, 0, Math.PI);
    ctx.fill();
    ctx.stroke();

    // Add some fur texture
    ctx.strokeStyle = '#777';
    ctx.lineWidth = 0.5;
    for(let i = 0; i < 50; i++) {
        let x = 130 + Math.random() * 140;
        let y = 150 + Math.random() * 120;
        let length = 5 + Math.random() * 10;
        let angle = Math.random() * Math.PI;
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
        ctx.stroke();
    }
}

// Call the drawing function
drawCat(); 