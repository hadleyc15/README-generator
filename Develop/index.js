const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: 'What is the title of your project?'
    }, 
    {
        type: "input",
        name: "description",
        message: "Please describe your project."
    }, 
    {
        type: "input",
        name: "installation",
        message: 'What steps must a user take to install your project? Separate commands with " | " to print on separate lines.'
    }, 
    {
        type: "input",
        name: "usage",
        message: "What is your project used for?",
    }, 
    {
        type: "input",
        name: "contributing",
        message: "Please describe how others can contribute to this project."
    },
    {
        type: "input",
        name: "tests",
        message: "How are tests run for this project?",
    }, 
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices: [
            "Apache 2.0",
            "MIT",
            "GPL3",
            "BSD 3 Clause"
        ]
    }, 
    {
        type: "input",
        name: "gitHub",
        message: "Please input your Github username."
    },
    {
        type: "input",
        name: "email",
        message: "Please input your contact email address."
    },
    {
        type: "input",
        name: "contact",
        message: "Please input instructions on how to best contact you."
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
