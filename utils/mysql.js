import mysql from 'mysql';

const config = {
  host: 'localhost', user: 'root', password: 'root', database: 'firstKoa',
};

const pool = mysql.createPool(config);

const query = (sql, values) => new Promise((resolve, reject) => {
  pool.getConnection((err, connection) => {
    if (err) {
      reject(err);
    } else {
      connection.query(sql, values, (error, rows) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows);
        }
        connection.release();
      });
    }
  });
});

export { query };
