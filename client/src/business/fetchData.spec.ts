import fetchMock from 'jest-fetch-mock'
import { fetchData } from './fetchData'

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
    fetchMock.mockResponse(JSON.stringify({ data: testStages }))
    const result = await fetchData()

    expect(result).toEqual(testStages)
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('http://localhost:4000/v1/pieterpad')
  })

  it('return null when fetch fails', async () => {
    fetchMock.mockReject(new Error())
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    const result = await fetchData()

    expect(result).toEqual(null)
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('http://localhost:4000/v1/pieterpad')
    expect(consoleSpy).toHaveBeenLastCalledWith('error in fetching data')
  })
})
