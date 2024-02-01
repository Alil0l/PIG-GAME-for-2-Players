'use strict';

// Declaring Variables for buttons
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const players = document.querySelectorAll('.player');
let score = document.querySelectorAll('.score');
let crtScore = document.querySelectorAll('.current-score');
let diceimg = document.querySelector('.dice');

//---------Creating Needed Functions-------//

// generate a random number btw 1~6
let rand = function () {
  return Math.trunc(Math.random() * 6 + 1);
};

// Creating a sweatch player function
const switchPlayer = function () {
  for (let i = 0; i < players.length; i++) {
    if (players[i].classList.contains('player--active')) {
      players[i].classList.remove('player--active');
    } else {
      players[i].classList.add('player--active');
    }
  }
};

// Zero scores function
function zeroScores() {
  for (let i = 0; i < score.length; i++) {
    score[i].textContent = '0';
  }
}

// Dice Rolling function
const diceRoll = function (num) {
  switch (num) {
    case 1:
      diceimg.setAttribute('src', 'dice-1.png');
      break;
    case 2:
      diceimg.setAttribute('src', 'dice-2.png');
      break;
    case 3:
      diceimg.setAttribute('src', 'dice-3.png');
      break;
    case 4:
      diceimg.setAttribute('src', 'dice-4.png');
      break;
    case 5:
      diceimg.setAttribute('src', 'dice-5.png');
      break;
    case 6:
      diceimg.setAttribute('src', 'dice-6.png');
      break;
  }
};

//------Activating the buttons-------//
// Zero Scores
zeroScores();
// Active the roll button
btnRoll.addEventListener('click', function (num) {
  num = rand();
  diceRoll(num);
  if (players[0].classList.contains('player--active')) {
    let i = 0;
    if (num === 1) {
      crtScore[i].textContent = 0;
      switchPlayer();
    } else {
      crtScore[i].textContent = Number(crtScore[i].textContent) + num;
    }
  } else {
    let i = 1;
    if (num === 1) {
      crtScore[i].textContent = 0;
      switchPlayer();
    } else {
      crtScore[i].textContent = Number(crtScore[i].textContent) + num;
    }
  }
});
// Active the holdscore button
btnHold.addEventListener('click', function () {
  if (players[0].classList.contains('player--active')) {
    let i = 0;
    score[i].textContent =
      Number(score[i].textContent) + Number(crtScore[i].textContent);
    crtScore[i].textContent = 0;
  } else {
    let i = 1;
    score[i].textContent =
      Number(score[i].textContent) + Number(crtScore[i].textContent);
    crtScore[i].textContent = 0;
  }
  switchPlayer();
});
// Active the newgame button
btnNew.addEventListener('click', function () {
  zeroScores();
  diceRoll(1);
  players[0].classList.add('player--active');
  players[1].classList.remove('player--active');
});
