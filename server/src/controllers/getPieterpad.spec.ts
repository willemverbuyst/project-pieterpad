import { Request, Response } from 'express'
import { getPieterpadController } from './getPieterpad'
import pieterpadData from '../../../data/pieterpad.json'
import { Stage } from '../integration/database/models/stageModel'
jest.mock(
  '../../../data/pieterpad.json',
  () => ({
    foo: 'bar',
  }),
  { virtual: true }
)
jest.mock('../integration/database/models/stageModel')

const mockRequest = () => {
  const req = {} as Request
  return req
}

const mockResponse = () => {
  const res = {} as Response
  res.send = jest.fn().mockReturnValueOnce(res)
  res.status = jest.fn().mockReturnValueOnce(res)
  return res
}

const mockNext = () => jest.fn()

describe('getPieterpadController', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return 200 with data, message and status', async () => {
    const req = mockRequest()
    const res = mockResponse()
    const next = mockNext()
    const StageMock = Stage.find as jest.Mock
    const mockStages = [{ a: 1 }, { b: 1 }]
    StageMock.mockResolvedValueOnce(mockStages)

    await getPieterpadController(req, res, next)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.send).toHaveBeenCalledTimes(1)
    expect(res.send).toHaveBeenCalledWith({
      message: 'data for pieterpad',
      data: mockStages,
      results: 2,
      status: 'succes',
    })
    expect(next).not.toHaveBeenCalled()
  })

  it('should return 500 with message and status', async () => {
    const req = mockRequest()
    const res = mockResponse()
    const next = mockNext()
    const StageMock = Stage.find as jest.Mock
    StageMock.mockRejectedValueOnce(new Error())

    await getPieterpadController(req, res, next)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.send).toHaveBeenCalledTimes(1)
    expect(res.send).toHaveBeenCalledWith({
      message: 'something went wrong',
      status: 'fail',
    })
    expect(next).not.toHaveBeenCalled()
  })
})
