import { filterStages } from './filterData'

describe('filterStages', () => {
  it('should filter stages by section', () => {
    const testStages = [
      {
        stageNumber: 1,
        from: 'test',
        to: 'test',
        km: 10,
        section: 'SectionOne',
      },
      {
        stageNumber: 2,
        from: 'test',
        to: 'test',
        km: 10,
        section: 'SectionOne',
      },
      {
        stageNumber: 3,
        from: 'test',
        to: 'test',
        km: 10,
        section: 'SectionTwo',
      },
    ]
    const testStagesFiltered = [
      {
        stageNumber: 1,
        from: 'test',
        to: 'test',
        km: 10,
        section: 'SectionOne',
      },
      {
        stageNumber: 2,
        from: 'test',
        to: 'test',
        km: 10,
        section: 'SectionOne',
      },
    ]
    expect(filterStages(testStages, 'SectionOne')).toEqual(testStagesFiltered)
  })
})
