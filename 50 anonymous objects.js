// anonymous objects = objects without a name
//                      not directly referenced
//                      less syntax. no need for unique names

class Card {
    constructor (value, suit) {
        this.value = value;
        this.suit = suit;
    }
}

let card1 = new Card ("A", "Hearts");
let card2 = new Card ("A", "Spades");
let card3 = new Card ("A", "Diamonds");
let card4 = new Card ("A", "Clubs");
let card5 = new Card ("2", "Hearts");
let card6 = new Card ("2", "Spades");
let card7 = new Card ("2", "Diamonds");
let card8 = new Card ("2", "Clubs");

let cards = [card1, card2, card3, card4, card5, card6, card7, card8]

console.log(card1.value + card1.suit); // displays A of Hearts
console.log(cards[0].value + cards[0].suit); // also displays A of Hearts


// re write using anonymous objects

let cards2 = [ new Card ("A", "Hearts"),
               new Card ("A", "Spades"),
               new Card ("A", "Diamonds"),
               new Card ("A", "Clubs"),
               new Card ("2", "Hearts"),
               new Card ("2", "Spades"),
               new Card ("2", "Diamonds"),
               new Card ("2", "Clubs")];

console.log(cards2[7].value + cards2[7].suit);

cards2.forEach (card => console.log(`${card.value} ${card.suit}`))
