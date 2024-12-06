import inquirer from 'inquirer';

import fs from 'fs';

import qr from 'qr-image';

inquirer
    .prompt([
        /* pass your questions in here */
        {
            type: 'input',
            name: 'url',
            message: 'What is your Github URL?',
        },
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log('GitHub URL: ' + answers.url);

        let qr_png = qr.image(answers.url, { type: 'png' });
        qr_png.pipe(fs.createWriteStream('github_profile_qr.png'));

        let png_string = qr.imageSync(answers.url, { type: 'png' });


        fs.writeFile("input.txt", `${JSON.stringify(answers)}`, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("File created successfully");
            }
        })
    })
    .catch((error) => {
        console.log("Error", error);

    });
