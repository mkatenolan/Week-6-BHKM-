const bcrypt = require("bcrypt");

const hashPassword = password => {
  console.log("this is password", password);
  return new Promise((resolve, reject) => {
    bcrypt
      .genSalt(10)
      .then(generatedSalt => bcrypt.hash(password, generatedSalt))
      .then(hashedPassword => {
        console.log(hashedPassword);
        resolve(hashedPassword);
      })
      .catch(error => reject(error));
  });
};

const comparePasswords = (password, hashedPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt
      .compare(password, hashedPassword)
      .then(result => {
        resolve(result);
        console.log("this is the compare passwords result:", result);
      })
      .catch(err => {
        reject(err);
        console.log("password compare error:", reject(err));
      });
  });
};

module.exports = {
  hashPassword,
  comparePasswords
};
