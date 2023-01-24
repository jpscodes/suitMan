/*----- constants -----*/
const WORDS = ['BLOB', 'BING', 'PLOP', 'DANG', 'DRAT', 'KNOB', 'GRUB'];

const MAX_GUESSES = 6;



// Identify what words to use for the game by creating array of possible words.

// Store pictures of suit items indexed at 0 to 7 with optonal suit iteam indexed 5, 6 and 7



/*----- state variables -----*/
let secretWord;
let guessedWord;
let wrongLetters;
let winner;
// for the word to be chosen create math.random selection from the words arrary. Then use splice to find individual characters in the word. store these in variable called correctLetters made at the start of each game when the word is selected. use this to compare against the user guess, if they match search for the word and add it to arrary. To start no words will have repeat letters. If they don't match add letter to incorrect guesses section and update guessCount in state and on user page. Later will add pic when this happens

// if (userGuess === letter in correctLetters) add innertext to html word location and check for winner


// Make a winner variable that checks to see if the player has won or lost yet

/*----- cached elements  -----*/
const guessedEl = document.getElementById('guessed-word');



// let userGuess =; set to html button input that's received

// let aButton = document.querySelector("body > main > div.row1btn > button:nth-child(1)").addEventListener('click', printA);

// function printA (evt) {
// 	console.log(evt.target.innerText);
// 	playersGuess = evt.target.innerText;
// 	return evt.target.innerText;
// 	render();
// }
let userGuess = document.querySelector('main').addEventListener('click', handleLetter);

function handleLetter(evt) {
	// if (evt.target.tagName !== 'BUTTON') return; 
	// console.log(evt.target.innerText);
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
	render();
};


	/*----- event listeners -----*/
// listen to user inputing letter in open button option that accepts user entering

	/*----- functions -----*/
// hide letters that have already been selected or return message if allowing user to enter letter that lets them know they already
// made a choice
function getWinner() {

};
function render() {
	guessedEl.innerText = guessedWord;
};

function init() {
	secretWord = WORDS[Math.floor(Math.random()*WORDS.length)];
	wrongLetters = [];
	guessedWord = '_'.repeat(secretWord.length);
	winner = null;
	render();
};

init();