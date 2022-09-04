import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const primeGameQA = () => {
  const number = getRandomNumber(100);
  let solution = 'yes';

  if (number <= 1) solution = 'no';

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      solution = 'no';
      break;
    }
  }

  return { question: number, answer: solution };
};

const primeGame = () => {
  playGame(
    3,
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    primeGameQA,
  );
};

export default primeGame;
