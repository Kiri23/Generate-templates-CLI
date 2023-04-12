import inquirer from 'inquirer';
import chalk from 'chalk';
import path from 'path';
import {promptDestinationDirectory} from '../helpers/prompts.js';
import {getTemplates}  from '../helpers/templates.js';
import {copyTemplate} from '../helpers/copy.js';
import { logSuccess, logError } from '../helpers/logs.js';
import {showSpinner}  from '../helpers/spinner.js';

async function selectCommand() {
  try {
    const templates = await getTemplates();
    const templateNames = templates.map(template => template.name);

    // This was not moved to a separate module because its closely tied to the select command.
    // Also it's a simple prompt so it makes sense to keep it there for clarity and ease of maintenance.
    const { templateName } = await inquirer.prompt({
      type: 'list',
      name: 'templateName',
      message: 'Select a template:',
      choices: templateNames
    });

    // We're using the promptDestinationDirectory helper function from the prompts module to handle the destination prompt logic separately.
    //  Also it make handling the testing in isolation.
    const { destinationDirectory } = await promptDestinationDirectory();

    const selectedTemplate = templates.find(template => template.name === templateName);
    const templateSource = path.join(__dirname, '..', '..', 'templates', selectedTemplate.folder);
    const templateDestination = path.join(destinationDirectory, selectedTemplate.folder);

    const spinner = showSpinner(`Copying ${selectedTemplate.folder} to ${destinationDirectory}...`);
    await copyTemplate(templateSource, templateDestination);
    spinner.stop();

    logSuccess(`Successfully created ${chalk.bold(selectedTemplate.folder)} in ${chalk.bold(destinationDirectory)}.`);
  } catch (error) {
    logError(error.message);
  }
}

export {selectCommand};
