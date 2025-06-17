const socket = io()
let namespaceSocket = ''

socket.on('namespaceList', (list) => {
  const namespacesElement = document.getElementById('namespaces')
  namespacesElement.innerHTML = ''

  list.forEach(
    (namespace) =>
      (namespacesElement.innerHTML += `<div class="namespace" ns="${namespace.endpoint}"><span class="namespace__icon">${namespace.icon}</span></div>`)
  )

  Array.from(document.getElementsByClassName('namespace')).forEach(
    (element) => {
      element.addEventListener('click', () => {
        const namespaceEndpoint = element.getAttribute('ns')
        joinNamespace(namespaceEndpoint)
      })
    }
  )
  joinNamespace('/prologue')
})
