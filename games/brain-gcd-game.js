#!/usr/bin/env node

const findMCD = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}


const gameLogic = () => {

	const num1 = Math.floor(Math.random() * 100) + 1;
	const num2 = Math.floor(Math.random() * 100) + 1;
	const correctAnswer = findMCD(num1, num2);

	const question = `${num1} ${num2}`;
	return { question, correctAnswer };
};

export default gameLogic;
