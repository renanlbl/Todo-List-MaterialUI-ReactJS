const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const allowCors = require('./cors')

const server = express()

server.use(bodyParser.urlencoded( { extended: true } ))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, () => {
    console.log(`BACKEND IS RUNNING ON PORT ${port}.`)
})

module.exports = server