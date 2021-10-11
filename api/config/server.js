const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

const configs = require('../../configs')

const app = express()

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', configs.ipMachine + "3000");
    next()
});

consign()
    .include('./src/routes')
    .then('./src/controllers')
    .into(app)

module.exports = app