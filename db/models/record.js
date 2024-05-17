const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

const Record = sequelize.define(
    'record',
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING(65536),
            allowNull: false
        }
    }
);

module.exports = Record;
