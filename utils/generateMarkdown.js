// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

var mitLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

var gnuLicense = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'

var eclipseLicense = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'



function renderLicenseBadge(license) {

    if (license === 'MIT License') {

        return mitLicense;

    } else if (license === 'GNU General Public License') {

        return gnuLicense;

    } else if (license === 'Eclipse Public License') {

        return eclipseLicense;

    } else {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    if (license === 'MIT License') {

        return 'https://opensource.org/licenses/MIT';

    } else if (license === 'GNU General Public License') {

        return 'https://www.gnu.org/licenses/gpl-3.0';

    } else if (license === 'Eclipse Public License') {

        return 'https://opensource.org/licenses/EPL-1.0';

    } else {
        return "";
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

    if (license === 'none') {
        return "";
    } else {
        return `## License
        ${data.license}
        `;
    }
}



// TODO: Create a function to generate markdown for README
// text literal using backticks ... it allows us to combine html or text with js or jquery 
function generateMarkdown(data) {
    return `


# ${data.title}

## Description

${data.description}

## Table of Contents
* [Title](#${data.title})
* [Description](#${data.description})
* [Installation](#${data.installation})
* [Usage](#${data.usage})
* [License](#${data.license})
* [Contributing](#${data.contributing})
* [Tests](#${data.test})
* [Questions](#${data.email})

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