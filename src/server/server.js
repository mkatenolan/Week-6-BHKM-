const http = require("http");
const https = require("https");
const router = require("./router");

const server = http.createServer(router);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`BearBug found on port ${port}`);
});
