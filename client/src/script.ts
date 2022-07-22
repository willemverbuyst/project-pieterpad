import { DataForTable, getDataForTable } from './business'
import { createTable, createTableHeaders, createTableRows } from './ui'

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
