const fs = require("fs");
const path = require("path");

function homeHandler(req, res, endpoint) {
  const filePath = path.join(__dirname, "..", "..", "public", "index.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, { "content-type": "text/html" });
      res.end("<h1>We have an internal server error on our side!</h1>");
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(file);
    }
  });
}

function publicHandler(req, res, endpoint) {
  const extension = endpoint.split(".")[1];
  const extensionType = {
    css: "text/css",
    js: "text/js",
    ico: "image/x-icon",
    png: "image/png"
  };
  const filePath = path.join(__dirname, "..", "..", endpoint);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>Not found!</h1>");
    } else {
      res.writeHead(200, { "Content-Type": extensionType[extension] });
      res.end(file);
    }
  });
}

module.exports = { homeHandler, publicHandler };
