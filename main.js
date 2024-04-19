"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
console.log(chalk_1.default.green("Welcome To Our Currency Converter Tool"));
var currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.75,
    PKR: 280,
};
var user_answer = await inquirer_1.default.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "Amount",
        message: "Enter You Amount",
        type: "number",
    }
]);
var fromAmount = currency[user_answer.from];
var toAmount = currency[user_answer.to];
var Amount = user_answer.Amount;
var baseAmount = Amount / fromAmount;
var convertedAmount = baseAmount * toAmount;
console.log(chalk_1.default.green.bold(convertedAmount));
console.log(chalk_1.default.red.bold("Thank You For Using My Currency Converter tOOL"));
