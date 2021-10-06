// import functions and grab DOM elements
// import { getRandomThrow } from './get-random-throw';



const playButton = document.getElementById('play-button');
const totalWins = document.getElementById('wins');
const totalLosses = document.getElementById('losses');

// initialize global state
let wins = 0;
let losses = 0;
// set event listeners 

playButton.addEventListener('click', ()=>{
  const selected = document.querySelector('input[type=radio]:checked');
  const userMove = selected.value;
  console.log(userMove);
   

})
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
