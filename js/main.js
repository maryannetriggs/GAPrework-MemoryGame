// array to store the four cards
var cards = ["queen", "queen", "king", "king"];

//empty array for cards in play
var cardsInPlay = [];

//function to check for m{atch
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
	} else {
  console.log("Sorry, try again.");
	};
};

//function for when user flips cards
function flipCard(cardId) {

	//displaying which card has been flipped
	console.log("user flipped " + cards[cardId]);

	//pushing selected card in empty array
	cardsInPlay.push(cards[cardId]);

	//comparing two cards selected by user
	if (cardsInPlay.length === 2) {
		checkForMatch() === true;
	} else {
		//potential action here
	};
	
};


flipCard(0);
flipCard(2);


