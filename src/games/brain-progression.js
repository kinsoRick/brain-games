import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const generateProgression = (start, step, progressionLength) => {
  const progression = [];
  const lastProgressionNumber = start + step * (progressionLength - 1);

  for (let number = start; number <= lastProgressionNumber; number += step) {
    progression.push(number);
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
const createProgressionWithHole = () => {
  const progressionLength = 10;
  const missingPosition = getRandomNumber(progressionLength);
  const step = getRandomNumber(progressionLength) + 1;

  const startNumber = getRandomNumber(20);

  const progression = generateProgression(startNumber, step, progressionLength);

  const answer = progression[missingPosition];
  progression[missingPosition] = '..';

  const expression = progression.join(' ');

  return { question: expression, answer: answer.toString() };
};

const runProgressionGame = () => {
  playGame(
    'What number is missing in the progression?',
    createProgressionWithHole,
  );
};

export default runProgressionGame;
