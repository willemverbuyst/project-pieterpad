function joinNamespace(endpoint) {
  if (namespaceSocket) {
    namespaceSocket.close()
    document
      .querySelector('#user-message')
      .removeEventListener('submit', formSubmission)
  }
  namespaceSocket = io(`http://localhost:9000${endpoint}`)
  namespaceSocket.on('namespaceLoadRoom', (rooms) => {
    const roomList = document.querySelector('.room-list')
    roomList.innerHTML = ''

    rooms.forEach((room) => {
      const privateRoom = room.privateRoom ? '🔐' : '🌐'
      roomList.innerHTML += `<li class="room"><span id="room__name">${room.title}</span></li>`
    })

    const roomNodes = document.getElementsByClassName('room')
    Array.from(roomNodes).forEach((room) => {
      room.addEventListener('click', (e) => {
        joinRoom(e.target.innerText)
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
    .addEventListener('submit', formSubmission)
}

function formSubmission(event) {
  event.preventDefault()
  const newMessage = document.querySelector('#user-message').value

  namespaceSocket.emit('newMessageToServer', { text: newMessage })
  // document.querySelector('#user-message').value = ''
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
