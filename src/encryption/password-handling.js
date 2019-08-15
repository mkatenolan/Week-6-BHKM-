const bcrypt = require('bcrypt');

const hashPassword = password => {
  console.log("this is password", password);
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10)
    .then(generatedSalt => bcrypt.hash(password, generatedSalt))
    .then(hashedPassword => resolve(hashedPassword))
    .catch(error => reject(error))
  })
};

module.exports = {
  hashPassword
};
