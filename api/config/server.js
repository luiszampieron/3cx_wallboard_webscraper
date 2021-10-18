const express = require('express')
const path = require('path');
const consign = require('consign')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + "3000");
    next()
})
app.use(express.static(path.join(__dirname, '../build')));

app.pathh = path 

consign()
    .include('./src/routes')
    .then('./src/controllers')
    .into(app)

module.exports = app