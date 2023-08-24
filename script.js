'use strict';
// # is for selecting id instead of class which is (.)
// Selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0EL.textContent = 0;
score1EL.textContent = 0;

const scores = [0,0];
// hidden dice before game starts.
diceEL.classList.add('hidden');
let currentScore =0;
let activePlayer =0;

btnRoll.addEventListener('click', function() {
    //1. Generating random dice.
    const dice = Math.trunc(Math.random()*6) + 1;
    console.log(dice);
    //2. display dice.
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    //3. check for dice 1, transfer to other player.
    if(dice !== 1)
    {
        // Add dice to the current score.
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else{
        // Switch to next player.
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore =0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0EL.classList.toggle('player--active');
        player1EL.classList.toggle('player--active');
    }
    
});

