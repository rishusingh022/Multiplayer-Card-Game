const {
  getNextPlayerIndex,
  getWinnerIndex,
} = require('../../src/utils/getIndex');

describe('getNextPlayerIndex', () => {
  it('should return the next player index', () => {
    expect(getNextPlayerIndex(0, 2)).toBe(1);
    expect(getNextPlayerIndex(1, 2)).toBe(0);
  });
});

describe('getWinnerIndex', () => {
  it('should return the index of the winner', () => {
    const players = [
      {
        hand: [],
      },
      {
        hand: [],
      },
    ];
    expect(getWinnerIndex(players)).toBe(0);
  });
  it('should return -1 if there is no winner', () => {
    const players = [
      {
        hand: ['card'],
      },
    ];
    expect(getWinnerIndex(players)).toBe(-1);
  });
});
