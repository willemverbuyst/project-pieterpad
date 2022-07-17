import { Request, Response } from 'express'
import { getPieterpadController } from './getPieterpad'
import pieterpadData from '../../../data/pieterpad.json'
jest.mock(
  '../../../data/pieterpad.json',
  () => ({
    foo: 'bar',
  }),
  { virtual: true }
)

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
  it('should return 200 with data, message and status', () => {
    const req = mockRequest()
    const res = mockResponse()
    const next = mockNext()

    getPieterpadController(req, res, next)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.send).toHaveBeenCalledTimes(1)
    expect(res.send).toHaveBeenCalledWith({
      message: 'data for pieterpad',
      data: pieterpadData,
      status: 'succes',
    })
    expect(next).not.toHaveBeenCalled()
  })
})
