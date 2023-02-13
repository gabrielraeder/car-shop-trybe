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

// private mountCarObj(): ICar {
//   const car: ICar = {
//     model: this.req.body.model,
//     year: this.req.body.year,
//     color: this.req.body.color,
//     status: this.req.body.status,
//     buyValue: this.req.body.buyValue,
//     doorsQty: this.req.body.doorsQty,
//     seatsQty: this.req.body.seatsQty,
//   };
//   return car;
// }