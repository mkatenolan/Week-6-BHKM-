const dbConnection = require("../database/db_connection");

const getUD = (username, password) => {
  return new Promise((resolve, reject) => {
    dbConnection
      .query(`SELECT password FROM login WHERE username= '${username}';`)
      .then(dbPassword => {
        resolve(dbPassword);
        console.log("dbPasswod:", dbPassword);
      })
      .catch(err => reject(err));
  });
};

module.exports = getUD;
