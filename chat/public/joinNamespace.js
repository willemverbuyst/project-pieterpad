function joinNamespace(endpoint) {
  io(endpoint).on('namespaceLoadRoom', (rooms) => {
    const roomList = document.querySelector('.room-list')
    roomList.innerHTML = ''

    rooms.forEach((room) => {
      const privateRoom = room.privateRoom ? '🔐' : '🌐'
      roomList.innerHTML += `<li class="room"><span>${privateRoom}</span>${room.title}</li>`
    })

    const roomNodes = document.getElementsByClassName('room')
    Array.from(roomNodes).forEach((room) => {
      room.addEventListener('click', (e) => {
        console.log(e.target)
      })
    })
  })
}
