class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.celiaRight = new Player(this, 0, 200, 150, 150);
        this.sugar = new Component(this, 800, 200, 70, 70);
        this.splenda = new Component(this, 800, 200, 70, 70);
        // this.score = 0;
    }

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.start();
    }

    start() {
        this.drawBackground();
        this.drawMainCharacters();
        const interval = setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawMainCharacters();
            this.celiaRight.move();
            if (this.celiaRight.didCollide(this.splenda)) {
                clearInterval(interval);
                this.gameOver();
                // console.log("collision");
                // alert("BOOM!!!!");
            }
            this.splenda.x -= 5;
            if (this.splenda.x <= -70) {
                this.splenda.x = 1000;
                this.splenda.y = Math.floor(Math.random() * 430); // 430 = heightOfCanvas(500) - heightOfFireball(70)
            }
            if (this.splenda.x === 0) this.score++;
        }, 1000 / 60);
    }

    drawBackground() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const ctx = canvas.getContext("2d");

        const gameBoard = new Image();
        gameBoard.src = "./images/Miami_Background.jpg";

        gameBoard.onload = function () {
            ctx.drawImage(
                gameBoard,
                canvas.width / 2 - gameBoard.width / 2,
                canvas.height / 2 - gameBoard.height / 2
            );
        };
        //   this.ctx.fillStyle = "pink";
        //   this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        //   this.ctx.fillStyle = "green";
        //   this.ctx.font = "30px Arial";
        //   this.ctx.fillText(`Score: ${this.score}`, 800, 50);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawMainCharacters() {
        this.splenda.drawComponent("./images/Celia-Move-Right-removebg-preview.png");
        this.celiaRight.drawComponent("./images/splenda.png");
    }

    gameOver() {
        this.clear();
        this.drawBackground();
        this.ctx.font = "70px Arial bold";
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = "red";
        this.ctx.fillText(
            "Game Over!",
            this.canvas.width / 2,
            this.canvas.height / 2
        );
    }
};