const { homeHandler, publicHandler } = require("./handler");

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === "/") {
    homeHandler(req, res);
  } else if (endpoint.includes("public")) {
    publicHandler(req, res, endpoint);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>File not found ¯_(ツ)_¯</h1>");
  }
};

module.exports = router;
