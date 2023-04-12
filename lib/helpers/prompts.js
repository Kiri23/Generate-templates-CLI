import inquirer from 'inquirer';
import path from 'path';

async function promptDestinationDirectory() {
  const { destination } = await inquirer.prompt({
    type: 'input',
    name: 'destination',
    message: 'Enter the destination directory:',
    default: './' + new Date().toISOString().slice(0, 19), // create unique folder name
  });
  return path.resolve(destination);
}

export {promptDestinationDirectory};