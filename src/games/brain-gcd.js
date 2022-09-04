import playGame from '../index.js';
import getRandomNumber from '../utils.js';

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

const gcdGame = () => {
  playGame(
    3,
    'Find the greatest common divisor of given numbers',
    gcdGameQA,
  );
};

export default gcdGame;
