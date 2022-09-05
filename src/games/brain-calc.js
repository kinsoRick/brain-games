import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const operations = ['+', '-', '*'];

const getSolution = (operation, firstNumber, secondNumber) => {
  let solution = (firstNumber * secondNumber);
  if (operation === '+') solution = (firstNumber + secondNumber);
  if (operation === '-') solution = (firstNumber - secondNumber);

  return solution;
};

/**
 * Generates two nums and operation between them.
 * answer just solution of expression
 * @date 2022-09-04
 * @returns {question: string, answer: string}
 */
const createMathProblem = () => {
  const firstNumber = getRandomNumber(100);
  const secondNumber = getRandomNumber(100);
  const operationCount = operations.length;

  // Gets random operation from operations array
  const operation = operations[getRandomNumber(operationCount)];
  const expression = `${firstNumber.toString()} ${operation} ${secondNumber.toString()}`;

  const solution = getSolution(operation, firstNumber, secondNumber);

  return { question: expression, answer: solution.toString() };
};

const runCalculationGame = () => {
  playGame(
    'What is the result of the expression?',
    createMathProblem,
  );
};

export default runCalculationGame;
