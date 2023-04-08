const dealCards = require('../../src/utils/dealCards');

describe('dealCards', () => {
  it('should return an array of arrays', () => {
    const deck = [];
    const playerCount = 2;
    expect(Array.isArray(dealCards(deck, playerCount))).toBe(true);
    expect(Array.isArray(dealCards(deck, playerCount)[0])).toBe(true);
  });
  it('should return an array of the correct length', () => {
    const deck = [];
    const playerCount = 2;
    expect(dealCards(deck, playerCount).length).toBe(playerCount);
  });
  it('should return an array of arrays of the correct length', () => {
    const deck = [];
    const playerCount = 2;
    expect(dealCards(deck, playerCount)[0].length).toBe(5);
  });
});
