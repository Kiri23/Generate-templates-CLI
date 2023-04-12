import { Command } from 'commander';
import {selectCommand}  from './commands/select.js';

function start() {
  const program = new Command();
  program.version('1.0.0');

  program
    .command('select')
    .description('Select a project template')
    .action(selectCommand);

  program.parse(process.argv);
}

export { start };