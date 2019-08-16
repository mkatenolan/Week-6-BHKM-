const fs = require("fs");
const path = require("path");
const querystring = require("querystring");
const qs = require("qs");
const postBugbears = require("../queries/postData");
const getData = require("../queries/getData");
const { parse } = require("cookie");
const { sign, verify } = require("jsonwebtoken");
const secret = "secretKey";
const payload = { logged_in: "true" };
const passwordHandling = require("../encryption/password-handling");
const postUD = require("../queries/postUD");
const getUD = require("../queries/getUD");

function homeHandler(req, res, endpoint) {
  const filePath = path.join(__dirname, "../..", "public", "index.html");
  if (!req.headers.cookie) {
    console.log(req.headers.cookie);
    res.writeHead(301, { Location: "/login-page" });
    res.end();
  }
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

function loginPageHandler(req, res, endpoint) {
  const filePath = path.join(__dirname, "../..", "public", "login.html");
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
      res.writeHead(301, { Location: "/" });
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

function postLogin(req, res, payload, secret) {
  let allData = "";
  req.on("data", chunk => {
    allData += chunk;
  });
  req.on("end", () => {
    const parsedData = qs.parse(allData);
    const username = parsedData.loginUserName;
    const password = parsedData.LoginPassWord;
    // insert getUD and then compare password function here
    getUD
      .getUD(username, password)
      .then(dbPassword => {
        console.log(dbPassword);
      })
      .then(result => {
        if (result == false) {
          console.log(result);
        } else {
          setToken(req, res, payload, secret);
        }
      });
  });
}

const setToken = (req, res, payload, secret) => {
  const cookie = sign(payload, secret);
  res.writeHead(301, {
    Location: "/",
    "Set-Cookie": `jwt=${cookie}`
  });
  res.end();
};

function removeToken(req, res) {
  res.writeHead(301, {
    Location: "/login-page",
    "Set-Cookie": "jwt=0; Max-Age=0"
  });
  res.end();
}

function postRegister(req, res, payload, secret) {
  let allData = "";
  req.on("data", chunk => {
    allData += chunk;
  });
  req.on("end", () => {
    const parsedData = qs.parse(allData);
    const registeredPassword = parsedData.registerPassword;
    const username = parsedData.registerUserName;
    // this should ideally only happen after passwords have been compared - to be added
    setToken(req, res, payload, secret);
    passwordHandling
      .hashPassword(registeredPassword)
      .then(hashedPassword =>
        postUD.postUD(username, hashedPassword, err => {
          if (err) {
            res.writehead(404, { "Content-Type": "text/html" });
            res.end("<h1>Not found!</h1>");
            console.log("this is the error post UD in handler:", err);
          }
        })
      )
      .then(() => {
        res.writeHead(301, { Location: "/" });
        res.end();
      });
  });
}

function guestLogic(req, res) {
  res.writeHead(302, { Location: "/", "Set-Cookie": "logged_in=false" });
  res.end();
}

module.exports = {
  homeHandler,
  publicHandler,
  getDataHandler,
  postHandler,
  setToken,
  removeToken,
  postRegister,
  loginPageHandler,
  guestLogic,
  postLogin
};
