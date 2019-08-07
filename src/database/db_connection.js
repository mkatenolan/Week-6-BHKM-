const { pool } = require('pg');
const url = require('url');
require('env2')('./config.env');

let DATABASE_URL = process.env.DATABASE_URL;
if(process.env.NODE_ENV === 'test') {
  DATABASE_URL = process.env.TEST_DATABASE_URL;
};
