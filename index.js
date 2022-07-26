const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', (socket) => {
  console.log('CONNECTION someone connected to the main namespace')
  socket.emit('messageFromTheServer', {
    data: 'Welcome to the main namespace',
  })
  socket.on('messageToTheServer', (dataFromClient) => {
    console.log(dataFromClient.data)
  })
})

io.of('/admin').on('connection', (socket) => {
  console.log('CONNECTION someone connected to the admin namespace')
  io.of('/admin').emit('adminMessageFromServer', {
    data: 'Welcome to the admin namespace',
  })
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
