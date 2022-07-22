import { Stage } from '../business'

export const createTableRows = (dataForTable: Stage[]) => {
  const tbody = document.querySelector('tbody')
  const row = document.createElement('tr')
  const header = document.createElement('td')
  header.colSpan = 4
  header.innerText = dataForTable[0].section
  header.classList.add('header')
  row.appendChild(header)
  tbody!.appendChild(row)

  dataForTable.forEach((data) => {
    const row = document.createElement('tr')

    const stage = document.createElement('td')
    stage.innerText = String(data.stageNumber)
    stage.classList.add('stage')

    const from = document.createElement('td')
    from.innerText = data.from
    from.classList.add('from')

    const to = document.createElement('td')
    to.innerText = data.to
    to.classList.add('to')

    const km = document.createElement('td')
    km.innerText = String(data.km)
    km.classList.add('km')

    row.appendChild(stage)
    row.appendChild(from)
    row.appendChild(to)
    row.appendChild(km)
    tbody!.appendChild(row)
  })
}
