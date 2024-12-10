const fs = require("fs/promises");
const path = require("path");

const filepath = path.join(__dirname, "data.txt");

async function readFileData(filepath) {
    try {
        let fsData = await fs.readFile(filepath, "utf-8");
        console.log(fsData);
        
    } catch (error) {
        console.log(error);
        
    }
}

readFileData(filepath)