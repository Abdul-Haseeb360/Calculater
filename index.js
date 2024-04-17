#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first Number", type: "number", name: "firstNumber" },
    { message: "Enter second Number", type: "number", name: "secondNumber" },
    {
        message: "Select the on of the oprater to perfom action ",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
    },
]);
if (answer.operator == "+") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator == "-") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator == "*") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator == "/") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select the valid operator");
}
