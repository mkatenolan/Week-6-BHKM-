const dbConnection = require("../database/db_connection");

const postData = (category, name, rage_level, description, cb) => {
  dbConnection.query(
    "INSERT INTO bugbears (category, name, rage_level, description) VALUES ($1, $2, $3, $4)",
    [category, name, rage_level, description, cb],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = postData;
