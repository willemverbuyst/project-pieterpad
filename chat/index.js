const express = require('express')
const app = express()
const socketio = require('socket.io')

app.use(express.static(__dirname + '/public'))

const expressServer = app.listen(9000)
const io = socketio(expressServer)

io.on('connection', (socket) => {
  socket.emit('messageFromTheServer', { data: 'Welcom to the socketio server' })
  socket.on('messageToServer', (dataFromClient) => {
    console.log('dataFromClients', dataFromClients)
  })
})

io.of('/admin').on('connection', (_socket) => {
  console.log('someone connected to the admin socket')
  io.of('/admin').emit('welcome', 'welcome to the admin namespaces')
})
