import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const generateProgression = (start, step, progressionLength) => {
  const progression = [];
  let number = start;

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(number);
    number += step;
  }

  return progression;
};

/**
 * generates an array of progressions and turns it into a string,
 * then selects a random number to be removed from the progression,
 * the answer is the removed number
 * @date 2022-09-04
 * @returns {question: string, answer: number.toString()}
 */
const progressionGameQA = () => {
  const missingPosition = getRandomNumber(10);

  const startNumber = getRandomNumber(20);
  const step = getRandomNumber(10) + 1;

  const progression = generateProgression(startNumber, step, 10);

  const solution = progression[missingPosition];
  progression[missingPosition] = '..';

  const expression = progression.join(' ');

  return { question: expression, answer: solution.toString() };
};

const runProgressionGame = () => {
  playGame(
    'What number is missing in the progression?',
    progressionGameQA,
  );
};

export default runProgressionGame;
