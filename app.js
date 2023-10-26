let play_btn = document.getElementById("play-button");
console.log(play_btn)

play_btn.addEventListener("click", redirect)

function redirect(){
  location.href = "./game.html"

}