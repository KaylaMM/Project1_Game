const myCanvas = document.getElementById("Canvas");
const ctx = myCanvas.getContext("2d");
myCanvas.width = 1000;
myCanvas.height = 5000;
make_background();

function make_background() {
    background = new Image();
    background.onload = function () {
        ctx.drawImage(background, 0, 0);
    }
    background.src = "images/Miami_Background.jpg"
};