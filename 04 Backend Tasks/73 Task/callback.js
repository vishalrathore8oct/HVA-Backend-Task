const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "data.txt");

function readFileData(filepath) {
    fs.readFile(filepath, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            
        }else {
            console.log(data);
            
        }
    })
}

readFileData(filepath)