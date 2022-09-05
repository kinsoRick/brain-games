import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const getGcdSolution = (firstNumber, secondNumber) => {
  let x = firstNumber;
  let y = secondNumber;

  while (x !== y) {
    if (x > y) x -= y;
    else y -= x;
  }

  return x;
};

/**
 * generates two numbers and the answer will be gcd between them
 * @date 2022-09-04
 * @returns {question: string, answer: number.toString()}
 */
const createGcdProblem = () => {
  const firstNumber = getRandomNumber(100);
  const secondNumber = getRandomNumber(100);
  const question = `${firstNumber} ${secondNumber}`;

  const gcd = getGcdSolution(firstNumber, secondNumber);

  return { question, answer: gcd.toString() };
};

const runGcdGame = () => {
  playGame(
    'Find the greatest common divisor of given numbers',
    createGcdProblem,
  );
};

export default runGcdGame;
