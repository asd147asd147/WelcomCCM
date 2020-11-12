const { sequelize } = require("..");

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('issues', {
      idx: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      num:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      level:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      writer: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      restric: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: true,
      },
      ioexam: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: true,
      },
      accuracy: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      desc: {
        type: Sequelize.TEXT,
        allowNull: false,
      }
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('issues'),
};
