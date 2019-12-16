// import Component from "./src/component.js";

window.addEventListener("load", () => {
    // const canvas = document.querySelector("canvas");
    var canvas = document.getElementsByTagName('canvas')[0];
    canvas.width = 800;
    canvas.height = 550;
    const myGame = new Game();
    //   console.log("what: ", game);
    myGame.init();
});