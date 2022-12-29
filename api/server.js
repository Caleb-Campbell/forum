const express = require('express');
const cors = require('cors');
const helmet = require('helmet')

// Import Routes
const postRouter = require('./routes/postRoute')

const server = express()

app.use(cors())
app.use(helmet())
server.use(express.json())
server.use('/api/posts', postRouter)

module.exports = server