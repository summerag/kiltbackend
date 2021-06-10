const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Player = sequelize.define('player', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    lolname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    discordtag: {
        type: Sequelize.STRING,
        allowNull: false
    },
    team : {
        type: Sequelize.STRING,
        allowNull: false
    }
    
});

module.exports = Player