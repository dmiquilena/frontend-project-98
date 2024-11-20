#!/usr/bin/env node

import playGame from '../index.js';
import gameLogic from '../games/brain-prime-game.js';

const gameDescription = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".';
playGame(gameLogic, gameDescription);
