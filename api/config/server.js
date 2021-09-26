const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())

consign()
    .include('./src/routes')
    .then('./src/controllers')
    .into(app)

module.exports = app