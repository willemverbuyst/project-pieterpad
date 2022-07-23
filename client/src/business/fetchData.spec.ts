import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { fetchData } from './fetchData'

describe('fetchData', () => {
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

  const server = setupServer(
    rest.get('http://localhost:4000/v1/pieterpad', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(testStages))
    })
  )

  beforeAll(() => server.listen())
  afterAll(() => server.close())
  afterEach(() => server.resetHandlers())

  it('should return an array with stages', async () => {
    const result = await fetchData()

    expect(result).toEqual(testStages)
  })

  it('should handle failure', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    server.use(
      rest.get('http://localhost:4000/v1/pieterpad', (_req, res, ctx) => {
        return res(ctx.status(404))
      })
    )

    const result = await fetchData()
    expect(consoleSpy).toBeCalledWith('Request failed')
    expect(result).toBe(null)
  })
})
