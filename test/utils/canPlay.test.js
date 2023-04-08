const canPlay = require('../../src/utils/canPlay');

describe('canPlay', () => {
  it('should return true if the card is the same suit or rank as the top card', () => {
    const card = {
      suit: 'hearts',
      rank: '5',
    };
    const topCard = {
      suit: 'hearts',
      rank: '10',
    };
    expect(canPlay(card, topCard)).toBe(true);
  });
  it('should return false if the card is not the same suit or rank as the top card', () => {
    const card = {
      suit: 'hearts',
      rank: '5',
    };
    const topCard = {
      suit: 'spades',
      rank: '10',
    };
    expect(canPlay(card, topCard)).toBe(false);
  });
});