// import functions and grab DOM elements
import { getRandomThrow, didUserWin } from './get-random-throw.js';



const playButton = document.getElementById('play-button');
const totalWins = document.getElementById('wins');
const totalLosses = document.getElementById('losses');
const totalDraws = document.getElementById('draws');
const resultDisplay = document.getElementById('result-display');

// initialize global state
let wins = 0;
let losses = 0;
let draws = 0;
// set event listeners 

playButton.addEventListener('click', ()=>{
  const selected = document.querySelector('input[type=radio]:checked');
  const userMove = selected.value;
  console.log(userMove);
  
  const compMove = getRandomThrow();
  console.log(compMove)
  
  const result = didUserWin(userMove, compMove);
  console.log(result)

  if (result === 1) {
    resultDisplay.textContent = 'You\'re a winner!';
    wins++;
    totalWins.textContent = wins;
    
  } else if (result === -1) {
    resultDisplay.textContent = 'You\'re a LOOOSER!';
    losses++;
    totalLosses.textContent = losses;

  } else {
    resultDisplay.textContent = 'It\'s a draw, play again!';
    draws++;
    totalDraws.textContent = draws;
  }

})
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
