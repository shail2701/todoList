const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todolist', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres' 
});

module.exports = sequelize;