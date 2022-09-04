import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const operations = ['+', '-', '*'];

/**
 * Generates two nums and operation between them.
 * answer just solution of expression
 * @date 2022-09-04
 * @returns {question: string, answer: string}
 */
const calcGameQA = () => {
  const firstNumber = getRandomNumber(100);
  const secondNumber = getRandomNumber(100);

  const operation = operations[getRandomNumber(3)];
  const expression = `${firstNumber.toString()} ${operation} ${secondNumber.toString()}`;

  let solution = '';

  if (operation === '+') solution = (firstNumber + secondNumber).toString();
  if (operation === '-') solution = (firstNumber - secondNumber).toString();
  if (operation === '*') solution = (firstNumber * secondNumber).toString();

  return { question: expression, answer: solution };
};

const calculationGame = () => {
  playGame(
    3,
    'What is the result of the expression?',
    calcGameQA,
  );
};

export default calculationGame;
