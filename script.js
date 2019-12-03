const myCanvas = document.getElementById("Canvas");
const ctx = myCanvas.getContext("2d");
myCanvas.width = 800;
myCanvas.height = 600;
const background = new Image();
background.src = "images/Miami_Background.jpg"
// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function () {
    ctx.drawImage(background, 0, 0)
}