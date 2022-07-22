import { sortStages } from './sortData'

describe('sortStage', () => {
  it('should sort stages by stageNumbers incrementing', () => {
    const testStages = [
      {
        stageNumber: 3,
        from: 'test',
        to: 'test',
        km: 10,
        section: 'test',
      },
      {
        stageNumber: 1,
        from: 'test',
        to: 'test',
        km: 10,
        section: 'test',
      },
      {
        stageNumber: 2,
        from: 'test',
        to: 'test',
        km: 10,
        section: 'test',
      },
    ]
    const testStagesSorted = [
      {
        stageNumber: 1,
        from: 'test',
        to: 'test',
        km: 10,
        section: 'test',
      },
      {
        stageNumber: 2,
        from: 'test',
        to: 'test',
        km: 10,
        section: 'test',
      },
      {
        stageNumber: 3,
        from: 'test',
        to: 'test',
        km: 10,
        section: 'test',
      },
    ]
    expect(sortStages(testStages)).toHaveLength(testStages.length)
    expect(sortStages(testStages)).toEqual(testStagesSorted)
  })
})
