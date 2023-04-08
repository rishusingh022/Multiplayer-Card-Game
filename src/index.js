const prompt = require('prompt-sync')();
const DECK = require('./constant/deck');
let PLAYER_COUNT = 4;
const suffleDeck = require('./utils/suffleDeck');
const dealCards = require('./utils/dealCards');
const canPlay = require('./utils/canPlay');
const { getNextPlayerIndex, getWinnerIndex } = require('./utils/getIndex');
const playCard = require('./utils/playCards');

const drawCard = (deck, drawPile, hand) => {
  if (deck.length === 0) {
    return;
  }
  if (drawPile.length === 0) {
    suffleDeck(deck);
    drawPile.push(...deck);
  }
  hand.push(drawPile.pop());
};

const playGame = () => {
  console.log('Welcome to UNO');
  PLAYER_COUNT = parseInt(prompt('Enter number of players: '));
  const deck = [...DECK];
  const players = [];
  for (let i = 0; i < PLAYER_COUNT; i++) {
    players.push({
      name: `Player ${i + 1}`,
      hand: [],
    });
  }
  suffleDeck(deck);
  const hands = dealCards(deck, PLAYER_COUNT);
  for (let i = 0; i < PLAYER_COUNT; i++) {
    players[i].hand = hands[i];
  }
  const discardPile = [deck.pop()];
  const drawPile = deck;
  console.log('Who will start the game?');
  for (let i = 0; i < PLAYER_COUNT; i++) {
    console.log(`${i + 1}. ${players[i].name}`);
  }
  let currentPlayerIndex = parseInt(prompt('Enter your choice: ')) - 1;
  let gameOver = false;
  while (!gameOver) {
    const currentPlayer = players[currentPlayerIndex];
    const topCard = discardPile[discardPile.length - 1];
    let canPlayCard = false;
    for (let i = 0; i < currentPlayer.hand.length; i++) {
      if (canPlay(currentPlayer.hand[i], topCard)) {
        canPlayCard = true;
        break;
      }
    }
    if (canPlayCard) {
      const cardIndex = Math.floor(Math.random() * currentPlayer.hand.length);
      const card = playCard(currentPlayer.hand, cardIndex, discardPile);
      console.log(`${currentPlayer.name} played ${card.rank} of ${card.suit}`);
    } else {
      drawCard(deck, drawPile, currentPlayer.hand);
      console.log(`${currentPlayer.name} drew a card`);
    }
    const winnerIndex = getWinnerIndex(players);
    if (winnerIndex !== -1) {
      console.log(`${players[winnerIndex].name} won!`);
      gameOver = true;
    } else {
      currentPlayerIndex = getNextPlayerIndex(currentPlayerIndex, PLAYER_COUNT);
    }
  }
};

try {
  playGame();
} catch (error) {
  console.log(error.message);
}
