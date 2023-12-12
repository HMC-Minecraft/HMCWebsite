function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function generateNumbers() {
    let numbersContainer = document.getElementById("numbers");
    numbersContainer.innerHTML = ""; // Clear previous numbers

    let storedNumbers = JSON.parse(localStorage.getItem('generatedNumbers'));
    let currentTime = new Date().getTime();

    // Check if numbers are stored and if a week has passed
    if (storedNumbers && currentTime - storedNumbers.timestamp < 7 * 24 * 60 * 60 * 1000) {
        for (let i = 0; i < storedNumbers.numbers.length; i++) {
            let numberElement = document.createElement("div");
            numberElement.className = "number";
            numberElement.textContent = storedNumbers.numbers[i];
            numbersContainer.appendChild(numberElement);
        }
    } else {
        let newNumbers = [];
        for (let i = 0; i < 5; i++) {
            let number = generateRandomNumber();
            newNumbers.push(number);

            let numberElement = document.createElement("div");
            numberElement.className = "number";
            numberElement.textContent = number;
            numbersContainer.appendChild(numberElement);
        }

        // Store the newly generated numbers and timestamp
        localStorage.setItem('generatedNumbers', JSON.stringify({
            numbers: newNumbers,
            timestamp: currentTime
        }));
    }
}

// Initial generation
generateNumbers();

// Schedule weekly regeneration
setInterval(generateNumbers, 7 * 24 * 60 * 60 * 1000);
