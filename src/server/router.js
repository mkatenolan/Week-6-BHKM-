const {
  homeHandler,
  publicHandler,
  getDataHandler,
  postHandler
} = require("./handler");

const router = (req, res) => {
  const endpoint = req.url;
  console.log(endpoint);
  if (endpoint === "/") {
    homeHandler(req, res);
  } else if (endpoint.includes("public")) {
    publicHandler(req, res, endpoint);
  } else if (endpoint === "/post-bugbear") {
    postHandler(req, res);
  } else if (endpoint === "/get-info") {
    getDataHandler(req, res, endpoint);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>File not found </h1>");
  }
};

module.exports = router;
