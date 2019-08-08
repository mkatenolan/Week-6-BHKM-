const fs = require('fs');
const connection = require('./db_connection');
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();
// //console.log("logging sql:", sql);
// console.log(
//   "logging other version of filepath:",
//   fs.readFileSync(__dirname, "db_build.sql").toString()
// );

const buildDatabase = () => {
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err, "error!!");
    } else {
      console.log("Database created!");
      connection.end(() => {
        console.log("Connection closed!");
      });
    }
  });
};

buildDatabase();

module.exports = buildDatabase;
