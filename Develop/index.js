const fs = require("fs");
const inquirer = require("inquirer")

const questions = [
    {
        message: "What is your github username?",
        name: "username",
    },
    {
        message: "What is the name of your github repository?",
        name: "repository",
    }
];

function writeToFile(fileName, data) {
    fs.writeFile("readme.md", data, function(err){
        if(err){
            return console.log(err);
        }
    })
}

function init() {
    inquirer
    .prompt(questions)
    .then(function({username,repository}){
        const queryUrl = "https:api.github.com/users/${username}";
    })
}

init();
