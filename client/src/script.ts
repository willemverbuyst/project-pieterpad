import { DataForTable, getDataForTable } from './business'
import {
  createNotification,
  createTable,
  createTableHeaders,
  createTableRows,
} from './ui'

window.addEventListener('load', async () => {
  try {
    const tableData: DataForTable | null = await getDataForTable()

    if (!tableData) {
      createNotification()
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
