import SequelizeORM from 'sequelize';
import { DB_CONFIG } from '../const/site';

const { host, database, user } = DB_CONFIG;
const Sequelize = new SequelizeORM(database, user, null, {
  host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const { DataTypes } = SequelizeORM;
export { Sequelize, DataTypes };
