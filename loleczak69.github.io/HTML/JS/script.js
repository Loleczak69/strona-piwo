const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


ctx.fillStyle = 'aquamarine';
ctx.fillRect(0, 0, canvas.width, canvas.height);


ctx.beginPath();
ctx.moveTo(canvas.width / 2, canvas.height / 2);
ctx.lineTo(canvas.width / 2 - 30, canvas.height / 2 + 40);
ctx.lineTo(canvas.width / 2 + 30, canvas.height / 2 + 40);
ctx.closePath();
ctx.fillStyle = 'lightgoldenrodyellow';
ctx.fill();


ctx.beginPath();
ctx.moveTo(canvas.width / 2 - 30, canvas.height / 2 + 40);
ctx.lineTo(canvas.width / 2 - 20, canvas.height / 2 + 10);
ctx.lineTo(canvas.width / 2 + 20, canvas.height / 2 + 10);
ctx.lineTo(canvas.width / 2 + 30, canvas.height / 2 + 40);
ctx.closePath();
ctx.fillStyle = 'aquamarine';
ctx.fill();


ctx.beginPath();
ctx.moveTo(canvas.width / 2 - 20, canvas.height / 2 + 10);
ctx.lineTo(canvas.width / 2 - 20, canvas.height / 2 + 60);
ctx.lineTo(canvas.width / 2 + 20, canvas.height / 2 + 60);
ctx.lineTo(canvas.width / 2 + 20, canvas.height / 2 + 10);
ctx.closePath();
ctx.fillStyle = 'rgba(255, 200, 0, 0.8)';
ctx.fill();


ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(canvas.width / 2 - 10, canvas.height / 2 + 20, 5, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(canvas.width / 2 + 10, canvas.height / 2 + 30, 4, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2 + 60, 15, 0, 2 * Math.PI);
ctx.fillStyle = 'white';
ctx.fill();


ctx.font = '20px Arial';
ctx.fillStyle = 'brown';
ctx.fillText(' Beer', canvas.width / 2 - 25, canvas.height / 2 - 20);