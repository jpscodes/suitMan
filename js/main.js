/*----- constants -----*/
const WORDS = ['BLOB', 'BING', 'PLOP', 'DANG', 'DRAT', 'KNOB', 'GRUB'];

const MAX_GUESSES = 6;


// Store pictures of suit items indexed at 0 to 7 with optonal suit iteam indexed 5, 6 and 7

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

/*----- event listeners -----*/
playAgainBtn.addEventListener('click', init);
userGuess.addEventListener('click', handleLetter);

/*----- functions -----*/
function handleLetter(evt) {
	playersGuess = evt.target.innerText;
	if (wrongLetters.includes(playersGuess) || guessedWord.includes(playersGuess)) return;
	if (secretWord.includes(playersGuess)) {
		let newGuess = '';
		secretWord.split('').forEach(function (char, idx) {
			newGuess += char === playersGuess ? char : guessedWord.charAt(idx);
			console.log(newGuess)
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
	if (MAX_GUESSES >= wrongLetters.length) {
		if (guessedWord === secretWord) {
			winner = true;	
			return messageEl.innerText = 'You Won!';
		} else {
			messageEl.innerText = `You have ${MAX_GUESSES-wrongLetters.length} wrong guesses left!`;
			console.log('keep trying')
		} 
	}; 
	if ((MAX_GUESSES <= wrongLetters.length)) {
		return messageEl.innerText = `Sorry you lost :( The word was ${secretWord}`;
	};
};

function render() {
	guessedEl.innerText = guessedWord;
	spaceManImg.src = `spaceman/spaceman-${wrongLetters.length}.jpg`;
};

function init() {
	secretWord = WORDS[Math.floor(Math.random()*WORDS.length)];
	wrongLetters = [];
	guessedWord = '_'.repeat(secretWord.length);
	winner = false;
	messageEl.innerText = 'Start Guessing to Play!';
	render();
};

init();