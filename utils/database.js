const Sequelize = require('sequelize')

const config = {
    db_host: process.env.RDS_HOSTNAME,
    db_user: process.env.RDS_USERNAME,
    db_pass: process.env.RDS_PASSWORD,
    db_port: process.env.RDS_PORT
}


const sequelize = new Sequelize('kilt_db',config.db_user,config.db_pass, {
    dialect: 'postgres',
    host: config.db_host
})

module.exports = sequelize