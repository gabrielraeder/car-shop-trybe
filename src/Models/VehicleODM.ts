import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IVehicle from '../Interfaces/IVehicle';

interface IProps {
  doorsQty: object,
  seatsQty: object,
  category: object,
  engineCapacity: object,
}

export default abstract class VehicleODM<T> extends AbstractODM<T> {
  constructor(props: Partial<IProps>, modelName: string) {
    const schema = new Schema<IVehicle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      ...props,
    });
    super(schema, modelName);
  }
}