function joinRoom(roomName) {
  namespaceSocket.emit('joinRoom', roomName, (newNumberOfUsers) => {
    document.querySelector('.current-room__title').innerHTML = roomName
    document.querySelector('.current-room__users').innerHTML = newNumberOfUsers
  })
}
