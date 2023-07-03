const sequelize = require("sequelize");
const connection = require("./connection");

const Article = connection.define("article", {
    title: {
        type: sequelize.STRING,
        allowNull: false
    },
    description: {
        type: sequelize.STRING,
        allowNull: false
    },
    content: {
        type: sequelize.TEXT,
        allowNull: false
    },
    imageName: {
        type: sequelize.STRING,
        allowNull: false
    }
});

Article.sync({ force: false });

module.exports = Article;