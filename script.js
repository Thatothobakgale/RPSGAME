const intro = document.querySelector('.intro');
const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');
const AIDualPlay = document.querySelector('.AIDualPlay');
const btnHome = document.querySelector('.home');
const btnHome2 = document.querySelector('.home2');
const btnHome3 = document.querySelector('.home3');
const audio = document.querySelector('.audio');
const namesForm = document.getElementById('names-form');
const nameInput1 = document.getElementById('name1');
const nameInput2 = document.getElementById('name2');
const btnstart = document.getElementById('btnStart');
const playername1 = document.getElementById('playerName1');
const playername2 = document.getElementById('playerName2');

//add event listener to start button
btnStart.addEventListener('click', (e) => {
	
	//prevent default form submission behavior
	e.preventDefault(); 
	
	//get user name from input field
	const name1 = nameInput1.value;
	const name2 = nameInput2.value;
	
	//display the names in the other form
	playername1.innerText = `${name1}`;
	playername2.innerText = `${name2}`;
});

btnHome.addEventListener('click', () => {
	//hide AI challenge game form
	document.getElementById('AIgame').style.display = 'none';
	
	//show AIDualForm form
	document.getElementById('home').style.display = 'block';
});

btnHome2.addEventListener('click', () => {
	//hide dual challenge game form
	document.getElementById('dual').style.display = 'none';
	
	//show AIDualForm form
	document.getElementById('home').style.display = 'block';
});

btnHome3.addEventListener('click', () => {
	//hide dual challenge game form
	document.getElementById('names-form').style.display = 'none';
	
	//show AIDualForm form
	document.getElementById('home').style.display = 'block';
});

setTimeout(() => {
  intro.style.display = 'none';
  AIDualPlay.style.display = 'block';
}, 3000);

let colors = ['#8e44ad', '#3498db', 'green', 'purple'];
let colorIndex = 0;

setInterval(() => { 
	AIDualPlay.style.backgroundColor = colors[colorIndex];
	colorIndex = (colorIndex + 1) % colors.length;
}, 750);

function AIplay() { 
	var playerChoice = document.getElementById('choice');
	var AIresultt = document.getElementById('AIresult');
	var playerScore = document.getElementById('result4');
	var AIScore = document.getElementById('result5');
	var winnerr = document.getElementById('winner');
	var replayy = document.getElementById('replay');
	var WonLostt = document.getElementById('WonLost');
	
	document.getElementById('btnPlay').disabled = false;
	
	playerChoice.value = "";
	AIresultt.textContent = "";
	playerScore.textContent = "";
	AIScore.textContent = "";
	winnerr.textContent = "";
	replayy.textContent = "";
	WonLostt.textContent = "";
	Pscore = 0;
	Ascore = 0;
	
  let aiColorIndex = 0;  
  setTimeout(() => {
    AIDualPlay.style.display = 'none';
    container.style.display = 'block';
  });

  setInterval(() => {
    container.style.backgroundColor = colors[aiColorIndex];
    aiColorIndex = (aiColorIndex + 1) % colors.length;
  }, 750);
}


function refresh2(){
	var answerr = document.getElementById('choice');
	var AIresultt = document.getElementById('AIresult');
	var WonLostt = document.getElementById('WonLost');
	var winnerr = document.getElementById('winner');
	var replayy = document.getElementById('replay');
	var Pscoree = document.getElementById('result4');
	var Ascoree = document.getElementById('result5');
	document.getElementById('btnPlay').disabled = false;
	
	answerr.value = "";
	AIresultt.textContent = "";
	WonLostt.textContent = "";
	Pscoree.textContent = "";
	Ascoree.textContent = "";
	winnerr.textContent = "";
	replayy.textContent = "";
	Ascore =0;
	Pscore =0;
	
}

function refresh3(){
	var namee = document.getElementById('name1');
	var nameee = document.getElementById('name2');
	
	namee.value = "";
	nameee.value = "";
}

	let Pscore = 0, Ascore =0;
