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
* [Description](https://github.com/kiri-smith/readme-generator#description)
* [Installation](https://github.com/kiri-smith/readme-generator#installation)
* [Usage](https://github.com/kiri-smith/readme-generator#usage)
* [License](https://github.com/kiri-smith/readme-generator#license)
* [Contributing](https://github.com/kiri-smith/readme-generator#contributing)
* [Tests](https://github.com/kiri-smith/readme-generator#tests)
* [Questions](https://github.com/kiri-smith/readme-generator#questions)

## Description

${data.description}

## Installation

## Usage

## License

## Contributing

## Tests

## Questions


`;
}

module.exports = generateMarkdown;