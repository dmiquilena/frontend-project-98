#!/usr/bin/env node

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const gameLogic = () => {

  const length =  Math.floor(Math.random() * 6) + 5;
  const start = getRandomInt(1, 10);
  const step = getRandomInt(2, 6);


  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }

  const hiddenIndex = Math.floor(Math.random() * length);

  const missingNumber = progression[hiddenIndex];

  progression[hiddenIndex] = '..';

  return {
    question: progression.join(' '),
    correctAnswer: missingNumber
  };
}

export default gameLogic;
