  class Component {
      constructor(game, x, y, w, h) {
          this.game = game;
          this.x = x;
          this.y = y;
          this.width = w;
          this.height = h;
          this.img = new Image();
      }
      drawComponent(imgSource) {
          let daCtx = this.game.ctx;
          this.img.src = imgSource;
          daCtx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }

      getLeft() {
          return this.x;
      }
      getRight() {
          return this.x + this.width;
      }

      getTop() {
          return this.y;
      }
      getBottom() {
          return this.y + this.height;
      }

      didCollide(otherComp) {


          otherComp.forEach(eachSugarThingy => {


              const crossHorizontal =
                  eachSugarThingy.x <= this.getRight() && (eachSugarThingy.x + eachSugarThingy.width) >= this.getLeft();

              const crossVertical =
                  eachSugarThingy.y <= this.getBottom() && (eachSugarThingy.y + eachSugarThingy.height) >= this.getTop();


              if (crossHorizontal && crossVertical) {
                  return true;
              }

          });

          return false;
      }
  }