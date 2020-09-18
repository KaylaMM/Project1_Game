class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.celiaRight = new Player(this, 475, 475, 300, 250);
        this.sugar = []; 
        this.splenda = []; 
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
        
            }

            if (this.score < 0) {
                this.clear();
                this.gameOver();
        
            }




        }, 2000 / 100);




    }


    createObstacles() {
        if (Math.floor(Math.random() * 300) % 35 === 0) {
            this.sugar.push(new Component(this, Math.floor(Math.random() * 1200), 0, 100, 80));
        }
        if (Math.floor(Math.random() * 1000) % 55 === 0) {
            this.splenda.push(new Component(this, Math.floor(Math.random() * 1200), 0, 100, 80));
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