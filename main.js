#! usr/bin/env node
import inquirer from "inquirer";
async function welcome() {
    let rainbowTitle = ("Let's start our calculation");
    console.log(rainbowTitle, `
    _____________________
    |  _________________  |
    | | Aziz        0.  | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    
    `);
}
;
await welcome();
async function askQuestion() {
    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "enter your number",
        },
        {
            type: "number",
            name: "num2",
            message: "enter your number",
        },
        {
            type: "list",
            name: "operator",
            choices: ["(+) Addition", "(-) Substraction", "(*) Multiplication", "(/) Division", "(**) Exponentiation", "(%) Module"],
            message: "select operator:",
        },
    ]);
    //console.log(ans)
    //again();
    if (answers.operator === "(+) Addition") {
        console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
    }
    else if (answers.operator === "(-) Substraction") {
        console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
    }
    else if (answers.operator === "(*) Multiplication") {
        console.log((`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator === "(/) Division") {
        console.log((`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
    else if (answers.operator === "(**) Exponentiation") {
        console.log(`${answers.num1} ** ${answers.num2} = ${answers.num1 ** answers.num2}`);
    }
    else if (answers.operator === "(%) Module") {
        console.log((`${answers.num1} % ${answers.num2} = ${answers.num1 % answers.num2}`));
    }
}
//askQuestion();
async function startLoop() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue press y or n: ",
        });
    } while (again.restart == "y" || again.restart == "yes");
}
await startLoop();
