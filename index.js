//There are sections in the README entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions (add prompt info to these sections)

//WHEN I choose a license for my application from a list of options THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

//WHEN I click on the links in the Table of Contents THEN I am taken to the corresponding section of the README

//Questions for Arm: 
//1. Am I writing this to THIS README.md?  Or do I need an option that allows them to choose the file destination for where to write it?
//2. What do lines ... mean? Do I need them?
//3. Where do I get license information to add options to the list?
//4. How do I link specific components to sections on the file?
//5. Links in the Table of Contents? -- verify structure
//6. Did I do the .gitignore correctly?

const inquirer = require('inquirer');

inquirer
    .prompt([
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
    ])
    //.then(answers => {
    //console.info('Answer:', answers.license);
    .then((data) => {
        console.log(data);
        const filename = '${data.name.toLowerCase().split('').join('')}.json';
    }

    FileSystem.writeFile(README.md, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!'))
    );


