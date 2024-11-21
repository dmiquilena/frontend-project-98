#!/usr/bin/env node

import readline from 'readline-sync';

const greetUser = () => {
  console.log('¡Bienvenido a Brain Games!');
  const userName = readline.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${userName}!`);
  return userName;
};

export default greetUser;
