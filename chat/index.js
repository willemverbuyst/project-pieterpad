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
    // console.log(namespaceSocket.handshake)
    // const userName = namespaceSocket.handshake.query.userName

    namespaceSocket.emit('namespaceLoadRoom', namespace.rooms)
    namespaceSocket.on('joinRoom', (roomToJoin, numbersOfUsers) => {
      const roomTitle = [...namespaceSocket.rooms.values()][1]
      console.log('namespaceSocket', namespaceSocket)
      if (roomTitle && roomTitle !== roomToJoin) {
        namespaceSocket.leave(roomTitle)
        updateUsersInRoom(namespace, roomTitle)
      }

      namespaceSocket.join(roomToJoin)

      const allSockets = io.of(namespace.endpoint).in(roomToJoin).allSockets()

      numbersOfUsers(allSockets.size)

      const namespaceRoom = namespace.rooms.find((room) => {
        return room.title === roomToJoin
      })

      console.log('roomToJoin', roomToJoin)
      // console.log(
      //   'namespaceRoom.rooms.map(r => r.title)',
      //   namespace.rooms.map((r) => r.title)
      // )

      if (namespaceRoom) {
        namespaceSocket.emit('historyCatchUp', namespaceRoom.history)
        updateUsersInRoom(namespace, roomToJoin)
      }
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

      io.of(namespace.endpoint)
        .to(roomTitle)
        .emit('messageToClients', fullMessage)
    })
  })
})

function updateUsersInRoom(namespace, room) {
  io.of(namespace.endpoint)
    .in(room)
    .allSockets()
    .then((clients) => {
      io.of(namespace.endpoint)
        .in(room)
        .emit('updateUsers', Array.from(clients).length)
    })
}
