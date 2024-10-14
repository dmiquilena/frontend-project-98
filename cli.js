import readline from 'readline-sync';

const greetUser = () => {
  const userName = readline.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${userName}!`);
};

export default greetUser;
