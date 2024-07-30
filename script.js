"use strict";
 const player0E1 = document.querySelector(".player_0");
  const player1E1 = document.querySelector(".player_1");

const score0= document.getElementById("score_0");
const score1 = document.getElementById("score_1");
const diceE1 = document.querySelector(".dice");

 const current0E1 = document.getElementById("current_0");
 const current1E1 = document.getElementById("current_1");

//btns
 const btnRoll = document.querySelector(".btn_roll");
 const btnHold = document.querySelector(".btn_hold");
 const btnNew = document.querySelector(".btn_new");


 let scores, current, currentplayer, gamePlay;
 //initialise
 const bold = function () {
  score0.textContent = 0;
 score1.textContent = 0;
 diceE1.classList.add("hidden");

 current = 0;
 currentplayer = 0;
  scores = [0,0];
  gamePlay = true;

  current0E1.textContent = 0;
  current1E1.textContent = 0;
  diceE1.classList.add("hidden");

  player0E1.classList.remove("player_winner");
  player1E1.classList.remove("player_winner");
  player0E1.classList.add("player_active");
  player1E1.classList.remove("player_active");
 
 };

 bold();

//switch players
const switchPlayer = function () {
  document.getElementById(`current_${currentplayer}`).textContent = 0;
  currentplayer = currentplayer === 0 ? 1 : 0;
  current = 0;
  player0E1.classList.toggle("player_active");
  player1E1.classList.toggle("player_active");
}
  
btnRoll.addEventListener("click", function() {
  if(gamePlay) {
    diceE1.classList.remove("hidden");

//generate random numbers for dice roll
 const dice = Math.trunc(Math.random() * 6) + 1;  
    console.log(dice);

      //generate random images for dice roll    
  diceE1.src = (`./image/dice-${dice}.png`);
  
  console.log(diceE1);

  //check for dice
  if (dice !== 1) {
    //display rolled dice
    current += dice;
    current0E1.textContext = current;
   document.getElementById(`current_${currentplayer}`).textContent = current;
  } else {
    switchPlayer ();
 
   }
    }
});

//btn hold
btnHold.addEventListener("click", function() {
  if(gamePlay) {
    scores[currentplayer] += current;
  document.getElementById(`score_${currentplayer}`).textContent = scores[currentplayer];

  if(scores[currentplayer] >= 100) {
    gamePlay = false;
    diceE1.classList.add("hidden");
    
    document.querySelector(`.player_${currentplayer}`).classList.add("player_winner");
    document.querySelector(".winner").classList.remove("hidden");
    document.querySelector(".winner").textContent = `player_${currentplayer = 1} win`;

     document.querySelector(`.player_${currentplayer}`).classList.remove("player_active");
     
   } else{
    //switch player
   switchPlayer ();
  }

  }
});
   
//btn new game
btnNew.addEventListener("click", bold);


 