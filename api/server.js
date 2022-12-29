const express = require('express');
const cors = require('cors');
const helmet = require('helmet')

// Import Routes
const postRouter = require('./routes/postRoute')

const server = express()

server.use(cors)
server.use(express.json())
server.use('/api/posts', postRouter)

module.exports = server