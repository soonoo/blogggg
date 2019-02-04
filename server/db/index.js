const mysql = require('mysql');
const password = require('../password');
const sha512 = require('js-sha512');

let connection;
exports.handleConnection = () => {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: password,
    database: 'blog',
    timezone: 'UTC',
  });

  connection.connect(err => {
    if(err) {
      console.log('db connection error: ', err);
      setTimeout(module.exports.handleConnection, 2000);
    }
  });

  connection.on('error', (err) => {
    console.log('db error: ', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      module.exports.handleConnection();
    }
  });
}

exports.promiseQuery = (...args) => {
  return new Promise((resolve, reject) => {
    connection.query(...args, (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
}

exports.transactionQuery = (...args) => {
  return new Promise((resolve, reject) => {
    connection.query(...args, (err, rows) => {
      if (err) reject(connection.rollback(() => {
        throw err;
      }));
      resolve(rows);
    });
  });
}

exports.isValidPassword = async (pwQuery) => {
  const userPw = sha512(pwQuery).toUpperCase();
  const pw = await module.exports.promiseQuery('SELECT password FROM pw');

  return userPw === pw[0].password;
}
module.exports.handleConnection();

