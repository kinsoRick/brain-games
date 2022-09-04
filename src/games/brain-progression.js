import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const progressionGameQA = () => {
  const d = getRandomNumber(10) + 1;
  const missingPosition = getRandomNumber(10);
  const progression = [];

  let number = getRandomNumber(20);

  for (let i = 0; i < 10; i += 1) {
    progression.push(number);
    number += d;
  }

  const solution = progression[missingPosition];
  progression[missingPosition] = '..';

  const expression = progression.join(' ');

  return { question: expression, answer: solution.toString() };
};

const progressionGame = () => {
  playGame(
    3,
    'What number is missing in the progression?',
    progressionGameQA,
  );
};

export default progressionGame;
