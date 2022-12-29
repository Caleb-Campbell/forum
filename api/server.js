const express = require('express');
const cors = require('cors')

// Import Routes
const postRouter = require('./routes/postRoute')

const server = express()

server.use(cors)
server.use(express.json())
server.use('/api/posts', postRouter)

module.exports = server