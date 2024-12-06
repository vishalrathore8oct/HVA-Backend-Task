const http = require("http");
const fs = require("fs");
const path = require("path");

fs.writeFile(`${path.join(__dirname, "public", "index.html")}`, "<h1>Hello World Vishal</h1>", (err) => {
    if (err) {
        console.log(err);
        return
    }else {
        console.log("File created successfully");
    }
});

const server = http.createServer((req, res) => {
    if (req.url === "/") {

        fs.readFile(`${path.join(__dirname, "public", "index.html")}`, "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                return
            }else {
                res.end(data);
            }
        })
    }
})

server.listen(8080, () => { 
    console.log("Server is running on port 8080");
})