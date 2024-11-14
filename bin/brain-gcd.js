#!/usr/bin/env node

import playGame from '/home/dmiquilena95/frontend-project-98/index.js';
import gameLogic from '/home/dmiquilena95/frontend-project-98/games/brain-gcd-game.js';

const gameDescription = 'Encuentra el máximo común divisor de los números dados.';
playGame(gameLogic, gameDescription);
