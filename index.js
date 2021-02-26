const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (answers) =>
  `# ${answers.title}
  ## Description
  ${answers.description}
  ## Installation Instructions
  ${answers.installation}
  ## Usage Information
  ${answers.usage}
  ## License
  ${answers.license}
  ## Contribution Guidelines
  ${answers.contribution}
  ## Test Information
  ${answers.test}`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your desired title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What would you like to include in the description?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Would you like to enter installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Would you like to enter usage information?',
    },
    {
      type: 'rawlist',
      name: 'license',
      message: 'Which license would you like to use?',
      choices: [{
        name: 'Apache License 2.0',
        value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
       },
       {
        name: 'GNU General Public License 3.0',
        value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
       },
       {
        name: 'MIT License',
        value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
       },
       {
        name: 'BSD 2-Clause "Simplified" License',
        value: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
       },
       {
        name: 'Creative Commons Zero v1.0 Universal',
        value: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
       }]
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Would you like to enter contribution guidelines?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Would you like to enter test instructions?',
    },
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
