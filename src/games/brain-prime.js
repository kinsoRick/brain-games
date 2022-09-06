import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrimeNumber = (number) => {
  if (number <= 1) return false;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

/**
 * generates numbers from 0 to 99, determines whether the number will be prime
 * @date 2022-09-04
 * @returns {question: number, answer: ('yes' or 'no')}
 */
const createPrimeQuestion = () => {
  const number = getRandomNumber(100);
  const answer = (isPrimeNumber(number) === true) ? 'yes' : 'no';

  return { question: number, answer };
};

const runPrimeGame = () => {
  playGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    createPrimeQuestion,
  );
};

export default runPrimeGame;
