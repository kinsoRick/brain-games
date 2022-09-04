import playGame from '../index.js';
import getRandomNumber from '../utils.js';

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
