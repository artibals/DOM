/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore , activePlayer, gamePlaying;

init();

var lastDice;
var winningScore;

//document.querySelector('#current-' + activePlayer).textContent = dice; --> selects element in HTML with id 'current-0 or 1' and changes its text(only text) with dice variable
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; --> changes inner html(not only text) content with italic font

//var x = document.querySelector('#score-0').textContent; --> takes elements text and stores it in the variable
//console.log(x); // will be 43



document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
        // 1. Random number
        var diceTop = Math.floor(Math.random() * 6 + 1);
        var diceBottom = Math.floor(Math.random() * 6 + 1);
        
        // 2. Display the result
        var diceDOMtop = document.getElementById('dice-1');
        var diceDOMbottom = document.getElementById('dice-2');

        diceDOMtop.style.display = 'block';
        diceDOMbottom.style.display = 'block';

        diceDOMtop.src = './images/dice-' + diceTop + '.png';
        diceDOMbottom.src = './images/dice-' + diceBottom + '.png';
        
        // 3. Update the round score if the rolled number was NOT a 1
        if(diceTop === 6 && diceBottom === 6){
            // Player looses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0'
            nextPlayer();
        } else if(diceTop !== 1 && diceBottom !==1) {
            //Add score
            roundScore += (diceTop + diceBottom);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();        
        }

        lastDice = diceTop;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        // Add Current Score to Global Score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        chooseScore();

        // Check if player won the game
        if(scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Next player
        nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init); // --> call back function

document.querySelector('.btn-rules').addEventListener('click', function() {
    alert('- The game has 2 players, playing in rounds. \n- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score. \n- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it\'s the next player\'s turn. \n- The player can choose to \'HOLD\', which means that his ROUND score gets added to his GLOBAL score. After that, it\'s the next player\'s turn. \n- You can write your own TOP SCORE. TOP SCORE is 100 by default. The first player to reach TOP SCORE points on GLOBAL score wins the game. \n- Also there is a SECRET rule, it will be a SURPRIZE! :)');
})

function chooseScore() {
    var topScore = document.querySelector(".top-score").value;
        if(topScore){
            winningScore = topScore;
        } else {
            winningScore = 100;
        }
}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
};

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none'; // takes element and changes it css style

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector(".top-score").value = '';
};