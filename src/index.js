import RLS from 'readline-sync';

export const getUsername = () => {
  const name = RLS.question('May I have your name? ');
  return name;
};

export const showWelcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
};

export const showGreetingMessage = (name) => {
  console.log(`Hello, ${name}!`);
};

const playGame = (countOfRounds, gameRules, getQA) => {
  showWelcomeMessage();

  const name = getUsername();
  showGreetingMessage(name);

  console.log(gameRules);

  let correctAnswers = 0;

  while (correctAnswers < countOfRounds) {
    const { question, answer } = getQA();

    console.log(`Question: ${question}`);
    const userAnswer = RLS.question('Your answer: ');

    if (userAnswer === answer) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswers === countOfRounds) console.log(`Congratulations, ${name}!`);
};

export default playGame;
