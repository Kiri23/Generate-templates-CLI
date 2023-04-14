import { Command } from 'commander';
import {selectCommand}  from './commands/select.js';

const start = () => {
  const program = new Command();
  program.version('1.0.0');

  program
    .command('select')
    .description('Select a project template')
    .action(selectCommand);

    program
    .action(() => {
      // Default action to execute when no subcommand is provided
      console.log('No subcommand provided. Running "select" command...');
      selectCommand();
    });


  program.parse(process.argv);

}

export { start };