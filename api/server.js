const express = require('express');

// Import Routes
const postRouter = require('./routes/postRoute')

const server = express()

server.use(express.json())
server.use('/api/posts', postRouter)

module.exports = server