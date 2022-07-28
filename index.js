const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const path = require('path')
const namespaces = require('./data/namespaces')

const PORT = process.env.PORT || 9000

app.use(express.static(path.join(__dirname, 'public')))

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
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
      namespaceSocket.join(roomToJoin)

      const allSockets = await io
        .of(namespace.endpoint)
        .in(roomToJoin)
        .allSockets()

      numbersOfUsers(allSockets.size)

      const namespaceRoom = namespace.rooms.find(
        (room) => room.title === roomToJoin
      )

      namespaceSocket.emit('historyCatchUp', namespaceRoom.history)
    })

    namespaceSocket.on('newMessageToServer', (message) => {
      const convertedDate = new Date().toLocaleDateString()
      const convertedTime = new Date().toLocaleTimeString()
      const fullMessage = {
        text: message.text,
        time: `${convertedDate} -  ${convertedTime}`,
        userName: 'Sjaak',
      }
      const roomTitle = [...namespaceSocket.rooms.keys()][1]

      const namespaceRoom = namespace.rooms.find(
        (room) => room.title === roomTitle
      )

      namespaceRoom.addMessage(fullMessage)

      // console.log('namespaceRoom.history', namespaceRoom.history)

      io.of(namespace.endpoint)
        .to(roomTitle)
        .emit('messageToClients', fullMessage)
    })
  })
})
