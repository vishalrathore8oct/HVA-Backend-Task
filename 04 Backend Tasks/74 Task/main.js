import express from "express";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
    res.render("index", {
        name: "Vishal", 
        massege: "Welcome to My Home Page"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        name: "Vishal", 
        massege: "Welcome to My About Page"
    })
})

app.get("/contact", (req, res) => {
    res.render("contact", {
        name: "Vishal", 
        massege: "Welcome to My Contact Page"
    })
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})