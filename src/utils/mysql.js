import mysql from 'mysql';
import { DB_CONFIG } from '../const/site';

const pool = mysql.createPool(DB_CONFIG);

const query = (sql, values) => new Promise((resolve, reject) => {
  pool.getConnection((err, connection) => {
    if (err) {
      reject(err);
    } else {
      connection.query(sql, values, (error, rows) => {
        connection.release();
        if (error) {
          reject(error);
        } else {
          resolve(rows);
        }
      });
    }
  });
});

export { query };
