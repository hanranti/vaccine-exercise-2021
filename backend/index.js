const app = require('./app')
const http = require('http')

const server = http.createServer(app)

server.listen(3333, () => console.log('Vaccine exercise backend started'))