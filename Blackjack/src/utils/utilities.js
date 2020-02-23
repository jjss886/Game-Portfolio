const suits = ["Spades", "Hearts", "Diamonds", "Clubs"],
  values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let deck = [];

export const createDeck = () => {
  deck = new Array();
  for (const val of values) {
    for (const suit of suits) {
      let weight = parseInt(val);
      if (val === "J" || val === "Q" || val === "K") weight = 10;
      if (val === "A") weight = 11;
      deck.push({ Value: val, Suit: suit, Weight: weight });
    }
  }
};

export const shuffleDeck = () => {
  for (let i = 0; i < 1000; i++) {
    const one = Math.floor(Math.random() * deck.length),
      two = Math.floor(Math.random() * deck.length),
      temp = deck[one];

    deck[one] = deck[two];
    deck[two] = temp;
  }
};
