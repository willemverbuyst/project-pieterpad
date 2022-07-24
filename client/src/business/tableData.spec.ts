import { fetchData } from './fetchData'
import { filterStages } from './filterData'
import { sortStages } from './sortData'
import { getDataForTable } from './tableData'
jest.mock('./fetchData')
jest.mock('./filterData')
jest.mock('./sortData')

describe('getDataForTable', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should return null when there are no stages', async () => {
    const fetchDataMock = fetchData as jest.Mock
    fetchDataMock.mockResolvedValueOnce(null)

    const result = await getDataForTable()

    expect(fetchDataMock).toBeCalledTimes(1)
    expect(result).toBe(null)
  })

  it('should return null when there is an empty array', async () => {
    const fetchDataMock = fetchData as jest.Mock
    fetchDataMock.mockResolvedValueOnce([])

    const result = await getDataForTable()

    expect(fetchDataMock).toBeCalledTimes(1)
    expect(result).toBe(null)
  })

  it('should return an object with filtered and sorted data', async () => {
    const testStages = [
      {
        stageNumber: 2,
        from: 'test',
        to: 'test',
        km: 10,
        section: 'test',
      },
    ]

    const fetchDataMock = fetchData as jest.Mock
    fetchDataMock.mockResolvedValueOnce(testStages)

    const sortStagesMock = sortStages as jest.Mock
    const filterStagesMock = filterStages as jest.Mock

    sortStagesMock.mockReturnValueOnce(testStages)
    filterStagesMock.mockImplementation(() => testStages)

    const mockDataForTable = {
      tableHeaders: ['stage', 'from', 'to', 'km'],
      prologueStages: testStages,
      northStages: testStages,
      southStages: testStages,
    }

    const result = await getDataForTable()

    expect(fetchDataMock).toHaveBeenCalledTimes(1)
    expect(sortStagesMock).toHaveBeenCalledTimes(1)
    expect(sortStagesMock).toHaveBeenCalledWith(testStages)
    expect(filterStagesMock).toHaveBeenCalledTimes(3)
    expect(filterStagesMock.mock.calls).toEqual([
      [testStages, 'Prologue'],
      [testStages, 'North'],
      [testStages, 'South'],
    ])
    expect(result).toEqual(mockDataForTable)
  })
})
