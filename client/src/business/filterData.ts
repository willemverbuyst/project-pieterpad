import { Stage } from './models'

export const filterStages = (stages: Stage[], section: string): Stage[] =>
  stages.filter((data) => data.section === section)
