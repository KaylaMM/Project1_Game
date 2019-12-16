class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.celiaRight = new Player(this, 475, 475, 300, 250);
        this.sugar = []; //new Component(this, 800, 0, 100, 80)
        this.splenda = []; //new Component(this, 75, 75, 100, 90);
        this.score = 0;
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
            this.createObstacles();

            this.celiaRight.move();


            if (this.celiaRight.didCollide(this.splenda)) {
                // do whatever you wanna do whenevr you collide witha splenda
                // let scoreText = game.add.text(5, 5, 'Points: 0', {
                //     font: '18px Arial',
                //     fill: '#0095DD'
                // });
                this.score -= 5;
                return scoreText
            }

            if (this.celiaRight.didCollide(this.sugar)) {
                // do whatever you wanna do whenevr you collide witha sugar
                // let scoreText = game.add.text(5, 5, 'Points: 0', {
                //     font: '18px Arial',
                //     fill: '#0095DD'
                // });
                this.score += 10;
                return scoreText

            }


            if (this.splenda.length > 0) {
                for (var i = 0; i < this.splenda.length; i++) {
                    this.splenda[i].drawComponent("./images/splenda.png");
                    this.splenda[i].y += 4;
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
                    if (this.sugar[i].y > 550) {
                        this.sugar.splice(i, 1)
                    }
                };
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

    drawScoreBoard() {

    }

    gameOver() {
        this.clear();
        this.drawBackground();
        this.ctx.font = "70px Centruy-Gothic bold";
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(
            "Game Over!",
            this.canvas.width / 2,
            this.canvas.height / 2
        );
    }
};