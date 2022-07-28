function joinRoom(roomName) {
  namespaceSocket.emit('joinRoom', roomName, (newNumberOfUsers) => {
    document.querySelector('.current-room__title').innerHTML = roomName
    document.querySelector('.container__chat--users').innerHTML =
      `<span class="user">&#128513;</span>`.repeat(newNumberOfUsers)
  })

  namespaceSocket.on('historyCatchUp', (history) => {
    const messageList = document.querySelector('.conversation-list')
    messageList.innerHTML = ''

    history.forEach((message) => {
      const messageHTML = buildMessageHTML(message)
      const currentMessages = messageList.innerHTML
      messageList.innerHTML = currentMessages + messageHTML
    })

    messageList.scrollTo(0, messageList.scrollHeight)
  })
}