function play(){
	var answer = document.getElementById('choice').value; 
	let randomNumber = Math.floor(Math.random() * 10); 
	
	if(answer == 2){
		if(randomNumber === 1 || randomNumber === 4 ||  randomNumber === 7){
			document.getElementById('AIresult').innerHTML = "Scissors";
			document.getElementById('WonLost').innerHTML = "YOU LOST!!!";
			Ascore++;
			if(Ascore == 6){
				document.getElementById('winner').innerHTML = "Game Over. AI WINS The game!!!";
				document.getElementById('replay').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay').disabled = true;
			} 
			document.getElementById('result5').innerHTML = Ascore;
		  }
			
		else if(randomNumber === 2 || randomNumber === 5 || randomNumber === 8){
			document.getElementById('AIresult').innerHTML = "Paper";
			document.getElementById('WonLost').innerHTML = "TIE!!!";
	   }
		else if(randomNumber === 3 || randomNumber === 6 || randomNumber === 9){
			document.getElementById('AIresult').innerHTML = "Rock";
			document.getElementById('WonLost').innerHTML = "YOU WON!!!";
			Pscore++;
			if(Pscore == 6){
				document.getElementById('winner').innerHTML = "Game Over. Player WINS The game!!!";
				document.getElementById('replay').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay').disabled = true;
			} 
			document.getElementById('result4').innerHTML = Pscore;
		}
	}
	
	else if(answer == 1){
		if(randomNumber === 1 || randomNumber === 4 ||  randomNumber === 7){
			document.getElementById('AIresult').innerHTML = "Scissors";
			document.getElementById('WonLost').innerHTML = "YOU WON!!!";
			Pscore++;
			if(Pscore == 6){
				document.getElementById('winner').innerHTML = "Game Over. Player WINS The game!!!";
				document.getElementById('replay').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay').disabled = true;
			} 
			document.getElementById('result4').innerHTML = Pscore;
		}
		else if(randomNumber === 2 || randomNumber === 5 || randomNumber === 8){
			document.getElementById('AIresult').innerHTML = "Paper";
			document.getElementById('WonLost').innerHTML = "YOU LOST!!!";
			Ascore++;
			if(Ascore == 6){
				document.getElementById('winner').innerHTML = "Game Over. AI WINS The game!!!";
				document.getElementById('replay').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay').disabled = true;
			} 
			document.getElementById('result5').innerHTML = Ascore;
	   }
		else if(randomNumber === 3 || randomNumber === 6 || randomNumber === 9){
			document.getElementById('AIresult').innerHTML = "Rock";
			document.getElementById('WonLost').innerHTML = "TIE!!!";
		}
	}
	
	else if(answer == 3){
		if(randomNumber === 1 || randomNumber === 4 ||  randomNumber === 7){
			document.getElementById('AIresult').innerHTML = "Scissors";
			document.getElementById('WonLost').innerHTML = "TIE!!!";
		}
		else if(randomNumber === 2 || randomNumber === 5 || randomNumber === 8){
			document.getElementById('AIresult').innerHTML = "Paper";
			document.getElementById('WonLost').innerHTML = "YOU WON!!!";
			Pscore++;
			if(Pscore == 6){
				document.getElementById('winner').innerHTML = "Game Over. Player WINS The game!!!";
				document.getElementById('replay').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay').disabled = true;
			} 
			document.getElementById('result4').innerHTML = Pscore;
	   }
		else if(randomNumber === 3 || randomNumber === 6 || randomNumber === 9){
			document.getElementById('AIresult').innerHTML = "Rock";
			document.getElementById('WonLost').innerHTML = "YOU LOST!!!";
			Ascore++;
			if(Ascore == 6){
				document.getElementById('winner').innerHTML = "Game Over. AI WINS The game!!!";
				document.getElementById('replay').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay').disabled = true;
			} 
			document.getElementById('result5').innerHTML = Ascore;
		}
	}
}

