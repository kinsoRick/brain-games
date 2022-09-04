import playGame from '../index.js';
import getRandomNumber from '../utils.js';

/**
 * generates an array of progressions and turns it into a string,
 * then selects a random number to be removed from the progression,
 * the answer is the removed number
 * @date 2022-09-04
 * @returns {question: string, answer: number.toString()}
 */
const progressionGameQA = () => {
  const step = getRandomNumber(10) + 1;
  const missingPosition = getRandomNumber(10);
  const progression = [];

  // startNumber
  let number = getRandomNumber(20);

  for (let i = 0; i < 10; i += 1) {
    progression.push(number);
    number += step;
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
