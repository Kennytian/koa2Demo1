const mysql = require('mysql');

const Config = {
  host: 'localhost', user: 'root', password: 'root', database: 'firstKoa',
};

// host     :  '127.0.0.1',
// user     :  'root',
// password :  '123456',
// database :  'my_database'

const pool = mysql.createPool(Config);

const query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (error, rows) => {
          console.log(sql);
          if (error) {
            console.log(error);
            reject(error);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};

module.exports = { query };