function Dualplay(){
	var namee1 = document.getElementById('name1');
	var namee2 = document.getElementById('name2');
	let playerColorIndex = 0; 

	namee1.value = "";
	namee2.value = "";
	
	setTimeout(() => {
	AIDualPlay.style.display = 'none';
	container3.style.display = 'block';
	});

	setInterval(() => {
	container3.style.backgroundColor = colors[playerColorIndex];
	playerColorIndex = (playerColorIndex + 1) % colors.length;
	  }, 750);
}

function start(){
	var answerrr = document.getElementById('choice1');
	var answerrrr = document.getElementById('choice2');
	var WonLost2 = document.getElementById('WonLost2');
	var winnerrr = document.getElementById('winner2');
	var replayyy = document.getElementById('replay2');
	var Player1resultt = document.getElementById('Player1result');
	var Player2resultt = document.getElementById('Player2result');
	var player1resulttt = document.getElementById('player1result');
	var player2resulttt = document.getElementById('player2result');
	var name = document.getElementById('name1').value;
	var nname = document.getElementById('name2').value;
	let startColorIndex = 0; 
	
	document.getElementById('btnPlay2').disabled = false;
	
	answerrr.value = "";
	answerrrr.value = "";
	Player1resultt.textContent = "";
	Player2resultt.textContent = "";
	WonLost2.textContent = "";
	winnerrr.textContent = "";
	replayyy.textContent = "";
	player1resulttt.textContent = "";
	player2resulttt.textContent = "";
	P1score =0;
	P2score =0;
	
	if(document.getElementById('name1').value === "" && document.getElementById('name2').value === ""){
		alert("Fields cannot be empty");
	}
	else if(document.getElementById('name1').value !== "" && document.getElementById('name2').value === ""){
		alert("Fill in both fields");
	}
	else if(document.getElementById('name1').value === "" && document.getElementById('name2').value !== ""){
		alert("Fill in both fields");
	}
	else if(document.getElementById('name1').value === document.getElementById('name2').value){
		alert("Enter different names");
	}
	else if(document.getElementById('name2').value === document.getElementById('name1').value){
		alert("Enter different names");
	}
	else{
		document.getElementById('btnStart').disabled = false;
		
		setTimeout(() => {
		container3.style.display = 'none';
		container2.style.display = 'block';
		});

		setInterval(() => {
		container2.style.backgroundColor = colors[startColorIndex];
		startColorIndex = (startColorIndex + 1) % colors.length;
		  }, 750); 
	}
}

function refresh(){
	var playerChoice = document.getElementById('choice');
	var AIresultt = document.getElementById('AIresult');
	var playerScore = document.getElementById('result4');
	var AIScore = document.getElementById('result5');
	var winnerr = document.getElementById('winner');
	var replayy = document.getElementById('replay');
	var WonLostt = document.getElementById('WonLost');
	
	document.getElementById('btnPlay').disabled = false;
	
	playerChoice.value = "";
	AIresultt.textContent = "";
	playerScore.textContent = "";
	AIScore.textContent = "";
	winnerr.textContent = "";
	replayy.textContent = "";
	WonLostt.textContent = "";
	Pscore = 0;
	Ascore = 0;
}
function refresh2(){
	var answerrr = document.getElementById('choice1');
	var answerrrr = document.getElementById('choice2');
	var WonLost2 = document.getElementById('WonLost2');
	var winnerrr = document.getElementById('winner2');
	var replayyy = document.getElementById('replay2');
	var Player1resultt = document.getElementById('Player1result');
	var Player2resultt = document.getElementById('Player2result');
	var player1resulttt = document.getElementById('player1result');
	var player2resulttt = document.getElementById('player2result');
	document.getElementById('btnPlay2').disabled = false;
	
	answerrr.value = "";
	answerrrr.value = "";
	Player1resultt.textContent = "";
	Player2resultt.textContent = "";
	WonLost2.textContent = "";
	winnerrr.textContent = "";
	replayyy.textContent = "";
	player1resulttt.textContent = "";
	player2resulttt.textContent = "";
	P1score =0;
	P2score =0;
}

