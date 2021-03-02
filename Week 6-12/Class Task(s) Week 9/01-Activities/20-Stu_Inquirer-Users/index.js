const inquirer = require('inquirer');

inquirer
    .prompt([
        {
        type: 'input',
        message: 'what is your name?',
        name: 'username',
        },
        {
        type: 'input',
        message: 'how do you like your eggs cooked?',
        name: 'cooked',
        },
        {
        type: 'input',
        message: 'are you sure?',
        name: 'confirm',
        }
    ])
    .then((response) => {
        switch (response.cooked){
            case "boiled":
            console.log('gross...')
            break;
            default:
            console.log('you are alright then')
        }   
        response.confirm === response.cooked
        // ? console.log('gross...')
        // : console.log("you're alright then") 
    } 
    
      
    );