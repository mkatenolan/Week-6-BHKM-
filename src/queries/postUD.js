const dbConnection = require("../database/db_connection");

const postUD = (username, password, cb) => {
  dbConnection.query(
    "INSERT INTO login(username, password)VALUES ($1, $2);",
    [username, password],
    (err, res) => {
      if (err) return cb(err);
      console.log("in the postUD");
      cb(null, res);
    }
  );
};

module.exports = { postUD };
