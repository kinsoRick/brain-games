import RLS from 'readline-sync';

const playGame = (gameRule, getQA, countOfRounds = 3) => {
  console.log('Welcome to the Brain Games!');

  const name = RLS.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameRule);

  for (let currentRound = 0; currentRound < countOfRounds; currentRound += 1) {
    const { question, answer } = getQA();

    console.log(`Question: ${question}`);
    const userAnswer = RLS.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}!`);
};

export default playGame;
