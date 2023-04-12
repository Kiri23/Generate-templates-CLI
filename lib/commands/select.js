import inquirer from 'inquirer';
import chalk from 'chalk';
import {promptDestinationDirectory} from '../helpers/prompts.js';
import {getTemplates}  from '../helpers/templates.js';
import {copyTemplate} from '../helpers/copy.js';
import { logSuccess, logError } from '../helpers/logs.js';
import {showSpinner}  from '../helpers/spinner.js';

/**
 * Selects a template and copies it to a destination directory.
 *  @returns {Promise<void>} A Promise that resolves when the copy operation is complete.
 *  @throws {Error} An error if the template does not exist.
 *  @throws {Error} An error if the copy operation fails.
 *  @throws {Error} An error if the destination directory does not exist.
 *  @throws {Error} An error if the destination directory is not empty.
 */
async function selectCommand() {
  try {
    const templates = await getTemplates();
    if (!templates) {
      logError('No templates found.');
      return;
    }

    // This was not moved to a separate module because its closely tied to the select command.
    // Also it's a simple prompt so it makes sense to keep it there for clarity and ease of maintenance.
    const { templateName } = await inquirer.prompt({
      type: 'list',
      name: 'templateName',
      message: 'Select a template:',
      choices: templates.map(template => template.name)
    });

    // We're using the promptDestinationDirectory helper function from the prompts module to handle the destination prompt logic separately.
    //  Also it make handling the testing in isolation.
    const destinationDirectory = await promptDestinationDirectory();
    const selectedTemplate = templates.find(template => template.name === templateName);

    const spinner = showSpinner(`Copying ${selectedTemplate.folder} to ${destinationDirectory}...`);
    await copyTemplate(selectedTemplate.folder, destinationDirectory);
    spinner.stop();

    logSuccess(`Successfully created ${chalk.bold(selectedTemplate.folder)} in ${chalk.bold(destinationDirectory)}.`);
  } catch (error) {
    logError(error.message);
    console.error(error);
  } finally {
    process.exit();
  }
}

export {selectCommand};