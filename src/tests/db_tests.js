const tape = require('tape');
// const buildDatabase = require('../database/db_build');
const getData = require('../queries/getData');
// const postData = require('../queries/postData');

tape("tape is working", t => {
  t.equals(1, 1, "1 equals 1");
  t.end();
});

tape("getData", t => {
  let expected =
  {
    id: 1,
    category: 'humans',
    name: 'grumpycat44',
    rage_level: 4,
    description: 'stroking me backwards'
  };
  getData.getBugbears((err, result) => {
    if(err) console.log(err);
    console.log("result here", result);
    t.deepEqual(result[0], expected, 'Returns first row of bugbears table');
    t.end();
  });

});
