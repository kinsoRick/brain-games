import RLS from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');

  const name = RLS.question('May I have your name? ');

  return console.log(`Hello, ${name}!`);
};

export default greeting;
