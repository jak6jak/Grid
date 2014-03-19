var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var sizeX = 100;
var sizeY = 100;


//Vert Lines
for (i = 0; i <= canvas.width; i += sizeX) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
}
//Horz lines
for (i = 0; i <= canvas.height; i += sizeY) {
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
}
//label
var blockX = 0;
var blockY = 0;
var x = 0;
var y = 0;
for (x = 0; x <= canvas.width; x += sizeX) {
    ctx.lineWidth = 1;
    ctx.font = "18px sans-serif";
    ctx.fillText(blockX + "," + blockY, x + sizeX / 2, y);
    blockX = blockX + 1;
    for (y = 0; y <= canvas.height; y += sizeY) {
        ctx.fillText(blockX + "," + blockY, x + sizeX / 2, y + sizeY / 2);
        blockY += 1;
    }
}
