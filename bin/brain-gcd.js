#!/usr/bin/env node

import playGame from '../index.js';
import gameLogic from '../games/brain-gcd-game.js';

const gameDescription = 'Encuentra el máximo común divisor de los números dados.';
playGame(gameLogic, gameDescription);
