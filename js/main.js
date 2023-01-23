/*----- constants -----*/
let words;
words = ['Blob', 'Bing', 'Plop', 'Dang', 'Drat', 'Knob', 'Grub'];

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const MAX_GUESSES = 8;

let guessCount;
// Identify what words to use for the game by creating array of possible words.

// Store pictures of suit items indexed at 0 to 7 with optonal suit iteam indexed 5, 6 and 7



	/*----- state variables -----*/
// for the word to be chosen create math.random selection from the words arrary. Then use splice to find individual characters in the word. store these in variable called correctLetters made at the start of each game when the word is selected. use this to compare against the user guess, if they match search for the word and add it to arrary. To start no words will have repeat letters. If they don't match add letter to incorrect guesses section and update guessCount in state and on user page. Later will add pic when this happens
secretWord = words[Math.floor(Math.random()*words.length)];
console.log(secretWord);

// if (userGuess === letter in correctLetters) add innertext to html word location and check for winner


// Make a winner variable that checks to see if the player has won or lost yet

	/*----- cached elements  -----*/
// let userGuess =; set to html button input that's received
let userGuess = document.querySelector('button');
userGuess.addEventListener('click', handleLetter)

function handleLetter(evt) {
	if (evt.target.tagName === 'BUTTON') console.log(evt.target.Id)
}

	/*----- event listeners -----*/
// listen to user inputing letter in open button option that accepts user entering

	/*----- functions -----*/
// hide letters that have already been selected or return message if allowing user to enter letter that lets them know they already
// made a choice

function render() {

}