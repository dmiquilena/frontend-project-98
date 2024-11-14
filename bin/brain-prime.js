#!/usr/bin/env node

import playGame from '/home/dmiquilena95/frontend-project-98/index.js';
import gameLogic from '/home/dmiquilena95/frontend-project-98/games/brain-prime-game.js';

const gameDescription = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".';
playGame(gameLogic, gameDescription);
