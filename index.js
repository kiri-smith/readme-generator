//WHEN I choose a license for my application from a list of options THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under



// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: (value) => { if (value) { return true } else { return 'Must input a title to continue.' } }
    },

    {
        type: 'input',
        message: 'Provide a description of the project:',
        name: 'description',
        validate: (value) => { if (value) { return true } else { return 'Must input a description to continue.' } }
    },

    {
        type: 'input',
        message: 'What are the installation instructions for this project?',
        name: 'installation',
        validate: (value) => { if (value) { return true } else { return 'Must input installation instructions to continue.' } }
    },

    {
        type: 'input',
        message: 'Describe the usage information:',
        name: 'usage',
        validate: (value) => { if (value) { return true } else { return 'Must input usage information to continue.' } }
    },

    {
        type: 'input',
        message: 'What are the contribution guidelines for this project?',
        name: 'contributing',
        validate: (value) => { if (value) { return true } else { return 'Must input contribution guidelines to continue.' } }
    },

    {
        type: 'input',
        message: 'Describe the test instructions:',
        name: 'test',
        validate: (value) => { if (value) { return true } else { return 'Must input test instructions to continue.' } }
    },

    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
        validate: (value) => { if (value) { return true } else { return 'Must input a Github username to continue.' } }
    },

    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: (value) => { if (value) { return true } else { return 'Must input an email address to continue.' } }
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application.',
        choices: ['MIT License', 'GNU General Public License', 'Eclipse Public License', 'none'],
        validate: (value) => { if (value) { return true } else { return 'Must choose a value to continue.' } }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    // fs.writeFileSync(location, infoInFile)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile('NewREADME.md', generateMarkdown({ ...responses }))
    })
}

// Function call to initialize app
init();




