const playCard = require('../../src/utils/playCards');

describe('playCard', () => {
  it('should remove a card from the hand', () => {
    const hand = [{}, {}, {}];
    const cardIndex = 1;
    const discardPile = [];
    playCard(hand, cardIndex, discardPile);
    expect(hand.length).toBe(2);
  });
  it('should add a card to the discard pile', () => {
    const hand = [{}, {}, {}];
    const cardIndex = 1;
    const discardPile = [];
    playCard(hand, cardIndex, discardPile);
    expect(discardPile.length).toBe(1);
  });
});
