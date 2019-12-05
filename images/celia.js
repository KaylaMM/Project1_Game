class Celia extends Splenda {
    constructor(game, x, y, w, h) {
        super(game, x, y, w, h);
    }
    move() {
        document.onkeydown = event => {
            //   console.log("event: ", event.keyCode);
            const key = event.keyCode;
            const possibleKeystrokes = [37, 39];
            if (possibleKeystrokes.includes(key)) {
                event.preventDefault();
                switch (key) {
                    case 37:
                        if (this.x >= 0) this.x -= 20;
                        break;
                    case 39:
                        if (this.x <= 1000 - this.width) this.x += 20;
                        break;
                }
            }
        };
    }

    drawCelia() {
        this.splenda.drawComponent("./images/splenda.png")
    }
};