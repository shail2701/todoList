const Sequelize = require('sequelize');
const db = require('../config/db');

const Todo = db.define('todo',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            field: 'title',
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            field: 'description',
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.ENUM('completed', 'notcompleted'),
            allowNull: false,
        },
        createdAt: {
            field: 'createdAt',
            type: Sequelize.DATE,
            defaultValue: Date.now
        },
        updatedAt: {
            field: 'updatedAt',
            type: Sequelize.DATE,
            defaultValue: Date.now
        },
});

module.exports = Todo;

