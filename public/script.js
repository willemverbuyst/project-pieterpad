const socket = io()

socket.on('messageFromTheServer', (dataFromTheServer) => {
  console.log(dataFromTheServer.data)
  socket.emit('messageToTheServer', { data: 'Hello from the client' })
})

const socketAdmin = io('/admin')

socketAdmin.on('adminMessageFromServer', (dataFromTheServer) =>
  console.log(dataFromTheServer.data)
)
