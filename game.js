class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.celiaRight = new Player(this, 475, 475, 300, 250);
        this.sugar = []; //new Component(this, 800, 0, 100, 80)
        this.splenda = []; //new Component(this, 75, 75, 100, 90);
        this.score = 0;
        this.interval = undefined;
    }

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.start();
    }

    start() {
        this.drawBackground();
        this.drawMainCharacters();
        this.interval = setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawMainCharacters();
            this.createObstacles();

            this.celiaRight.move();


            this.ctx.fillStyle = "pink";
            this.ctx.font = "45px Arial";
            this.ctx.fillText(`Score: ${this.score}`, 1050, 50);


            if (this.splenda.length > 0) {
                for (var i = 0; i < this.splenda.length; i++) {
                    this.splenda[i].drawComponent("./images/splenda.png");
                    this.splenda[i].y += 4;

                    if (this.celiaRight.didCollide(this.splenda[i])) {
                        console.log('score down')
                        this.score -= 15;
                        this.splenda.splice(i, 1)
                        return this.score
                    }

                    if (this.splenda[i].y > 550) {
                        this.splenda.splice(i, 1);
                    }
                };
            }

            if (this.sugar.length > 0) {
                // console.log("the sugar length =========== ", this.sugar.length)
                for (var i = 0; i < this.sugar.length; i++) {
                    this.sugar[i].drawComponent("./images/sugar.png");
                    this.sugar[i].y += 4;

                    if (this.celiaRight.didCollide(this.sugar[i])) {
                        console.log('this is my score');
                        this.score += 10;
                        this.sugar.splice(i, 1)

                        return score
                    }
                    if (this.sugar[i].y > 550) {
                        this.sugar.splice(i, 1)
                    }
                };
            }

            if (this.score > 150) {
                this.clear();
                this.gameWin();
                //clear removes the game board & game over text
                // this.clear(interval);
                //add winning image & audio here
            }

            if (this.score < 0) {
                this.clear();
                this.gameOver();
                //clear removes the game board & game over text
                // this.clear(interval);
                //add losing image & audio here
                // this.drawImage("./images/Losing-Image.png");
            }




        }, 2000 / 100);




    }


    createObstacles() {
        if (Math.floor(Math.random() * 300) % 35 === 0) {
            this.sugar.push(new Component(this, Math.floor(Math.random() * 1200), 0, 100, 80));
            // console.log("obstacle == ", this.sugar);
        }
        if (Math.floor(Math.random() * 1000) % 55 === 0) {
            this.splenda.push(new Component(this, Math.floor(Math.random() * 1200), 0, 100, 80));
            // console.log("obstacle == ", this.splenda);
        }
    }


    drawBackground() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const ctx = canvas.getContext("2d");

        const gameBoard = new Image();
        gameBoard.src = "./images/Miami_Background.jpg";

        ctx.drawImage(
            gameBoard, 0, 0,
            this.canvas.width,
            this.canvas.height
        );

    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawMainCharacters() {
        this.celiaRight.drawComponent("./images/Celia-Move-Right-removebg-preview.png");
    }

    gameWin() {
        // location = "./you-win.html"
        this.clear();
        this.drawBackground();
        this.ctx.font = "90px Arial bold";
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(
            "You Win!",
            this.canvas.width / 2,
            this.canvas.height / 2
        );
    }


    gameOver() {
        clearInterval(this.interval)
        // location = "./"
        this.clear();
        this.drawBackground();
        this.ctx.font = "90px Arial bold";
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(
            "Game Over!",
            this.canvas.width / 2,
            this.canvas.height / 2
        );
    }
};