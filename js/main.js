// array to store our four cards
var cards = ["queen", "queen", "king", "king"];

//empty array for cards in play
var cardsInPlay = [];

// creating variables for both cards in play
var cardOne = cards[0];
var cardTwo = cards[2];

// adding card one to cards in play array
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

//test
console.log("user flipped " + cardOne);
console.log("user flipped " + cardTwo);

//checking two cards have been selected by user
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you've found a match!");
	} else {
		alert("Sorry, try again");
	};
} else {
	//action
};

//logic to check if cards match
