import { NextFunction, Request, Response } from 'express';
import HttpException from '../Exceptions/HttpException';

// const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
//   // console.log('err', err);
//   const { status, message } = err as HttpException;
//   res.status(status || 500).json({ message });
// };

class ErrorHandler {
  public static errorMiddleware(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { status, message } = error as HttpException;
    res.status(status || 500).json({ message });
    next();
  }
}

export default ErrorHandler;