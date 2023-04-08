const getNextPlayerIndex = (currentPlayerIndex, playerCount) => {
  return (currentPlayerIndex + 1) % playerCount;
};

const getWinnerIndex = (players) => {
  for (let i = 0; i < players.length; i++) {
    if (players[i].hand.length === 0) {
      return i;
    }
  }
  return -1;
};

module.exports = {
  getNextPlayerIndex,
  getWinnerIndex,
};
