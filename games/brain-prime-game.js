#!/usr/bin/env node

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameLogic = () => {
  const num = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return {
    question: num.toString(),
    correctAnswer,
  };
};

export default gameLogic;
