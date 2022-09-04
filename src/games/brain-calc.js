import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const operations = ['+', '-', '*'];

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
