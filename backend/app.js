const router = require('./routes/routes')

const express = require('express')
require('express-async-errors')

const morgan = require('morgan')

const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan('tiny'))
app.use(morgan(':body'))

const apiUrl = '/api'

app.use(apiUrl, router)

module.exports = app