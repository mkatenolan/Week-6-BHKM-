const {
  homeHandler,
  publicHandler,
  getDataHandler,
  postHandler,
  postRegister,
  loginPageHandler,
  setToken
} = require("./handler");

const secret = "secretKey";
const payload = { logged_in: "true" };

const router = (req, res) => {
  const endpoint = req.url;
  console.log(endpoint);
  // if (endpoint === "/") {
  //   homeHandler(req, res);
  // }
  if (endpoint === "/") {
    loginPageHandler(req, res);
  } else if (endpoint.includes("public")) {
    publicHandler(req, res, endpoint);
  } else if (endpoint === "/post-bugbear") {
    postHandler(req, res);
  } else if (endpoint === "/get-info") {
    getDataHandler(req, res, endpoint);
  } else if (endpoint === "/login") {
    setToken(req, res, payload, secret);
  } else if(endpoint === "/logout") {
    removeToken(req, res);
  } else if (endpoint == "/register") {
    postRegister(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>File not found </h1>");
  }
};

module.exports = router;
