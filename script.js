'use strict';

let randomNumber = Math.random() * 20;
let formattednumber = Math.trunc(randomNumber) + 1;
let score = 20;
let highscore = 0;

// Declaring elements to eliminate repetations of "document.querySelector('');"
const messageElement = document.querySelector('.message');
const numberElement = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const bodyElement = document.querySelector('body');

// Section to verify Entered number is same as Random number
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (guess >= 1 && guess <= 20) {
    // To Check wether the number is between 1-20
    if (guess == formattednumber) {
      // To Check wether the number is same as Random number
      messageElement.textContent = 'You Win 🎆';
      messageElement.style.width = 'fit-content';
      messageElement.style.backgroundColor = '#00FF00';
      bodyElement.style.backgroundColor = '#0032FF';
      numberElement.style.width = '40rem';
      numberElement.style.backgroundColor = '#36ff00';
      numberElement.textContent = formattednumber;
      if (highscore < score) {
        highscore = score;
      }
      document.querySelector('.highscore').textContent = highscore;
    } else if (guess < formattednumber) {
      // If inputNumber<randomNumber
      if (score > 1) {
        // To let score go NOT below 0
        messageElement.textContent = 'Too Low 📉';
        score--;
        messageElement.style.width = 'fit-content';
        messageElement.style.backgroundColor = '#FF0000';
        scoreElement.textContent = score;
      } else {
        // To display if score goes below 0
        messageElement.textContent = 'You Lost the Game 😞';
        messageElement.style.width = 'fit-content';
        messageElement.style.backgroundColor = '#FF0000';
        scoreElement.textContent = 0;
      }
    } else {
      // If inputNumber>randomNumber
      if (score > 1) {
        messageElement.textContent = 'Too High 💹';
        messageElement.style.width = 'fit-content';
        messageElement.style.backgroundColor = '#FF0000';
        score--;
        scoreElement.textContent = score;
      } else {
        messageElement.textContent = 'You Lost the Game 😞';
        messageElement.style.width = 'fit-content';
        messageElement.style.backgroundColor = '#FF0000';
        scoreElement.textContent = 0;
      }
    }
  } else if (guess == 0) {
    messageElement.textContent = 'No Number ⛔';
    messageElement.style.width = 'fit-content';
    messageElement.style.backgroundColor = '#FF0000';
  } else {
    messageElement.textContent = 'Enter Valid Input';
    messageElement.style.width = 'fit-content';
    messageElement.style.backgroundColor = '#FF0000';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  scoreElement.textContent = score;

  randomNumber = Math.random() * 20;
  formattednumber = Math.trunc(randomNumber) + 1;
  // numberElement.textContent = '?';
  numberElement.textContent = formattednumber;
  numberElement.style.width = '15rem';
  numberElement.style.backgroundColor = '#eee';

  messageElement.textContent = 'Start guessing...';
  messageElement.style.backgroundColor = '';
  bodyElement.style.backgroundColor = '#222';

  document.querySelector('.guess').value = '';
});
