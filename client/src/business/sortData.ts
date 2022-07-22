import { Stage } from './models'

export const sortStages = (stages: Stage[]): Stage[] =>
  stages.sort((a, b) => a.stageNumber - b.stageNumber)
