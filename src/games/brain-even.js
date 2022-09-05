import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEvenNumber = (number) => {
  if (number % 2 === 0) return true;
  return false;
};

/**
 * generates number, and answer is number even? ('yes' or 'no')
 * @date 2022-09-04
 * @returns {question: number, answer: ('yes' or 'no')}
 */
const createEvenQuestion = () => {
  const number = getRandomNumber(100);
  const answer = (isEvenNumber(number) === true) ? 'yes' : 'no';

  return { question: number, answer };
};

const runEvenGame = () => {
  playGame(
    'Answer "yes" if the number is even, otherwise answer "no"',
    createEvenQuestion,
  );
};

export default runEvenGame;
