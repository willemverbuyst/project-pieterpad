import { DataForTable } from './business/models'
import { getDataForTable } from './business/tableData'
import { createTable } from './ui/table'
import { createTableHeaders } from './ui/tableHeaders'
import { createTableRows } from './ui/tableRow'

window.addEventListener('load', async () => {
  try {
    const tableData: DataForTable | null = await getDataForTable()

    if (!tableData) {
      return
    }

    const { tableHeaders, prologueStages, northStages, southStages } = tableData

    createTable()
    createTableHeaders(tableHeaders)
    createTableRows(prologueStages)
    createTableRows(northStages)
    createTableRows(southStages)
  } catch (error) {
    console.error(`Problem: ${error}`)
  }
})
