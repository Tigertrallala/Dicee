function randomNumber1(){
  max = 6;
  min = 1;
  return Math.floor(Math.random() * (max - min +1)) + min; 
} 

var srcStringImg1 = document.getElementsByClassName("img1")[0].src;
var srcStringImg2 = document.getElementsByClassName("img2")[0].src;

player1Num = randomNumber1();
player2Num = randomNumber1();

document.getElementsByClassName("img1")[0].src = srcStringImg1.slice(0,-5) + player1Num + ".png";
document.getElementsByClassName("img2")[0].src = srcStringImg2.slice(0,-5) + player2Num + ".png";

if (player1Num == player2Num){document.getElementsByClassName("GameTitle")[0].innerHTML = "Draw!"}
else if (player1Num < player2Num){document.getElementsByClassName("GameTitle")[0].innerHTML = "Player 2 wins! 👑"}
else{document.getElementsByClassName("GameTitle")[0].innerHTML = "👑 Player 1 wins!"}
