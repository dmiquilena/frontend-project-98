#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../cli.js';


const isEven = (num) => num % 2 === 0;
console.log('¡Bienvenido a Brain Games!')
const playGame = () => {
   const userName = greetUser();
   console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

   let correctAnswers = 0;

   while(correctAnswers < 3) {
     const randomNum = Math.floor(Math.random() * 100);
     console.log(`Pregunta: ${randomNum}`);
     const userAnswer = readlineSync.question('Tu respuesta: ');
     const correctAnswer = isEven(randomNum) ? 'yes' : 'no';

     if (userAnswer.toLowerCase() === correctAnswer) {
       console.log('¡Correcto!');
       correctAnswers += 1;
     } else {
       console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
       console.log(`¡Intentémoslo de nuevo, ${userName}!`);
       return;
     }
   }

  console.log(`¡Felicidades, ${userName}!`);
};
playGame();
