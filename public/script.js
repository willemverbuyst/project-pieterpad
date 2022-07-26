const socket = io()

socket.on('messageFromTheServer', (dataFromTheServer) => {
  console.log(dataFromTheServer.data)
  socket.emit('dataToTheServer', { data: 'Hello from the client' })
})

const socketAdmin = io('/admin')

socketAdmin.on('welcome', (dataFromTheServer) => console.log(dataFromTheServer))
