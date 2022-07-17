import { Request, Response } from 'express';
import { getInfoController } from './getInfo';

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

describe('getInfoController', () => {
  it('should return 200 with message', () => {
    const req = mockRequest();
    const res = mockResponse();
    const next = mockNext();

    getInfoController(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith({ message: 'hello from the server' });
    expect(req).not.toHaveBeenCalled();
  });
});
