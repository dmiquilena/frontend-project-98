#!/usr/bin/env node

import playGame from '../index.js';
import gameLogic from '../games/brain-calc-game.js';

const gameDescription = 'Responde correctamente a las expresiones matemáticas.';
playGame(gameLogic, gameDescription);
