#! /usr/bin/env node
// Import the inquirer, module. which is a command line interface with node.js
import inquirer from "inquirer";
// Import the chalk and chalkAnimation module, for some designing.
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
// Decleare a constant 'answer' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: (chalk.yellow.bold("Enter your sentence to count the word:"))
    }
]);
const words = answers.Sentence.trim().split(" ");
// Print the array of words to the console
console.log(words);
// Print the word count of the sentence to the console
console.log(chalk.blueBright.bold(`Your sentence word count is ${words.length}`));
// Add rainbow color animation.
chalkAnimation.rainbow(`\n\tTHANKS FOR USING`);
setTimeout(() => {
    console.log('');
}, 3000);
