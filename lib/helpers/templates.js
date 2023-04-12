import fs from 'fs';
import path from 'path';

function getTemplates(templateName) {
  if (!templateName) {
    // for the time being, just for testing purpose 
    // add proper error handling later
    return [
      {
        name: 'React',
        folder: 'react'
      },
      {
        name: 'Fast API',
        folder: 'fast-api-template'
      },
      {
        name: 'Slack Bot',
        folder: 'slack-bot-template'
      },
    ]
  }
  const templateDir = path.join(process.cwd(), '..', 'templates', templateName);
  const templateJsonFile = path.join(templateDir, 'template.json');

  if (!fs.existsSync(templateJsonFile)) {
    throw new Error(`Template ${templateName} does not exist.`);
  }

  const templateJson = fs.readFileSync(templateJsonFile, 'utf8');
  const templateData = JSON.parse(templateJson);

  return templateData;
}

export { getTemplates };
