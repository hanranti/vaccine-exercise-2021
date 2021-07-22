const router = require('./routes/routes')

const express = require('express')
require('express-async-errors')

const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

const apiUrl = '/api'

app.use(apiUrl, router)

module.exports = app