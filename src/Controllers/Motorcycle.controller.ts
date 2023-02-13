import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/Motorcycle.service';
import AbstractController from './Abstract.controller';

export default class MotorcycleController extends
  AbstractController<IMotorcycle> {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(
      new MotorcycleService(),
      req, 
      res, 
      next,
    );
  }
}
