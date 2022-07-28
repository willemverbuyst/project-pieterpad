function joinNamespace(endpoint) {
  namespaceSocket = io(endpoint)
  namespaceSocket.on('namespaceLoadRoom', (rooms) => {
    const roomList = document.querySelector('.room-list')
    roomList.innerHTML = ''

    rooms.forEach((room) => {
      const privateRoom = room.privateRoom ? '🔐' : '🌐'
      roomList.innerHTML += `<li class="room"><span class="room__icon">${privateRoom}</span><span id="room__name">${room.title}</span></li>`
    })

    const roomNodes = document.getElementsByClassName('room')
    Array.from(roomNodes).forEach((room) => {
      room.addEventListener('click', (e) => {
        console.log(e.target)
      })
    })

    const topRoom = document.getElementById('room__name')
    const topRoomName = topRoom.innerText

    joinRoom(topRoomName)
  })

  namespaceSocket.on('messageToClients', (message) => {
    document.querySelector('.conversation-list').innerHTML +=
      buildMessageHTML(message)
  })

  document
    .querySelector('.message-form')
    .addEventListener('submit', (event) => {
      event.preventDefault()
      const newMessage = document.querySelector('#user-message').value

      namespaceSocket.emit('newMessageToServer', { text: newMessage })
    })
}

function buildMessageHTML(message) {
  const messsageHTML = `
  <li>
    <div>
      <div>
        <div>
          ${message.userName}
        </div>
        <div>
          ${message.time}
        </div/>
      </div>
    <div>
      ${message.text}
    </div/>
    </div>
  </li>
  `
  return messsageHTML
}
