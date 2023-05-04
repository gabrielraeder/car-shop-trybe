import IMotorcycle from '../Interfaces/IMotorcycle';
import VehicleODM from './VehicleODM';

export default class MotorcycleODM extends VehicleODM<IMotorcycle> {
  constructor() {
    const schema = {
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    };
    super(schema, 'Motorcycle');
  }
}