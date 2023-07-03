const Sequelize = require("sequelize");

const connection = new Sequelize("db_project_data", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;