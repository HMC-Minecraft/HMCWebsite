const gameContainer = document.getElementById('game-container');
const snakeHead = document.getElementById('snake-head');
const food = document.getElementById('food');

let snakeX = 0;
let snakeY = 0;
let foodX;
let foodY;

let score = 0;
const gridSize = 20;

function placeFood() {
    foodX = Math.floor(Math.random() * (gameContainer.clientWidth / gridSize)) * gridSize;
    foodY = Math.floor(Math.random() * (gameContainer.clientHeight / gridSize)) * gridSize;
    food.style.left = foodX + 'px';
    food.style.top = foodY + 'px';
}

function updateScore() {
    score++;
    document.title = `Snake Game - Score: ${score}`;
}

placeFood();
updateScore();

function handleKeyPress(event) {
    switch (event.key) {
        case 'ArrowUp':
            snakeY -= gridSize;
            break;
        case 'ArrowDown':
            snakeY += gridSize;
            break;
        case 'ArrowLeft':
            snakeX -= gridSize;
            break;
        case 'ArrowRight':
            snakeX += gridSize;
            break;
    }

    snakeHead.style.left = snakeX + 'px';
    snakeHead.style.top = snakeY + 'px';

    if (snakeX === foodX && snakeY === foodY) {
        updateScore();
        placeFood();
    }
}

document.addEventListener('keydown', handleKeyPress);