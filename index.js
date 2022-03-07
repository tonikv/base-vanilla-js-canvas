const screenWidth = screen.width;
const screenHeight = screen.height / 2;


function init() {
    canvas = document.querySelector('#my-canvas');
    canvas.width = screenWidth;
    canvas.height = screenHeight;
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, screenWidth, screenHeight);
    ctx.strokeStyle = 'rgba(255,0,0, 1)'
    window.requestAnimationFrame(draw);
}

function draw() {
    ctx.clearRect(0, 0, screenWidth, screenHeight);
    ctx.beginPath();
    ctx.moveTo(0, screenHeight / 2);
    ctx.lineTo(screenWidth, screenHeight / 2);
    ctx.stroke();
    window.requestAnimationFrame(drawSomething);
}

window.addEventListener('load', init);