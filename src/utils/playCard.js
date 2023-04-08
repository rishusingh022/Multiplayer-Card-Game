const playCard = (hand, cardIndex, discardPile) => {
  const card = hand.splice(cardIndex, 1)[0];
  discardPile.push(card);
  return card;
};

module.exports = playCard;
