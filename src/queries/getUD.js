const dbConnection = require("../database/db_connection");
const passwordHandling = require("../encryption/password-handling");

const getUD = (username, password) => {
  return new Promise((resolve, reject) => {
    dbConnection
      .query(`SELECT password FROM login WHERE username= '${username}';`)
      .then(dbPassword => {
        // passwordHandling.comparePasswords(
        //   dbPassword[1],
        //   dbPassword[0][0].password
        // );
        resolve(dbPassword);
        console.log("dbPasswod:", dbPassword);
        // console.log(dbPassword[1], dbPassword[0][0].password);
      })
      .catch(err => reject(err));
  });
};

module.exports = {
  getUD
};
