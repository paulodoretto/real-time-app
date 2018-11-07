const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb://audacia:abc123@ds155203.mlab.com:55203/db-real-time-app', {
    useNewUrlParser: true
})

app.use((req, res, next) => {
    req.io = io
    return next()
})

app.use(cors())
app.use(express.json())
app.use(require('./routes.js'))

server.listen(3000, () => {
    console.log(':) Server started on port 3000')
})
