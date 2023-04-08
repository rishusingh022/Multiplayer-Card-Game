const canPlay = (card, topCard) => {
  return card.suit === topCard.suit || card.rank === topCard.rank;
};

module.exports = canPlay;