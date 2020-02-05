require('dotenv').config();

const sequelizeConfig = {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT,
    "migrationStorageTableName": "sequelize_meta",
    "seederStorage": "sequelize",
    "seederStorageTableName": "sequelize_data"
};

const testConfig = {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.TEST_DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT,
    "migrationStorageTableName": "sequelize_meta",
}


module.exports = {
    "development": sequelizeConfig,
    "test": testConfig,
    "production": sequelizeConfig,
}