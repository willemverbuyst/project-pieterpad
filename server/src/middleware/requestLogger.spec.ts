import { Request, Response } from 'express'
import { requestLogger } from './requestLogger'
import { logger } from '../config/log'
jest.mock('../config/log')

const mockRequest = () => {
  const req = {} as Request
  req.originalUrl = '/test'
  return req
}

const mockResponse = () => {
  const res = {} as Response
  res.send = jest.fn().mockReturnValueOnce(res)
  res.status = jest.fn().mockReturnValueOnce(res)
  return res
}

const mockNext = () => jest.fn()

describe('requestLogger', () => {
  it('should log message and and call next', () => {
    const mockLogger = logger.info as jest.Mock
    const req = mockRequest()
    const res = mockResponse()
    const next = mockNext()

    requestLogger(req, res, next)

    expect(req.originalUrl).toBe('/test')
    expect(mockLogger).toHaveBeenCalledTimes(1)
    expect(mockLogger).toHaveBeenCalledWith('request on /test')
    expect(next).toHaveBeenCalledTimes(1)
  })
})
