const bcrypt = require('bcryptjs');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const Issues = sequelize.define(
    'issues',
    {
      idx: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      num:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      level:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      writer: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      restric: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true,
      },
      ioexam: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true,
      },
      accuracy: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      desc: {
        type :DataTypes.TEXT,
        allowNull: false,
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'issues',
    }
  );

  return Issues;
};
