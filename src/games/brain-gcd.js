import playGame from '../index.js';
import getRandomNumber from '../utils.js';

/**
 * generates two numbers and the answer will be gcd between them
 * @date 2022-09-04
 * @returns {question: string, answer: number.toString()}
 */
const gcdGameQA = () => {
  let firstNumber = getRandomNumber(100);
  let secondNumber = getRandomNumber(100);
  const expression = `${firstNumber} ${secondNumber}`;

  let gcd = 0;

  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) firstNumber -= secondNumber;
    else secondNumber -= firstNumber;
  }

  gcd = firstNumber.toString();

  return { question: expression, answer: gcd };
};

const runGcdGame = () => {
  playGame(
    'Find the greatest common divisor of given numbers',
    gcdGameQA,
  );
};

export default runGcdGame;
