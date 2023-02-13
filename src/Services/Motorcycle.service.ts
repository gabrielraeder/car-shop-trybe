import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import VehicleTypes from '../Utils/VehicleTypes';
import AbstractService from './Abstract.service';

export default class MotorcycleService extends AbstractService<IMotorcycle> {
  constructor() {
    super(new MotorcycleODM(), VehicleTypes.MOTO);
  }
}