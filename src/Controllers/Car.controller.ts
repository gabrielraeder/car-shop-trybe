import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/Car.service';
import AbstractController from './Abstract.controller';

export default class CarController extends AbstractController<ICar> {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(
      new CarService(),
      req, 
      res, 
      next,
    );
  }
}
