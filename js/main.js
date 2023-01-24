/*----- constants -----*/
const WORDS = ['BLOB', 'BING', 'PLOP', 'DANG', 'DRAT', 'KNOB', 'GRUB'];

const MAX_GUESSES = 6;

const IMGS = [
	'img/spaceman-6.jpg',
	'img/spaceman-6.jpg',
	'img/spaceman-6.jpg',
	'img/spaceman-6.jpg',
	'img/spaceman-6.jpg',
	'img/spaceman-6.jpg',
	'C:\Users\Jeremy\Downloads\spaceman-6.jpg',
]
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

playAgainBtn.addEventListener('click', init);
userGuess.addEventListener('click', handleLetter);

function handleLetter(evt) {
	
	playersGuess = evt.target.innerText;
	if (wrongLetters.includes(playersGuess) || guessedWord.includes(playersGuess)) return;
	if (secretWord.includes(playersGuess)) {
		let newGuess = '';
		secretWord.split('').forEach(function (char, idx) {
			newGuess += char === playersGuess ? char : guessedWord.charAt(idx);
		});
		guessedWord = newGuess;
	} else {
		wrongLetters.push(playersGuess);
	} 
	// update winner state
	getWinner();
	render();
};

/*----- event listeners -----*/


/*----- functions -----*/
function getWinner() {
	
};
function render() {
	guessedEl.innerText = guessedWord;
	spaceManImg.src = `spaceman/spaceman-${wrongLetters.length}.jpg`;
};

function init() {
	secretWord = WORDS[Math.floor(Math.random()*WORDS.length)];
	wrongLetters = [];
	guessedWord = '_'.repeat(secretWord.length);
	winner = null;
	render();
};

init();