import MotoCategory from '../Utils/MotoCategories';
import IVehicle from './IVehicle';

export default interface IMotorcycle extends IVehicle {
  category: MotoCategory,
  engineCapacity: number,
}