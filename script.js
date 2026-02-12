document.addEventListener('DOMContentLoaded', () => {
    const btnRed = document.getElementById('btn-red');
    const btnBlue = document.getElementById('btn-blue');
    const resultDisplay = document.getElementById('result-display');
    const playsCountSpan = document.getElementById('plays-count');

    let totalPlays = 0;

    const playRound = () => {
        totalPlays++;
        playsCountSpan.textContent = totalPlays;

        // Reset display
        resultDisplay.classList.remove('win', 'lose');
        resultDisplay.innerHTML = '';

        // Random logic: 50% chance to win
        const isWin = Math.random() < 0.5;

        // Create result element
        const resultText = document.createElement('span');
        resultText.className = 'result-text ' + (isWin ? 'win-text' : 'lose-text');
        resultText.textContent = isWin ? '¡HAS GANADO!' : 'HAS PERDIDO';

        // Update UI
        setTimeout(() => {
            resultDisplay.classList.add(isWin ? 'win' : 'lose');
            resultDisplay.appendChild(resultText);
            
            // Add a sub-message for extra juice
            const subMessage = document.createElement('p');
            subMessage.style.marginTop = '0.5rem';
            subMessage.style.fontSize = '0.9rem';
            subMessage.style.color = 'var(--text-secondary)';
            subMessage.textContent = isWin ? '¡Hoy es tu día de suerte! 🍀' : 'Inténtalo de nuevo... 💫';
            resultDisplay.appendChild(subMessage);
        }, 50);
    };

    btnRed.addEventListener('click', () => {
        playRound();
    });

    btnBlue.addEventListener('click', () => {
        playRound();
    });
});
