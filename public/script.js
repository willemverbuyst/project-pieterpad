const socket = io()
// const socketAdmin = io('http://localhost:9000/admin')

socket.on('messageFromTheServer', (dataFromTheServer) => {
  console.log('dataFromTheServer', dataFromTheServer)
  socket.emit('dataToServer', { data: 'Hello from the client' })
})
