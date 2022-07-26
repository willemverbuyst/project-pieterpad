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

// namespaces.forEach((namespace) => {
//   io.of(namespace.endpoint).on('connection', (socket) => {
//     console.log(`${socket.id} has joined ${namespace.endpoint}`)
//   })
// })
