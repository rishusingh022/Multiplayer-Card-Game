# Multiplayer Card Game README

This repository contains a Node.js application for a multiplayer card game that supports up to 4 players and different types of cards (e.g. number cards, action cards, etc.). The game follows the following rules:

- Each player starts with a hand of 5 cards.
- The game starts with a deck of 52 cards (a standard deck of playing cards).
- Players take turns playing cards from their hand, following a set of rules that define what cards can be played when.
- A player can only play a card if it matches either the suit or the rank of the top card on the discard pile.
- If a player cannot play a card, they must draw a card from the draw pile. If the draw pile is empty, the game ends in a draw and no player is declared a winner.
- The game ends when one player runs out of cards, who is declared the winner.

## Installation

To install the application, follow these steps:

1. Clone the repository to your local machine using `https://github.com/rishusingh022/Multiplayer-Card-Game.git`
2. Navigate to the project directory using `cd Multiplayer-Card-Game`
3. Install the dependencies using `npm i`
4. Run the application using `npm start`

<img width="532" alt="Screenshot 2023-04-08 at 2 26 10 PM" src="https://user-images.githubusercontent.com/60195863/230712975-fe286f54-4561-4fdf-8a79-40b1eef52409.png">
