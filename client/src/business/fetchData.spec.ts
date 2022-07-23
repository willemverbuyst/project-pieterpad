import axios from 'axios'
import { fetchData } from './fetchData'
jest.mock('axios')

describe('fetchData', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

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
      section: 'SectionTwo',
    },
  ]

  it('should return an array with stages', async () => {
    const axiosMock = axios.get as jest.Mock
    axiosMock.mockResolvedValueOnce({ data: testStages })
    const result = await fetchData()

    expect(result).toEqual(testStages)
    expect(axiosMock).toHaveBeenCalledTimes(1)
    expect(axiosMock).toHaveBeenCalledWith('http://localhost:4000/v1/pieterpad')
  })

  it('should return null when fetch fails', async () => {
    const axiosMock = axios.get as jest.Mock
    axiosMock.mockRejectedValueOnce(new Error())
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    const result = await fetchData()

    expect(result).toEqual(null)
    expect(axiosMock).toHaveBeenCalledTimes(1)
    expect(axiosMock).toHaveBeenCalledWith('http://localhost:4000/v1/pieterpad')
    expect(consoleSpy).toHaveBeenLastCalledWith('fetching data failed: {}')
  })

  it('should return null when fetch fails', async () => {
    const axiosMock = axios.get as jest.Mock
    axiosMock.mockRejectedValue('test')
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    const result = await fetchData()

    expect(result).toEqual(null)
    expect(axiosMock).toHaveBeenCalledTimes(1)
    expect(axiosMock).toHaveBeenCalledWith('http://localhost:4000/v1/pieterpad')
    expect(consoleSpy).toHaveBeenLastCalledWith('fetching data failed: "test"')
  })
})
