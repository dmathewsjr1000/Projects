// Question 1, Question 2, Question 3, Question 4, Question 5 = Code Challenege
function Game2(characters) {
    this.gameplayers = []; // to hold all the players
    this.gameHighScore = 0; // global high score

    for ( var d = 1; d <= characters; d++) {
        this.gameplayers.push( new Player('player' + d) );
    } // build array of Player objects, creating user names of "player1", "player2" etc
}
Game2.prototype.takeTurn = function takeTurn() {
    var random2 = Math.floor(Math.random() * 10) + 1; // game's number to match
                                                    // random number from 1 - 10
    var playerChoice; // the player's guess
    var currentPlayer; // to simplify this.game[i], which IS the current player
    
    for (var s = 0; s <= 23; s++) {                  // RUNNING 24 TURNS for testing
    console.log('\n\n' + 'ROUND ' + n + '  Match ' + guessMe + ' to win.' + '\n')
    
    for(var m = 0; m < this.gameplayers.length; m++) {
        currentPlayer = this.game[m];
        playerChoice = currentPlayer.predict();

        if (playerChoice === random2) {

				player.tallyScore();
				

				if (this.correct % 3 === 0) {

					player.addLife();
			}
				if (player.life === 0) {
			
					player.gameOver();
			
			}	
		}
       	else {

       			player.minusLife();
       	}
    }                                           
  }
};

function Player(name) {
	this.name = name;
	this.score = 0;
	this.highscore = 0;
	this.life = 3;
	this.correct = 0;
}
	Player.prototype.predict = function predict() {
    return Math.floor(Math.random() * 10) + 1; 
        // random number from 1 - 10
};

	Player.prototype.tallyScore = function() {
	// body...
	//Tally score of player and keep count of the correct answers 
		this.score += 10;
		this.correct++;
		if (this.score > this.highscore) {
		   this.highscore = this.score;
		   console.log(this.name + ' this is your highscore!!!!' + this.highscore);
	}
}
	Player.prototype.gameOver = function() {
	// body
	// This code represent the reset and the game is over. 
		   this.score = 0;
		   this.life = 3;
		   this.correct = 0;
		   console.log(this.name + ' Please start again.' + ' This is current highscore!!!!' + this.highscore + ' Game Over!!!');
	
	
}
	Player.prototype.addLife = function() {
	// body
	// Add extra life
		this.life++;
		console(this.name + ' you just gained a life...' + ' This is your new life: ' + this.life);
	}
	Player.prototype.minusLife = function() {
	// body
	// Take away life	
		this.life--;
		console.log(this.name + ' you just lossed a life...' + ' This is your new life: ' + this.life);
	}
	Player.prototype.editName = function(newname) {
		// Edit the player name
		this.name = newname;
	}
	function Game(player, guess) {
		var random = Math.random() * (10 - 1) + 1;
			if (guess === Math.floor(random)) {

				player.tallyScore();
				

				if (this.correct % 3 === 0) {

					player.addLife();
			}

		}
			
		if (guess !== Math.floor(random)) {
		
			player.minusLife();
			if (player.life === 0) {
			
				player.gameOver();
			
		}

		}
            
			
			 
		

	
		
}
			

	
player1 = new Player('Junior');
player2 = new Player('Calvin');
player3 = new Player('player3');

// https://medium.com/@dmathewsjr07106/the-guessing-game-f28d1863dc9d#.bio98o9a0
