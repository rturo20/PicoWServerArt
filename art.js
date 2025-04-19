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

// Function to draw the cat face
function drawCatFace() {
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
    ctx.ellipse(200, 200, 120, 100, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Draw ears
    // Left ear
    ctx.beginPath();
    ctx.moveTo(120, 130);
    ctx.lineTo(80, 50);
    ctx.lineTo(160, 100);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Right ear
    ctx.beginPath();
    ctx.moveTo(280, 130);
    ctx.lineTo(320, 50);
    ctx.lineTo(240, 100);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Inner ear details
    ctx.fillStyle = '#ffcdd2';
    ctx.beginPath();
    ctx.moveTo(110, 100);
    ctx.lineTo(90, 60);
    ctx.lineTo(140, 90);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(290, 100);
    ctx.lineTo(310, 60);
    ctx.lineTo(260, 90);
    ctx.closePath();
    ctx.fill();

    // Draw eyes
    // Left eye
    ctx.beginPath();
    ctx.fillStyle = '#ffeb3b';
    ctx.ellipse(150, 180, 25, 25, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Left eye pupil
    ctx.beginPath();
    ctx.fillStyle = '#000';
    ctx.ellipse(150, 180, 8, 20, Math.PI/2, 0, Math.PI * 2);
    ctx.fill();

    // Left eye highlight
    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.ellipse(160, 170, 8, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    // Right eye
    ctx.beginPath();
    ctx.fillStyle = '#ffeb3b';
    ctx.ellipse(250, 180, 25, 25, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Right eye pupil
    ctx.beginPath();
    ctx.fillStyle = '#000';
    ctx.ellipse(250, 180, 8, 20, Math.PI/2, 0, Math.PI * 2);
    ctx.fill();

    // Right eye highlight
    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.ellipse(260, 170, 8, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    // Draw nose
    ctx.beginPath();
    ctx.fillStyle = '#ff9d9d';
    ctx.moveTo(200, 210);
    ctx.lineTo(185, 225);
    ctx.lineTo(215, 225);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw mouth
    drawCurve(185, 225, 190, 240, 190, 240, 200, 240);
    drawCurve(215, 225, 210, 240, 210, 240, 200, 240);

    // Draw whiskers
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 1.5;
    
    // Left whiskers
    drawCurve(170, 220, 120, 200, 80, 200, 40, 190);
    drawCurve(170, 220, 120, 220, 80, 220, 40, 220);
    drawCurve(170, 220, 120, 240, 80, 240, 40, 250);

    // Right whiskers
    drawCurve(230, 220, 280, 200, 320, 200, 360, 190);
    drawCurve(230, 220, 280, 220, 320, 220, 360, 220);
    drawCurve(230, 220, 280, 240, 320, 240, 360, 250);

    // Add fur texture
    ctx.strokeStyle = '#777';
    ctx.lineWidth = 0.5;
    for(let i = 0; i < 100; i++) {
        let x = 100 + Math.random() * 200;
        let y = 100 + Math.random() * 200;
        let length = 5 + Math.random() * 15;
        let angle = Math.random() * Math.PI;
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
        ctx.stroke();
    }

    // Add some darker patches for texture
    ctx.fillStyle = 'rgba(102, 102, 102, 0.1)';
    for(let i = 0; i < 20; i++) {
        ctx.beginPath();
        let x = 100 + Math.random() * 200;
        let y = 100 + Math.random() * 200;
        ctx.ellipse(x, y, 20, 15, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Call the drawing function
drawCatFace(); 