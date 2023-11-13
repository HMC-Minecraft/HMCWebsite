const symbols = ['🍒', '🍊', '🍋', '🍇', '🍉'];
const slots = ['slot1', 'slot2', 'slot3'];

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spin() {
    for (const slot of slots) {
        const element = document.getElementById(slot);
        element.textContent = getRandomSymbol();
    }

    if (slots[0] === slots[1] && slots[1] === slots[2]) {
        alert('Congratulations! You win!');
    } else {
        alert('Try again!');
    }
}

document.getElementById('spinButton').addEventListener('click', spin);
