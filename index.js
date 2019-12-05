const myCanvas = document.getElementById("Canvas");
const ctx = myCanvas.getContext("2d");
myCanvas.width = 1000;
myCanvas.height = 5000;
make_background();

//Function given by Jerlissa where images are called in a function and not by a class
//(from Sandra's previous cohort where she built a canvas game without classes)
window.addEventListener("load", () => {
    ​
    const myCanvas = document.getElementById("canvas");
    const ctx = myCanvas.getContext("2d");
    myCanvas.width = 1440;
    myCanvas.height = 650;​
    function drawImg(name, pathToImg, x, y, w, h) {
        name = new Image();
        name.src = pathToImg;
        name.onload = () => {
            ctx.drawImage(name, x, y, w, h)
        }
    }​
    drawImg("mainChar", "./images/Mario_NSMB2.png", 0, 525, 65, 65)
    drawImg("brick", "./images/cartoon-brick-wall-6.png", 150, 375, 75, 75)
    drawImg("brick", "./images/cartoon-brick-wall-6.png", 205, 375, 75, 75)
    drawImg("brick", "./images/cartoon-brick-wall-6.png", 260, 375, 75, 75)
    drawImg("brick", "./images/cartoon-brick-wall-6.png", 315, 375, 75, 75)
    drawImg("brick", "./images/cartoon-brick-wall-6.png", 370, 375, 75, 75)​
})
Collapse





// function make_background() {
//     background = new Image();
//     background.onload = function () {
//         ctx.drawImage(background, 0, 0);
//     }
//     background.src = "images/Miami_Background.jpg"
// };