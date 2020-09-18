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
    

          const crossHorizontal =
              otherComp.x <= this.getRight() && (otherComp.x + otherComp.width) >= this.getLeft();

          const crossVertical =
              otherComp.y <= this.getBottom() && (otherComp.y + otherComp.height) >= this.getTop();


          if (crossHorizontal && crossVertical) {
              return true;
          }

          //   });

          return false;
      }
  }