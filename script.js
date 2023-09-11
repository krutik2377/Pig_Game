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
let playing , activePlayer, currentScore, scores;


const init = function()
{
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0EL.textContent = 0;
    current1EL.textContent =0;
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
    
    diceEL.classList.add('hidden');
}

init();

const switchPlayer = function()
{
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore =0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0EL.classList.toggle('player--active');
        player1EL.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function() {

    if(playing)
    {
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
        switchPlayer();
    }
    }
   
    
});

btnHold.addEventListener('click', function(){
    if(playing)
    {   
             // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    

    // 2. check if player's score is >100
    if(scores[activePlayer] >= 20)
    {
        playing = false;
        diceEL.classList.add('hidden');
        // we are selecting query so we have to add . before ok.
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else{
        switchPlayer();
    }
    //finish the game

    //switch to the next player.

    }
   
    
})

btnNew.addEventListener('click', init);