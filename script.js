let c = document.getElementById("Canvas");
let ctx = c.getContext("2d");

ctx.fillStyle = "rgb(226, 180, 27)";
ctx.beginPath();
ctx.arc(150, 100, 40, 0, Math.PI * 2, true);
ctx.closePath();
ctx.fill();
