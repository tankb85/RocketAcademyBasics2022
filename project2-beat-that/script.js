//for main function
var player_score1 = 0;
var player_score2 = 0;
var playerFinalScore = 0;

//players current score
var player1_score = 0;
var player2_score = 0;

// players total score
var player1_total = 0;
var player2_total = 0;

// counters
var counter = 0;
var remainder = 0;
var player2 = 0;

// arrray for score recording
var allPlayersTotal = [0, 0];

var rollDice = function () {
  //player 1 first roll
  var randomRollDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomRollDecimal) + 1;
  return randomInteger;
};

var main = function (input) {
  player_score1 = rollDice();
  player_score2 = rollDice();

  if (player_score1 < player_score2) {
    playerFinalScore = player_score2 * 10 + player_score1;
  } else {
    playerFinalScore = player_score1 * 10 + player_score2;
  }

  counter += 1;
  remainder = counter % 2;

  if (remainder === 0) {
    player2_score = playerFinalScore;
    player2_total = player2_total + player2_score;
    allPlayersTotal[1] = player2_total;
  } else {
    player1_score = playerFinalScore;
    player1_total = player1_total + player1_score;
    allPlayersTotal[0] = player1_total;
  }

  //compare results (look into this)
  if (player2_score === 0) {
    return `Player1 rolled ${player1_score}. Player2. please click the submit button to roll your dices.`;
  } else if (player1_score < player2_score) {
    player2 = player2_score;
    //resets the round
    player2_score = 0;
    console.log(player2);
    return `Player2 wins! You rolled ${player2} while Player1 rolled ${player1_score}. Your current total score is: ${allPlayersTotal[1]}`;
  } else {
    player2 = player2_score;
    //resets the round
    player2_score = 0;
    console.log(player2);
    return `Player1 wins! You rolled ${player1_score} while Player2 rolled ${player2}. Your current total score is: ${allPlayersTotal[0]}`;
  }
};
