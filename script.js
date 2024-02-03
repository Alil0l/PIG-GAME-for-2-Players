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

// ---Dice Rolling function--- //
// diceimg.src = `dice-${1}.png`;
//      OR USING SWITCH STATMENT
// const diceRoll = function (num) {
//   switch (num) {
//     case 1:
//       diceimg.setAttribute('src', 'dice-1.png');
//       break;
//     case 2:
//       diceimg.setAttribute('src', 'dice-2.png');
//       break;
//     case 3:
//       diceimg.setAttribute('src', 'dice-3.png');
//       break;
//     case 4:
//       diceimg.setAttribute('src', 'dice-4.png');
//       break;
//     case 5:
//       diceimg.setAttribute('src', 'dice-5.png');
//       break;
//     case 6:
//       diceimg.setAttribute('src', 'dice-6.png');
//       break;
//   }
// };

//------Activating the buttons-------//
// Zero Scores & hidden Dice
zeroScores();
diceimg.classList.add('hidden');
// Active the roll button
btnRoll.addEventListener('click', function (num) {
  diceimg.classList.remove('hidden');
  num = rand();
  diceimg.src = `dice-${num}.png`;
  // diceRoll(num);

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
    score[0].textContent =
      Number(score[0].textContent) + Number(crtScore[0].textContent);
    crtScore[0].textContent = 0;
    switchPlayer();
    if (score[0].textContent >= 100) {
      score[0].textContent = `😎${score[0].textContent}`;
      score[1].textContent = `😭${score[1].textContent}`;
      players[0].classList.toggle('player--active');
      players[1].classList.toggle('player--active');
      btnHold.disabled = true;
      btnHold.style.backgroundColor = '#888';
      btnRoll.disabled = true;
      btnRoll.style.backgroundColor = '#888';
      diceimg.classList.add('hidden');
    }
  } else {
    score[1].textContent =
      Number(score[1].textContent) + Number(crtScore[1].textContent);
    crtScore[1].textContent = 0;
    switchPlayer();
    if (score[1].textContent >= 100) {
      score[0].textContent = `😭${score[0].textContent}`;
      score[1].textContent = `😎${score[1].textContent}`;
      players[0].classList.toggle('player--active');
      players[1].classList.toggle('player--active');
      btnHold.disabled = true;
      btnHold.style.backgroundColor = '#888';
      btnRoll.disabled = true;
      btnRoll.style.backgroundColor = '#888';
      diceimg.classList.add('hidden');
    }
  }
});
// Active the newgame button
btnNew.addEventListener('click', function () {
  zeroScores();
  diceimg.classList.add('hidden');
  btnHold.disabled = false;
  btnHold.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
  btnRoll.disabled = false;
  btnRoll.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
  players[0].classList.add('player--active');
  players[1].classList.remove('player--active');
});
