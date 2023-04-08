const suffleDeck = require('../../src/utils/suffleDeck');

describe('suffleDeck', () => {
  it('should return a suffled deck', () => {
    const deck = [
      {},
      {},
      {
        value: '3',
        suit: 'clubs',
        color: 'black',
        image: '3_of_clubs.png',
      },
      {},
      {},
    ];
    const suffledDeck = suffleDeck(deck);
    expect(suffledDeck).not.toBe(deck);
  });
});
