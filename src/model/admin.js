import { DataTypes, Sequelize } from '../utils/sequelize';

const Admin = Sequelize.define('admin', {
  uid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Automatically gets converted to SERIAL for postgres
  },
  username: {
    type: DataTypes.STRING(50),
  },
  realname: {
    type: DataTypes.STRING(50),
    defaultValue: null,
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  sign_count: {
    type: DataTypes.INTEGER,
  },
  sign_lastdate: {
    type: DataTypes.DATE,
  },
  isDelete: {
    type: DataTypes.INTEGER,
  },
}, {
  freezeTableName: true,
  timestamps: false, // don't add the timestamp attributes (updatedAt, createdAt)
  tableName: 'admin',
});

export default Admin;
