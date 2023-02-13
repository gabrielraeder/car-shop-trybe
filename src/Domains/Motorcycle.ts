import IMotorcycle from '../Interfaces/IMotorcycle';
import MotoCategory from '../Utils/MotoCategories';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: MotoCategory;
  private engineCapacity: number;

  constructor({
    model,
    year,
    color,
    status,
    buyValue,
    category,
    engineCapacity,
    id,
  }: IMotorcycle) {
    super({ model, year, color, status, buyValue, id });
    this.engineCapacity = engineCapacity;
    this.category = category;
  }

  public setCategory(category: MotoCategory) {
    this.category = category;
  }
  public getCategory() { return this.category; }

  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }
  public getEngineCapacity() { return this.engineCapacity; }
}