'use strict';
// # is for selecting id instead of class which is (.)
// Selecting elements
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');

score0EL.textContent = 0;
score1EL.textContent = 0;

// hidden dice before game starts.
diceEL.classList.add('hidden');

