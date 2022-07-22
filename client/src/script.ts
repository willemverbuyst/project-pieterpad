import { DataForTable, Stage } from './business/models'
import { getDataForTable } from './business/tableData'

window.addEventListener('load', async () => {
  try {
    const tableData: DataForTable | null = await getDataForTable()

    if (!tableData) {
      return
    }

    const { tableHeaders, prologueStages, northStages, southStages } = tableData

    const table = document.createElement('table')
    const thead = document.createElement('thead')
    const tbody = document.createElement('tbody')

    table.appendChild(thead)
    table.appendChild(tbody)

    document.getElementById('tableContainer')!.appendChild(table)

    function createTitles(titles: string[]) {
      const row = document.createElement('tr')

      titles.forEach((title) => {
        const header = document.createElement('th')
        header.innerText = title
        header.classList.add(title)
        row.appendChild(header)
      })

      thead.appendChild(row)
    }

    function createTableRow(dataForTable: Stage[]) {
      const row = document.createElement('tr')
      const header = document.createElement('td')
      header.colSpan = 4
      header.innerText = dataForTable[0].section
      header.classList.add('header')
      row.appendChild(header)
      tbody.appendChild(row)

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
        tbody.appendChild(row)
      })
    }

    createTitles(tableHeaders)
    createTableRow(prologueStages)
    createTableRow(northStages)
    createTableRow(southStages)
  } catch (error) {
    console.error(`Problem: ${error}`)
  }
})
