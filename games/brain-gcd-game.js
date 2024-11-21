#!/usr/bin/env node

const findMCD = (a, b) => {
  let x = a;
  let y = b;

  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  };
  return x;
};

const gameLogic = () => {

  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = findMCD(num1, num2);

  const question = `${num1} ${num2}`;
  return { question, correctAnswer };
};

export default gameLogic;
