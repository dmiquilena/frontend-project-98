import readlineSync from 'readline-sync';

const playGame = (gameLogic, gameDescription) => {
  console.log('¡Bienvenido a Brain Games!');
  const userName = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${userName}!`);
  console.log(gameDescription);

  let round = 0;
  const maxRounds = 3;

  while (round < maxRounds) {
    const { question, correctAnswer} = gameLogic();
    console.log(`Pregunta: ${question}`);
    const userAnswer = readlineSync.question('Tu respuesta: ');

    if (userAnswer !== String(correctAnswer)) {
    console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
    console.log(`¡Intentémoslo de nuevo, ${userName}!`);
    return;
    };

    console.log('¡Correcto!');
    round += 1;
    };

  console.log(`¡Felicidades, ${userName}!`);
};

export default playGame;
