import { showWelcomeMessage, showGreetingMessage, getUsername } from './index.js';

const runWelcomeGame = () => {
  showWelcomeMessage();
  const username = getUsername();
  showGreetingMessage(username);
};

export default runWelcomeGame;
