#!/usr/bin/env node

import playGame from '../index.js';
import gameLogic from '../games/brain-calc-game.js';

const gameDescription = '¿Cuál es el resultado de la expresión?';
playGame(gameLogic, gameDescription);
