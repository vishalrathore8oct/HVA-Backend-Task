const fs = require('fs');

fs.writeFile("message.txt", "This is a message for created file", (err) => {
    console.log("File created Successfully");
})

fs.readFile("message.txt", "utf-8", (err, data) => {
    console.log("Read File = ",data);
    
})

fs.appendFile("message.txt", "\nThis is a message for append file", (err) => {
    console.log("File appended Successfully");
})

fs.unlink("message.txt", (err) => {
    console.log("File deleted Successfully");
})