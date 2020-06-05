const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static("public"));


nunjucks.configure("src/views", {
    express:server,
    autoescape: false,
    noCache: true
});

server.get("/", (req, res) => {
    return res.render("index.html", { })
});
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
});
server.listen(3000, () => {
    console.log("Server is runnig")
});
