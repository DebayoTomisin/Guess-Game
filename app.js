const result = document.getElementById('game-results');
const submit = document.getElementById('submit');
const game = document.querySelector('.game-container');

let compNumber = Math.round((Math.random() * 19) + 1);

let userTrials = 6;

submit.addEventListener('click', submitNumber);

function submitNumber(e) {

    e.preventDefault();
    console.log('Number has been submitted');
    const guess = document.getElementById('input');
    let guessValue = guess.value;
    guessGame(guessValue, compNumber);
};


function guessGame(guessValue, compNumber) {

    if (guessValue == "") {
        let warning = document.createElement('div');
        warning.classList.add('warning')
        game.appendChild(warning);
        let p = document.createElement('p');
        p.textContent = `Please enter a value, the field is empty`
        warning.appendChild(p);
    }

    else {
        while (userTrials > 0) {
            userTrials--

            if (guessValue == compNumber) {
                let p = document.createElement('p');
                p.textContent = `Your guess is correct, the correct guess is ${compNumber}. Congratulations!!`
                result.appendChild(p);
                break
            }

            else if (guessValue > compNumber) {
                let p = document.createElement('p');
                p.textContent = `Your Guess  ${guessValue} is too high, try again`
                result.appendChild(p);
                return guessGame
            }

            else if (guessValue < compNumber) {
                let p = document.createElement('p');
                p.textContent = `Your Guess ${guessValue} is too low, try again`
                result.appendChild(p);
                return guessGame;
            }
        }

        if (guessValue != compNumber) {
            let p = document.createElement('p');
            p.textContent = `wassup with the force today? well the correct guess is ${compNumber}`
            result.appendChild(p);
        }
        else {
            let p = document.createElement('p');
            p.textContent = `seems like the force is awake, bet you can't do it again!`
            result.appendChild(p);
        }

        let newGame = document.createElement('div');
        let button = document.createElement('button');
        let message = document.createElement('p');

        message.textContent = 'had enough? care for another game?'
        newGame.appendChild(message);
        button.textContent = 'Play again';
        button.classList.add('reload');
        newGame.appendChild(button)
        newGame.classList.add('reload')
        game.appendChild(newGame);

        let reload = document.querySelector('.reload');
        reload.addEventListener('click', reloadFunction);

        function reloadFunction() {
            location.reload();
        }
    }

}


