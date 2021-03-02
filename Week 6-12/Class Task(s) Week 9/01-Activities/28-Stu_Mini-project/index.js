const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Where do you live?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Tell me a bit about yourself.',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'linkedIn',
        },
        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'gitHub',
        }
    ])
    .then((response) => {
        const template =
            `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                <title>${response.username} | Welcome </title>
                </head>
                <body>
                    <div class="jumbotron">
                        <h1 class="display-4">Hi, im ${response.username}.</h1>
                        <p class="lead">${response.bio}.</p>
                        <hr class="my-4">
                        <p>${response.location}</p>
                        <p class="lead">
                            <a class="btn btn-primary btn-lg" href="${response.linkedIn}" role="button">LinkedIn</a>
                            <a class="btn btn-info btn-lg" href="${response.gitHub}" role="button">GitHub</a>
                        </p>
                    </div>
                </body>
            </html>
        `;
        fs.writeFile('new.html', template, (err) => (
            err ? console.error(err) : console.log('New portfolio inbound!')
        ));
    });

