import { fetchData } from './fetchData'
import { filterStages } from './filterData'
import { DataForTable, Stage } from './models'
import { sortStages } from './sortData'

export const getDataForTable = async (): Promise<DataForTable | null> => {
  const stages: Stage[] = await fetchData()
  if (!stages.length) {
    return null
  }

  const sortedStages = sortStages(stages)
  const prologueStages = filterStages(sortedStages, 'Prologue')
  const northStages = filterStages(sortedStages, 'North')
  const southStages = filterStages(sortedStages, 'South')
  const tableHeaders = ['stage', 'from', 'to', 'km']

  return {
    tableHeaders,
    prologueStages,
    northStages,
    southStages,
  }
}
