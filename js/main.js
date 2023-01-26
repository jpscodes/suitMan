/*----- constants -----*/
let planetNames = ['PLUTO', 'MERCURY', 'VENUS', 'EARTH', 'MARS', 'JUPITER', 'SATURN', 'URANUS', 'NEPTUNE', 'CERES', 'HAUMEA', 'ERIS', 'MAKEMAKE', 'PLANETX'];



// ['OVER', 'UNDER', 'MONEYLINE', 'SPREAD', 'LOCK', 'PARLAY', 'BET', 'GAMBLING', 'BANKROLL']
const WORDS = ['BLOB', 'BING', 'PLOP', 'DANG', 'DRAT', 'KNOB', 'GRUB', 'LOCK', 'OVER', 'SPREAD', 'FLING', 'BASEBALL', 'SLEEP',];
const MAX_GUESSES = 6;

/*----- state variables -----*/
let secretWord;
let guessedWord;
let wrongLetters;
let winner;

/*----- cached elements  -----*/
const guessedEl = document.getElementById('guessed-word');
const playAgainBtn = document.querySelector('footer');
const userGuess = document.querySelector('main');
const spaceManImg = document.querySelector('img');
const messageEl = document.querySelector('h2'); //not used yet
const letterEls = [...document.querySelectorAll('.row1btn > button, .row2btn > button, .row3btn > button')];

/*----- event listeners -----*/
playAgainBtn.addEventListener('click', init);
userGuess.addEventListener('click', handleLetter);

/*----- functions -----*/

function renderButtonStyle () {
	letterEls.forEach(function(btn) {
		const ltr = btn.textContent;
		if (wrongLetters.includes(ltr)) {
			btn.className = 'badGuess';
		} else if (guessedWord.includes(ltr)) {
			btn.className = 'goodGuess';
		} else {
			btn.className = '';
		}
	});
};


function handleLetter(evt) {
	if (winner) userGuess.removeEventListener();
	playersGuess = evt.target.innerText;
	if (wrongLetters.includes(playersGuess) || guessedWord.includes(playersGuess)) return;
	if (secretWord.includes(playersGuess)) {
		let newGuess = '';
		secretWord.split('').forEach(function (char, idx) {
			newGuess += char === playersGuess ? char : guessedWord.charAt(idx);
			console.log(char)
			console.log(idx)
			console.log(playersGuess)
			console.log(newGuess)
			console.log(guessedWord)
			console.log(guessedWord.charAt(idx))
		});
		guessedWord = newGuess;
	} else {
		wrongLetters.push(playersGuess);
	} 
	// update winner state
	winner = getWinner();
	render();
};

function getWinner() {
	if (MAX_GUESSES > wrongLetters.length) {
		if (guessedWord === secretWord) {
			messageEl.innerText = 'You Won!';
			return winner = true;	
		} else {
			messageEl.innerText = `You have ${MAX_GUESSES-wrongLetters.length} wrong guesses left!`;
		} 
	}; 
	if ((MAX_GUESSES <= wrongLetters.length)) {
		spaceManImg.style.visibility = 'hidden';
		messageEl.innerText = `Sorry you lost. The word was ${secretWord}`;
		return winner = 'False';
	};
};

function render() {
	guessedEl.innerText = guessedWord;
	spaceManImg.src = `spaceman/spaceman-${wrongLetters.length} (1).jpg`;
	renderButtonStyle();
};

function init() {
	secretWord = WORDS[Math.floor(Math.random()*WORDS.length)];
	wrongLetters = [];
	guessedWord = '_'.repeat(secretWord.length);
	winner = null;
	messageEl.innerText = 'Start Guessing to Play!';
	render();
};

init();

