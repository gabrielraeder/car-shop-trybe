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

// private mountMotoObj(): IMotorcycle {
//   const moto: IMotorcycle = {
//     model: this.req.body.model,
//     year: this.req.body.year,
//     color: this.req.body.color,
//     status: this.req.body.status,
//     buyValue: this.req.body.buyValue,
//     category: this.req.body.category,
//     engineCapacity: this.req.body.engineCapacity,
//   };
//   return moto;
// }