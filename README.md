## Template generator

CLI Project Template Generator

## Overview

The CLI Project Template Generator is a command-line tool designed to allow users to generate project templates. The tool can inspect a folder containing templates for different types of projects, allow the user to choose a template, and then duplicate the selected template folder into a new directory. The tool also makes it easy to add new templates in the future via extensibility and supports where the templates are stored in the future, such as in a remote repository.

## Features

- A command-line interface that presents the user with a list of available templates.
- The ability to select a template from the list.
- The tool duplicates the selected template folder into a new directory with a unique name.
-The tool allows the user to specify the destination directory where the new project should be created.
- The tool has error handling to catch any issues that may arise during the template duplication process.
- The tool is extensible to support additional templates in the future.
- The tool is extensible to support where the templates are stored in the future. For example, the templates could be stored in a remote repository.
- The tool has a help command that displays the available commands and options.

## Installation

- Clone the repository to your local machine
- Navigate to the root directory of the project
- Run npm install to install the required dependencies
- Run npm link to create a symlink to the command-line tool

## Usage

- Run project-template-generator to start the tool
- Use the arrow keys to navigate through the list of available templates
- Press enter to select a template
- Enter a name for the new project
- Enter a destination directory for the new project
- The tool will duplicate the selected template folder into a new directory with the specified name and destination
- Use project-template-generator --help to display the available commands and options

## Documentation
Documentation on how the CLI application was made, including the decisions that were made, such as the requirements, the organizations, and the design pattern used, can be found in the [docs](/docs) directory.

## Contributing

Contributions are welcome and encouraged. To contribute to the project, please follow these steps:

1. Fork the project
2. Create a new branch for your feature (git checkout -b feature/my-feature)
3. Make changes and commit (git commit -am "Add my feature")
4. Push to the branch (git push origin feature/my-feature)
5. Create a new pull request and describe your changes in detail

## License

This project is licensed under the [MIT license](https://raw.githubusercontent.com/git/git-scm.com/main/MIT-LICENSE.txt).