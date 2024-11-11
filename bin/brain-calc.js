#!/usr/bin/env node

import playGame from '/home/dmiquilena95/frontend-project-98/index.js';
import gameLogic from '/home/dmiquilena95/frontend-project-98/games/brain-calc-game.js';

const gameDescription = 'Responde correctamente a las expresiones matemáticas.';
playGame(gameLogic, gameDescription);
