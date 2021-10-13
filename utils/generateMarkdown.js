// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
// text literal using backticks ... it allows us to combine html or text with js or jquery 
function generateMarkdown(data) {
    return `


# ${data.title}

## Table of Contents
* [${data.title}](#${data.title})
* [${data.title}](#${data.title})
* [${data.title}](#${data.title})
* [${data.title}](#${data.title})
* [${data.title}](#${data.title})
* [${data.title}](#${data.title})
* [${data.title}](#${data.title})
* [${data.title}](#${data.title})

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

Please reach out to me by email with any questions you may have:
${data.email}

You may also follow me on Github, to view other repositories:
${data.username}

`;
}

module.exports = generateMarkdown;