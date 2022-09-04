#!/usr/bin/env node
import playGame from '../src/index.js';
import getRandomNumber from '../src/utils.js';

const evenGameQA = () => {
  const number = getRandomNumber(100);
  const isEvenNumber = (number % 2 === 0) ? 'yes' : 'no';

  return { question: number, answer: isEvenNumber };
};

playGame(
  3,
  'Answer "yes" if the number is even, otherwise answer "no"',
  evenGameQA,
);
