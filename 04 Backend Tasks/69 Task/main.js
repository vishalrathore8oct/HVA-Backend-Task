const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page");
    }else if (req.url === "/about") {
        res.end("Welcome to our about page");
    }else if (req.url === "/contact") {
        res.end("Welcome to our contact page");
    }else {
        res.end("Page not found");
    }
})

server.listen(8080, () => {
    console.log("Server is running on port 8080");
})
