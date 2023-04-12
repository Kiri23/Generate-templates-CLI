import fs from 'fs';
import path from 'path';

function getTemplates(templateName) {
  const templateDir = path.join(__dirname, '..', 'templates', templateName);
  const templateJsonFile = path.join(templateDir, 'template.json');

  if (!fs.existsSync(templateJsonFile)) {
    throw new Error(`Template ${templateName} does not exist.`);
  }

  const templateJson = fs.readFileSync(templateJsonFile, 'utf8');
  const templateData = JSON.parse(templateJson);

  return templateData;
}

export { getTemplates };
