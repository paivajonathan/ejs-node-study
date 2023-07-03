const sequelize = require("sequelize");
const connection = require("./connection");

const Profile = connection.define("profile", {
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    surname: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    birthDate: {
        type: sequelize.DATE,
        allowNull: false
    },
    state: {
        type: sequelize.STRING,
        allowNull: false
    },
    city: {
        type: sequelize.STRING,
        allowNull: false
    }
});

Profile.sync({ force: false });

module.exports = Profile;