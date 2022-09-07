import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const operations = ['+', '-', '*'];

const calculate = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error('unexpected operation value given');
  }
};

/**
 * Generates two nums and operation between them.
 * answer just solution of expression
 * @date 2022-09-04
 * @returns {question: string, answer: string}
 */
const createMathTask = () => {
  const firstNumber = getRandomNumber(100);
  const secondNumber = getRandomNumber(100);

  // Gets random operation from operations array
  const operation = operations[getRandomNumber(operations.length)];
  const question = `${firstNumber} ${operation} ${secondNumber}`;

  const answer = calculate(operation, firstNumber, secondNumber);

  return { question, answer: answer.toString() };
};

const runCalculationGame = () => {
  playGame(
    'What is the result of the expression?',
    createMathTask,
  );
};

export default runCalculationGame;
