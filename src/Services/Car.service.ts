import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import VehicleTypes from '../Utils/VehicleTypes';
import AbstractService from './Abstract.service';

export default class CarService extends AbstractService<ICar> {
  constructor() {
    super(new CarODM(), VehicleTypes.CAR);
  }
}