const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a brief description of your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license should your project have?',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: 'input',
        name: 'installCmd',
        message: 'What command should be run to install dependencies?',
        default: "npm i",
    },
    {
        type: 'input',
        name: 'runCmd',
        message: 'What command should be run to run tests?',
        default: "npm test",
    },
    {
        type: 'input',
        name: 'useInfo',
        message: 'What should the user know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributionInfo',
        message: 'What should the user know about contributing to the repo?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            console.log(data);
            writeToFile("READMEE.md", data);
        })
}

// Function call to initialize app
init(); 
