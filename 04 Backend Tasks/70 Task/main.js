const path = require("path");

const filePath = path.join(__dirname, "massage.txt");

console.log(path.dirname(filePath));
console.log(path.basename(filePath));
console.log(path.extname(filePath));
console.log(path.parse(filePath).name);

const joinPath = path.join(__dirname, "public", "index.html");

console.log(joinPath);