let P1score = 0, P2score =0;
function play2(){
	var number = document.getElementById('choice1').value; 
	var numberr = document.getElementById('choice2').value; 
	let randomNumberr = Math.floor(Math.random() * 10); 
	
	if(number == 1 && numberr == 2){
		if(randomNumberr === 1 || randomNumberr === 4 ||  randomNumberr === 7){
			document.getElementById('Player1result').innerHTML = "PAPER";
			document.getElementById('Player2result').innerHTML = "SCISSORS";
			document.getElementById('WonLost2').innerHTML = "Player 2 WINS!!!";
			P2score++;
			if(P2score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 2 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player2result').innerHTML = P2score;
		  }
			
		else if(randomNumberr === 2 || randomNumberr === 5 || randomNumberr === 8){
			document.getElementById('Player1result').innerHTML = "PAPER";
			document.getElementById('Player2result').innerHTML = "PAPER";
			document.getElementById('WonLost2').innerHTML = "TIE!!!";
	   }
		else if(randomNumberr === 3 || randomNumberr === 6 || randomNumberr === 9){
			document.getElementById('Player1result').innerHTML = "Rock";
			document.getElementById('Player2result').innerHTML = "SCISSORS";
			document.getElementById('WonLost2').innerHTML = "Player 1 WINS!!!";
			P1score++;
			if(P1score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 1 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player1result').innerHTML = P1score;
		}
	}
	
	else if(number == 3 && numberr == 2){
		if(randomNumberr === 1 || randomNumberr === 4 ||  randomNumberr === 7){
			document.getElementById('Player1result').innerHTML = "SCISSORS";
			document.getElementById('Player2result').innerHTML ="ROCK"; 
			document.getElementById('WonLost2').innerHTML = "Player 2 WINS!!!";
			P2score++;
			if(P2score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 2 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player2result').innerHTML = P2score;
		}
		else if(randomNumberr === 2 || randomNumberr === 5 || randomNumberr === 8){
			document.getElementById('Player1result').innerHTML = "PAPER";
			document.getElementById('Player2result').innerHTML = "ROCK";
			document.getElementById('WonLost2').innerHTML = "Player 1 WINS!!!";
			P1score++;
			if(P1score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 1 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player1result').innerHTML = P1score;
	   }
		else if(randomNumberr === 3 || randomNumberr === 6 || randomNumberr === 9){
			document.getElementById('Player1result').innerHTML = "ROCK";
			document.getElementById('Player2result').innerHTML = "ROCK";
			document.getElementById('WonLost2').innerHTML = "TIE!!!";
		}
	}
	
	else if(number == 1 && numberr == 3){
		if(randomNumberr === 1 || randomNumberr === 4 ||  randomNumberr === 7){
			document.getElementById('Player1result').innerHTML = "SCISSORS";
			document.getElementById('Player2result').innerHTML = "SCISSORS";
			document.getElementById('WonLost2').innerHTML = "TIE!!!";
		}
		else if(randomNumberr === 2 || randomNumberr === 5 || randomNumberr === 8){
			document.getElementById('Player1result').innerHTML = "PAPER";
			document.getElementById('Player2result').innerHTML = "ROCK";
			document.getElementById('WonLost2').innerHTML = "PLAYER 1 WINS!!!";
			P1score++;
			if(P1score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 1 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player1result').innerHTML = P1score;
	   }
		else if(randomNumberr === 3 || randomNumberr === 6 || randomNumberr === 9){
			document.getElementById('Player1result').innerHTML = "PAPER";
			document.getElementById('Player2result').innerHTML = "SCISSORS";
			document.getElementById('WonLost2').innerHTML = "PLAYER 2 WINS!!!";
			P2score++;
			if(P2score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 2 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player2result').innerHTML = P2score;
		}
	}
	
	else if(number == 2 && numberr == 3){
		if(randomNumberr === 1 || randomNumberr === 4 ||  randomNumberr === 7){
			document.getElementById('Player1result').innerHTML = "SCISSORS";
			document.getElementById('Player2result').innerHTML = "ROCK";
			document.getElementById('WonLost2').innerHTML = "Player 2 WINS!!!";
			P2score++;
			if(P2score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 2 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player2result').innerHTML = P2score;
		}
		else if(randomNumberr === 2 || randomNumberr === 5 || randomNumberr === 8){
			document.getElementById('Player1result').innerHTML = "PAPER";
			document.getElementById('Player2result').innerHTML = "ROCK";
			document.getElementById('WonLost2').innerHTML = "PLAYER 1 WINS!!!";
			P1score++;
			if(P1score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 1 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player1result').innerHTML = P1score;
	   }
		else if(randomNumberr === 3 || randomNumberr === 6 || randomNumberr === 9){
			document.getElementById('Player1result').innerHTML = "PAPER";
			document.getElementById('Player2result').innerHTML = "ROCK";
			document.getElementById('WonLost2').innerHTML = "PLAYER 1 WINS!!!";
			P1score++;
			if(P1score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 1 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player1result').innerHTML = P1score;
		}
	}
	
	else if(number == 2 && numberr == 1){
		if(randomNumberr === 1 || randomNumberr === 4 ||  randomNumberr === 7){
			document.getElementById('Player1result').innerHTML = "SCISSORS";
			document.getElementById('Player2result').innerHTML = "PAPER";
			document.getElementById('WonLost2').innerHTML = "Player 1 WINS!!!";
			P1score++;
			if(P1score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 1 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player1result').innerHTML = P1score;
		}
		else if(randomNumberr === 2 || randomNumberr === 5 || randomNumberr === 8){
			document.getElementById('Player1result').innerHTML = "SCISSORS";
			document.getElementById('Player2result').innerHTML = "ROCK";
			document.getElementById('WonLost2').innerHTML = "PLAYER 2 WINS!!!";
			P2score++;
			if(P2score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 2 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player2result').innerHTML = P2score;
	   }
		else if(randomNumberr === 3 || randomNumberr === 6 || randomNumberr === 9){
			document.getElementById('Player1result').innerHTML = "PAPER";
			document.getElementById('Player2result').innerHTML = "PAPER";
			document.getElementById('WonLost2').innerHTML = "TIE!!!";
		}
	}
	
	else if(number == 2 && numberr == 2){
		if(randomNumberr === 1 || randomNumberr === 4 ||  randomNumberr === 7){
			document.getElementById('Player1result').innerHTML = "SCISSORS";
			document.getElementById('Player2result').innerHTML = "SCISSORS";
			document.getElementById('WonLost2').innerHTML = "TIE!!!";
		}
		else if(randomNumberr === 2 || randomNumberr === 5 || randomNumberr === 8){
			document.getElementById('Player1result').innerHTML = "ROCK";
			document.getElementById('Player2result').innerHTML = "PAPER";
			document.getElementById('WonLost2').innerHTML = "PLAYER 2 WINS!!!";
			P2score++;
			if(P2score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 2 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player2result').innerHTML = P2score;

	   }
		else if(randomNumberr === 3 || randomNumberr === 6 || randomNumberr === 9){
			document.getElementById('Player1result').innerHTML = "PAPER";
			document.getElementById('Player2result').innerHTML = "ROCK";
			document.getElementById('WonLost2').innerHTML = "PLAYER 1 WINS!!!";
			P1score++;
			if(P1score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 1 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player1result').innerHTML = P1score;
		}
	}
	
	else if(number == 3 && numberr == 1){
		if(randomNumberr === 1 || randomNumberr === 4 ||  randomNumberr === 7){
			document.getElementById('Player1result').innerHTML = "ROCK";
			document.getElementById('Player2result').innerHTML = "PAPER";
			document.getElementById('WonLost2').innerHTML = "PLAYER 2 WINS!!!";
			P2score++;
			if(P2score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 2 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player2result').innerHTML = P2score;
		}
		else if(randomNumberr === 2 || randomNumberr === 5 || randomNumberr === 8){
			document.getElementById('Player1result').innerHTML = "ROCK";
			document.getElementById('Player2result').innerHTML = "ROCK";
			document.getElementById('WonLost2').innerHTML = "TIE!!!";
	   }
		else if(randomNumberr === 3 || randomNumberr === 6 || randomNumberr === 9){
			document.getElementById('Player1result').innerHTML = "SCISSORS";
			document.getElementById('Player2result').innerHTML = "ROCK";
			document.getElementById('WonLost2').innerHTML = "PLAYER 2 WINS!!!";
			P2score++;
			if(P2score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 2 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player2result').innerHTML = P2score;
		}
	}
	
	else if(number == 3 && numberr == 3){
		if(randomNumberr === 1 || randomNumberr === 4 ||  randomNumberr === 7){
			document.getElementById('Player1result').innerHTML = "ROCK";
			document.getElementById('Player2result').innerHTML = "ROCK";
			document.getElementById('WonLost2').innerHTML = "TIE!!!";
		}
		else if(randomNumberr === 2 || randomNumberr === 5 || randomNumberr === 8){
			document.getElementById('Player1result').innerHTML = "ROCK";
			document.getElementById('Player2result').innerHTML = "SCISSORS";
			document.getElementById('WonLost2').innerHTML = "Player 1 WINS!!!";
			P1score++;
			if(P1score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 1 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player1result').innerHTML = P1score;
	   }
		else if(randomNumberr === 3 || randomNumberr === 6 || randomNumberr === 9){
			document.getElementById('Player1result').innerHTML = "ROCK";
			document.getElementById('Player2result').innerHTML = "PAPER";
			document.getElementById('WonLost2').innerHTML = "PLAYER 2 WINS!!!";
			P2score++;
			if(P2score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 2 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player2result').innerHTML = P2score;
		}
	}
	
	else if(number == 1 && numberr == 1){
		if(randomNumberr === 1 || randomNumberr === 4 ||  randomNumberr === 7){
			document.getElementById('Player1result').innerHTML = "PAPER";
			document.getElementById('Player2result').innerHTML = "PAPER";
			document.getElementById('WonLost2').innerHTML = "TIE!!!";
		}
		else if(randomNumberr === 2 || randomNumberr === 5 || randomNumberr === 8){
			document.getElementById('Player1result').innerHTML = "ROCK";
			document.getElementById('Player2result').innerHTML = "SCISSORS";
			document.getElementById('WonLost2').innerHTML = "Player 1 WINS!!!";
			P1score++;
			if(P1score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 1 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player1result').innerHTML = P1score;
	   }
	   
		else if(randomNumberr === 3 || randomNumberr === 6 || randomNumberr === 9){
			document.getElementById('Player1result').innerHTML = "ROCK";
			document.getElementById('Player2result').innerHTML = "PAPER";
			document.getElementById('WonLost2').innerHTML = "PLAYER 2 WINS!!!";
			P2score++;
			if(P2score == 6){
				document.getElementById('winner2').innerHTML = "Game Over. Player 2 WINS The game!!!";
				document.getElementById('replay2').innerHTML = "Click REFRESH button to continue playing.";
				document.getElementById('btnPlay2').disabled = true;
			} 
			document.getElementById('player2result').innerHTML = P2score;
		}
	}
}