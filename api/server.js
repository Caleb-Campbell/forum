const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express()

// Import Routes
const postRouter = require('./routes/postRoute');


server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/posts', postRouter)

module.exports = server;