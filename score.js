// Iteration 5: Store the player score and display it on the game over screen
let score_box = document.getElementById("score-board");

let value = localStorage.getItem("score");

score_box.textContent = value;


var playagain = document.getElementById("play-again-button")
playagain.onclick = () => {
  window.open("./game.html")
}
