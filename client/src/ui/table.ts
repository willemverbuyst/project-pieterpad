export const createTable = () => {
  const table = document.createElement('table')
  const thead = document.createElement('thead')
  const tbody = document.createElement('tbody')

  table.appendChild(thead)
  table.appendChild(tbody)

  document.getElementById('tableContainer')!.appendChild(table)
}
