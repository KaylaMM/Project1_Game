// import Component from "./src/component.js";

window.addEventListener("load", () => {
    // const canvas = document.querySelector("canvas");
    // var canvas = document.getElementsByTagName('canvas')[0];

    document.getElementById("start").onclick = () => {
        startGame();
    };

    function startGame() {
        const myGame = new Game();
        myGame.init();
    }

});