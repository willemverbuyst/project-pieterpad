function joinRoom(roomName) {
  namespaceSocket.emit('joinRoom', roomName, (newNumberOfUsers) => {
    document.querySelector('.current-room__title').innerHTML = roomName
    document.querySelector('.container__chat--users').innerHTML =
      `<span class="user">&#128513;</span>`.repeat(newNumberOfUsers)
  })
}
