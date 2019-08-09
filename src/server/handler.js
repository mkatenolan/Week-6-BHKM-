const fs = require("fs");
const path = require("path");
const querystring = require("querystring");
const qs = require("qs");
const postBugbears = require("../queries/postData");
const getData = require("../queries/getData");

function homeHandler(req, res, endpoint) {
  const filePath = path.join(__dirname, "../..", "public", "index.html");
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

  const filePath = path.join(__dirname, "../..", endpoint);

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

const postHandler = (req, res) => {
  console.log("gets into post handler");
  let allData = "";
  req.on("data", chunk => {
    allData += chunk;
  });
  req.on("end", () => {
    console.log("gets into req.onend");
    console.log(qs.parse(allData));
    const { category, name, rage_level, description } = qs.parse(allData);
    postBugbears(category, name, rage_level, description, err => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>Not found!</h1>");
        console.log("this is the error:", err);
      }
      res.writeHead(302, { Location: "/" });
      res.end();
    });
  });
};

function getDataHandler(req, res, endpoint) {
  getData.getBugbears((err, result) => {
    res.writeHead(200, { "Content-Type": "application:json" });
    res.end(JSON.stringify(result));
  });
}

module.exports = { homeHandler, publicHandler, getDataHandler, postHandler };
