export const createTableHeaders = (tableHeaders: string[]) => {
  const thead = document.querySelector('thead')
  const row = document.createElement('tr')

  tableHeaders.forEach((tableHeader) => {
    const header = document.createElement('th')
    header.innerText = tableHeader
    header.classList.add(tableHeader)
    row.appendChild(header)
  })

  thead!.appendChild(row)
}
