import playGame from '../index.js';
import getRandomNumber from '../utils.js';

/**
 * generates number, and answer is number even? ('yes' or 'no')
 * @date 2022-09-04
 * @returns {question: number, answer: ('yes' or 'no')}
 */
const evenGameQA = () => {
  const number = getRandomNumber(100);
  const isEvenNumber = (number % 2 === 0) ? 'yes' : 'no';

  return { question: number, answer: isEvenNumber };
};

const evenGame = () => {
  playGame(
    3,
    'Answer "yes" if the number is even, otherwise answer "no"',
    evenGameQA,
  );
};

export default evenGame;
