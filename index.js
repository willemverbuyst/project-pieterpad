const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

io.on('connection', (socket) => {
  socket.emit('messageFromTheServer', {
    data: 'Welcome to the socketio server',
  })
  socket.on('dataToTheServer', (dataFromClient) => {
    console.log(dataFromClient.data)
  })
})

io.of('/admin').on('connection', (socket) => {
  console.log('someone connected to the admin socket')
  io.of('/admin').emit('welcome', 'welcome to the admin namespace')
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
