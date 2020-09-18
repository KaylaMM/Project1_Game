
window.addEventListener("load", () => {
    
    document.getElementById("start").onclick = () => {
        startGame();
    };

    function startGame() {
        const myGame = new Game();
        myGame.init();
    }

});