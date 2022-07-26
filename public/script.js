const socket = io()

socket.on('messageFromTheServer', (dataFromTheServer) => {
  console.log(dataFromTheServer.data)
  socket.emit('messageToTheServer', { data: 'Hello from the client' })
})

const socketPrologue = io('/prologue')
const socketNorth = io('/north')
const socketSouth = io('/south')

socketPrologue.on('messageFromServer', (dataFromTheServer) =>
  console.log(dataFromTheServer.data)
)
socketNorth.on('messageFromServer', (dataFromTheServer) =>
  console.log(dataFromTheServer.data)
)
socketSouth.on('messageFromServer', (dataFromTheServer) =>
  console.log(dataFromTheServer.data)
)

socket.on('namespaceList', (list) => {
  const namespacesElement = document.getElementById('namespaces')
  namespacesElement.innerHTML = ''
  list.forEach(
    (namespace) =>
      (namespacesElement.innerHTML += `<div class="namespace" ns="${namespace.endpoint}"><span class="namespace__icon>${namespace.icon}</span></div>`)
  )
})
