require('dotenv').config();

const { Sequelize } = require('sequelize');

// console.log(process.env.DP_DB_DATABASE);

const sequelize = new Sequelize(
    process.env.DP_DB_NAME,
    process.env.DP_DB_USERNAME,
    process.env.DP_DB_PASSWORD,
    {
        host: process.env.DP_DB_HOST,
        dialect: 'postgres'
    }
)

module.exports = { sequelize };