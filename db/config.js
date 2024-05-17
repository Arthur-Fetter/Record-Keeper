module.exports = {
    development: {
        username: process.env.DP_DB_USERNAME,
        password: process.env.DP_DB_PASSWORD,
        database: process.env.DP_DB_DATABASE,
        host: process.env.DP_DB_HOST,
        port: process.env.DP_DB_PORT,
        dialect: process.env.DP_DB_DIALECT
    },
    test: {
        username: process.env.DP_DB_USERNAME,
        password: process.env.DP_DB_PASSWORD,
        database: process.env.DP_DB_DATABASE,
        host: process.env.DP_DB_HOST,
        port: process.env.DP_DB_PORT,
        dialect: process.env.DP_DB_DIALECT
    },
    production: {
        username: process.env.DP_DB_USERNAME,
        password: process.env.DP_DB_PASSWORD,
        database: process.env.DP_DB_DATABASE,
        host: process.env.DP_DB_HOST,
        port: process.env.DP_DB_PORT,
        dialect: process.env.DP_DB_DIALECT
    },
};

