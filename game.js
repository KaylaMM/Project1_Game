class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.celia = new Celia(this, 0, 200, 150, 150);
        this.superman = new Splenda(this, 800, 200, 70, 70);
        this.score = 0;
    }

    init() {
        this.canvas = document.getElementById("Canvas");
        this.ctx = this.canvas.getContext("2d");
        this.start();
    }
    drawBackground() {
        this.ctx.img.src = "images/Celia_Animated-removebg-preview copy.png";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        //   this.ctx.fillStyle = "green";
        //   this.ctx.font = "30px Arial";
        //   this.ctx.fillText(`Score: ${this.score}`, 800, 50);
    }

    start() {
        this.drawBackground();
        this.drawCeliaAndSugar();
        let interval = setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawCeliaAndSugar();
            this.celia.move();
            if (this.superman.didCollide(this.splenda)) {
                clearInterval(interval);
                this.gameOver();
            }
            this.splenda.x -= 5;
            if (this.splenda.x <= -70) {
                this.splenda.x = 1000;
                this.splenda.y = Math.floor(Math.random() * 400) //height of canvas 500, height of splenda 70
            }
            if (this.splenda.x === 0) this.score++;

        }, 1000 / 60)
    };

    // drawBackground() {
    //     this.ctx.fillStyle = "pink";
    //     this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    //     this.ctx.fillStyle = "green";
    //     this.ctx.font = "30px Arial";
    //     this.ctx.fillText(`Score: ${this.score}`, 800, 50);
    // }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawCeliaAndSugar() {
        this.splenda.drawComponent("./images/splenda.png");
        this.celia.drawComponent("./images/Celia-Move-Right-removebg-preview.png");
    }

    // gameOver() {
    //     this.clear();
    //     this.drawBackground();
    //     this.ctx.font = "70px Arial bold";
    //     this.ctx.textAlign = "center";
    //     this.ctx.fillStyle = "red";
    //     this.ctx.fillText(
    //         "Game Over!",
    //         this.canvas.width / 2,
    //         this.canvas.height / 2
    //     );
    // }
};