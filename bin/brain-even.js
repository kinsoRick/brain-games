#!/usr/bin/env node
import RLS from 'readline-sync';
import greeting from '../src/cli.js';

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const evenGame = () => {
  // Get name from input in greeting function;
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const number = getRandomNumber(100);
    const isEvenNumber = number % 2 === 0 ? 'yes' : 'no';

    const answer = RLS.question(`Question: ${number}\nYour answer: `);

    if (answer === isEvenNumber) {
      correctAnswers += 1;
      console.log('Correct!');
    }

    if (answer !== isEvenNumber) {
      correctAnswers = 0;
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    }
  }

  console.log(`Congratulations, ${name}!`);
};

evenGame();
