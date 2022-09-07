import RLS from 'readline-sync';

const runWelcomeGame = () => {
  console.log('Welcome to the Brain Games!');

  const name = RLS.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default runWelcomeGame;
