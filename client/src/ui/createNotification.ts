export const createNotification = () => {
  const notification = document.createElement('h3')
  notification.innerText = 'No data found'

  document.getElementById('tableContainer')!.appendChild(notification)
}
