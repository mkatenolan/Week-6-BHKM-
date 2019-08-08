const db_connection = require('../database/db_connection');

const getBugbears = cb => {
  db_connection.query('SELECT * FROM bugbears', (err, res) => {
    if (err) return cb(err);
    cb (null, res.rows);
  });
};

// getBugbears((err, res)=> {
//   console.log(res);
// });


module.exports = { getBugbears };
