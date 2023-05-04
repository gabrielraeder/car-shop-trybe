import ICar from '../Interfaces/ICar';
import VehicleODM from './VehicleODM';

export default class CarODM extends VehicleODM<ICar> {
  constructor() {
    const schema = {
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    };
    super(schema, 'Car');
  }
}