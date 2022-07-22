export interface Stage {
  stageNumber: number
  from: string
  to: string
  km: number
  section: string
}

export interface DataForTable {
  tableHeaders: string[]
  prologueStages: Stage[]
  northStages: Stage[]
  southStages: Stage[]
}
