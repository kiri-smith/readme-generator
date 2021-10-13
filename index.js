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
    },

    {
        type: 'description',
        message: 'Provide a description of the project:',
        name: 'description',
    },

    {
        type: 'installation',
        message: 'What are the installation instructions for this project?',
        name: 'installation',
    },

    {
        type: 'usage',
        message: 'Describe the usage information:',
        name: 'usage',
    },

    {
        type: 'contribution',
        message: 'What are the contribution guidelines for this project?',
        name: 'contribution',
    },

    {
        type: 'test',
        message: 'Describe the test instructions:',
        name: 'test',
    },

    {
        type: 'username',
        message: 'What is your Github username?',
        name: 'username',
    },

    {
        type: 'email',
        message: 'What is your email address?',
        name: 'email',
    },

    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application.',
        choices: ['', '', ''],
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



    //.then(answers => {
    //console.info('Answer:', answers.license);
/* .then((data) => {
     console.log(data);
     const filename = '${data.name.toLowerCase().split('').join('')}.json';
 }

 FileSystem.writeFile(README.md, JSON.stringify(data, null, '\t'), (err) =>
     err ? console.log(err) : console.log('Success!'))
 );*/


