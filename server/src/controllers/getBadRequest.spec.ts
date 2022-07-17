import { Request, Response } from 'express';
import { getBadRequestController } from './getBadRequest';

const mockRequest = () => {
  const req = {} as Request;
  return req;
};

const mockResponse = () => {
  const res = {} as Response;
  res.send = jest.fn().mockReturnValueOnce(res);
  res.status = jest.fn().mockReturnValueOnce(res);
  return res;
};

const mockNext = () => jest.fn();

describe('getBadRequestController', () => {
  it('should return 404 with message', () => {
    const req = mockRequest();
    const res = mockResponse();
    const next = mockNext();

    getBadRequestController(req, res, next);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith({
      message: 'Oops 404, page not found',
    });
    expect(next).not.toHaveBeenCalled();
  });
});
