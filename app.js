require('dotenv').config()

const express = require('express');
const indexRoutes = require('./routes/indexRoutes')
const port = 3001;

const sequelize = require('./utils/database')


var app = express()
app.use(express.json())


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
});


app.use('/', indexRoutes);


sequelize.sync()

app.listen(port);



