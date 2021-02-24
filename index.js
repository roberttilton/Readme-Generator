// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <p class="lead">My preferred hobby is ${answers.hobby}.</p>
    <p class="lead">My favorite food at the moment is ${answers.food}!</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

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
      choices: ['Apache License 2.0', 'GNU General Public License 3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
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
