const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const path = require('path')
const namespaces = require('./data/namespaces')

app.use(express.static(path.join(__dirname, 'public')))

server.listen(3000, () => {
  console.log('listening on *:3000')
})

io.on('connection', (socket) => {
  const namespaceData = namespaces.map((namespace) => {
    return {
      icon: namespace.icon,
      endpoint: namespace.endpoint,
    }
  })

  socket.emit('namespaceList', namespaceData)
})

namespaces.forEach((namespace) => {
  io.of(namespace.endpoint).on('connection', (namespaceSocket) => {
    console.log(`${namespaceSocket.id} has joined ${namespace.endpoint}`)
    namespaceSocket.emit('namespaceLoadRoom', namespace.rooms)

    namespaceSocket.on('joinRoom', async (roomToJoin, numbersOfUsers) => {
      const namespaceRoom = namespace.rooms.find(
        (room) => room.title === roomToJoin
      )
      namespaceSocket.join(roomToJoin)

      const allSockets = await io
        .of(namespace.endpoint)
        .in(roomToJoin)
        .allSockets()

      numbersOfUsers(allSockets.size)
    })
  })
})
