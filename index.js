const numberOfDiceInput = document.getElementById('inputNumber');
const submitButton = document.getElementById('submitBtn');
const resultArea = document.getElementById('diceResults');


const imageArea = document.getElementById('diceImages');

function getDiceNumber(){
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    const values = [];
    const images = [];
    const numberOfDice = numberOfDiceInput.value;
    
    for(let count = 0; count < numberOfDice; count++){
        diceNumber = getDiceNumber();
        values.push(diceNumber);
        images.push(`<img src="./assets/images/${diceNumber}.png" alt="Dice:${diceNumber}">`)
    }
    resultArea.textContent = `Dice Rolls: ${values.join(', ')}`
    imageArea.innerHTML = images.join('');
}