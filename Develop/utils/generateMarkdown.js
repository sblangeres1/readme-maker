// Badge Links
const mitBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
const apache2Badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
const gpl3Badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
const bsd3Badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';

// License Links
const mitLink = '[View MIT License](https://opensource.org/licenses/MIT)';
const apache2Link = '[View APACHE 2.0 License](https://opensource.org/licenses/Apache-2.0)';
const gpl3Link = '[View GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
const bsd3Link = '[View BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return mitBadge;
  } 
  else if (license == 'APACHE 2.0') {
    return apache2Badge;
  }
  else if (license == 'GPL 3.0') {
    return gpl3Badge;
  }
  else if (license == 'BSD 3') {
    return bsd3Badge;
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return mitLink;
  } 
  else if (license == 'APACHE 2.0') {
    return apache2Link;
  }
  else if (license == 'GPL 3.0') {
    return gpl3Link;
  }
  else if (license == 'BSD 3') {
    return bsd3Link;
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None'){
    return 'This project is not licensed.'
  }
  else {
    return `This project is licensed by ${license}.
For more info on the ${license}, please click this link: ${renderLicenseLink(license)}
  `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectName}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table Of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation

To install needed dependencies, run this command:

\`\`\`
${data.installCmd}
\`\`\`

## Usage

${data.useInfo}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributionInfo}

## Tests

To run tests, please run the following command:

\`\`\`
${data.runCmd}
\`\`\`

## Questions

If you have any questions about this project, contact me directly at ${data.email}.
You can find more of my work at [${data.userName}](https://github.com/${data.userName}) on GitHub.
`;  
}

module.exports = generateMarkdown;
