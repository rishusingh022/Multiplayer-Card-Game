const dealCards = (deck, playerCount) => {
  const hands = [];
  for (let i = 0; i < playerCount; i++) {
    hands.push([]);
  }
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < playerCount; j++) {
      hands[j].push(deck.pop());
    }
  }
  return hands;
};

module.exports = dealCards;