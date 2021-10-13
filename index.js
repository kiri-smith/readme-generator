//There are sections in the README entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

//WHEN I enter the title of my project then this is displayed as the title of the README

//WHEN I enter a description then this information is added to the section of the README entitled Description

//WHEN I enter installation instructions then this information is added to the section of the README entitled Installation

//WHEN I enter usage information then this information is added to the section of the README entitled Usage

//WHEN I enter contribution guidelines then this information is added to the section of the README entitled Contributing

//WHEN I enter test instructions then this information is added to the section of the README entitled Tests

//WHEN I choose a license for my application from a list of options THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

//WHEN I enter my GitHub username THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

//WHEN I enter my email address THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

//WHEN I click on the links in the Table of Contents THEN I am taken to the corresponding section of the README


//contribution guidelines
//test instructions
//github username
//email address
//choose license from a list

const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        }

        {
            type: 'description',
            message: 'Provide a description of the project:',
            name: 'description',
        }

        {
            type: 'installation',
            message: 'What are the installation instructions for this project?',
            name: 'installation',
        }

        {
            type: 'usage',
            message: 'Describe the usage information:',
            name: 'usage',
        }

        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        }

        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        }

        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        }

        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        }

        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        }
    ])


