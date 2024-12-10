const fs = require("fs/promises");
const path = require("path");

const filepath = path.join(__dirname, "data.txt");

function readFileData(filepath) {
    fs.readFile(filepath, "utf-8")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
}

readFileData(filepath)