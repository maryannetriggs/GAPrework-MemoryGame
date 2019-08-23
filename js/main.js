// array to store the four cards
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},

{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},

{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},

{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//empty array for cards in play
let cardsInPlay = [];

//function to check for m{atch
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
	} else {
  alert("Sorry, try again.");
	}
};

//function for when user flips cards
function flipCard() {
	let cardId = this.getAttribute('data-id');
	console.log("user flipped " + cards[cardId].rank);

	//pushing selected card in empty array
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	//displaying the card front image
	this.setAttribute('src', cards[cardId].cardImage);

	//comparing two cards selected by user
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};


//function to create a new game board
function createBoard() {
 for (let i = 0; i < cards.length; i++) {
 	let cardElement = document.createElement('img');
 	cardElement.setAttribute('src', 'images/back.png');
 	cardElement.setAttribute('data-id', i);
 	cardElement.addEventListener('click', flipCard);
 	document.getElementById('game-board').appendChild(cardElement);
 }
};

createBoard();



