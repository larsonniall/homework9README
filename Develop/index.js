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

}

init();
