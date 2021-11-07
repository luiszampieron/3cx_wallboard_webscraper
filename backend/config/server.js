const express = require('express')
const path = require('path');
const consign = require('consign')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next()
})

app.use(express.static(path.join(__dirname, '../src/views/home')));
app.path = path 

consign()
    .include('./src/routes')
    .then('./src/controllers')
    .into(app)

module.exports = app