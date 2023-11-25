var blockSize = 25;
var total_row = 17;
var total_col = 17;
var board;
var context;

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var speedX = 0;
var speedY = 0;

var snakeBody = [];

var foodX;
var foodY;
var score = 0;

var gameOver = false;
var highestScore = getCookie("highestScore");


window.onload = function () {
  board = document.getElementById("board");
  board.height = total_row * blockSize;
  board.width = total_col * blockSize;
  context = board.getContext("2d");
  if (!highestScore) {
    highestScore = 0;
  }
  updateScore();

  placeFood();
  document.addEventListener("keyup", changeDirection);
  setInterval(update, 1000 / 10);

}
function restartGame() {
  score = 0;
  snakeX = blockSize * 5;
  snakeY = blockSize * 5;
  speedX = 0;
  speedY = 0;
  snakeBody = [];
  gameOver = false;
  placeFood();
  updateScore();
}

function update() {
  if (gameOver) {
    const playAgain = confirm("Game Over! Your score is " + score + ". Play again?");
    if (playAgain) {
      restartGame();
    }
    return;
  }


  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);


  context.fillStyle = "white";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  if (snakeX == foodX && snakeY == foodY) {
    snakeBody.push([foodX, foodY]);
    placeFood();
    score++;
    updateScore();
  }

  if (score > highestScore) {
    highestScore = score;
    setCookie("highestScore", highestScore, 365); // Store for 1 year
    updateScore();
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {

    snakeBody[i] = snakeBody[i - 1];
  }
  if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }

  context.fillStyle = "lime";
  snakeX += speedX * blockSize;
  snakeY += speedY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }

  if (snakeX < 0
    || snakeX > total_col * blockSize
    || snakeY < 0
    || snakeY > total_row * blockSize) {


    gameOver = true;
    alert("Game Over");
  }

  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {


      gameOver = true;
      alert("Game Over");
    }
  }
}


function changeDirection(e) {
  if (e.code == "ArrowUp" && speedY != 1) {
    speedX = 0;
    speedY = -1;
  }
  else if (e.code == "ArrowDown" && speedY != -1) {
    speedX = 0;
    speedY = 1;
  }
  else if (e.code == "ArrowLeft" && speedX != 1) {
    speedX = -1;
    speedY = 0;
  }
  else if (e.code == "ArrowRight" && speedX != -1) {
    speedX = 1;
    speedY = 0;
  }
}


function placeFood() {
  foodX = Math.floor(Math.random() * total_col) * blockSize;
  foodY = Math.floor(Math.random() * total_row) * blockSize;
}

function updateScore() {
  document.getElementById("score-container").textContent = "Score: " + score + " | Highest Score: " + highestScore;
}
function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + value + ";expires=" + expires.toUTCString();
}