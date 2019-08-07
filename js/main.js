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
var cardsInPlay = [];

//function to check for m{atch
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
	} else {
  alert("Sorry, try again.");
	};
};

//function for when user flips cards
function flipCard(cardId) {

	//displaying which card has been flipped
	console.log("user flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	//pushing selected card in empty array
	cardsInPlay.push(cards[cardId].rank);

	//comparing two cards selected by user
	if (cardsInPlay.length === 2) {
		checkForMatch() === true;
	} else {
		//potential action here
	};
	
};


flipCard(0);
flipCard(2);



