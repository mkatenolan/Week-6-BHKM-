const dbConnection = require("../database/db_connection");
const passwordHandling = require("../encryption/password-handling");

const getUD = (username, password) => {
  return new Promise((resolve, reject) => {
    dbConnection
      .query(`SELECT password FROM login WHERE username= '${username}';`)
      .then(dbPassword => {
        console.log("row", dbPassword.rows[0].password);
        resolve(dbPassword);
      })
      .catch(err => reject(err));
  });
};

module.exports = {
  getUD
};
