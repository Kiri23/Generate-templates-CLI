import inquirer from 'inquirer';
import path from 'path';

async function promptDestinationDirectory() {
  const { destination } = await inquirer.prompt({
    type: 'input',
    name: 'destination',
    message: 'Enter the destination directory:',
    default: './'
  });
  return path.resolve(destination);
}

export {promptDestinationDirectory};