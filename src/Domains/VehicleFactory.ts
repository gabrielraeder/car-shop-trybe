import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';
import VehicleTypes from '../Utils/VehicleTypes';
import Car from './Car';
import Motorcycle from './Motorcycle';

export default class VehicleFactory {
  public static createDomain<T>(type: string, vehicle: T) {
    switch (type) {
      case VehicleTypes.CAR:
        return new Car(vehicle as unknown as ICar);
      case VehicleTypes.MOTO:
        return new Motorcycle(vehicle as unknown as IMotorcycle);
      default:
        throw new Error('Invalid vehicle type!');
    }
  }
}