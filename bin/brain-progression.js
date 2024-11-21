#!/usr/bin/env node

import playGame from '../index.js';
import gameLogic from '../games/brain-progression-game.js';

const gameDescription = '¿Qué número falta en la progresión?';

playGame(gameLogic, gameDescription);
