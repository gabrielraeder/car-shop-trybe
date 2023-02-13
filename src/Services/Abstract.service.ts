// import Car from '../Domains/Car';
// import Motorcycle from '../Domains/Motorcycle';
import Vehicle from '../Domains/Vehicle';
import HttpException from '../Exceptions/HttpException';
// import ICar from '../Interfaces/ICar';
// import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from '../Models/AbstractODM';
import VehicleFactory from '../Domains/VehicleFactory';

export default abstract class AbstractService<T> {
  protected odm: AbstractODM<T>;
  private type: string;

  constructor(odm: AbstractODM<T>, type: string) {
    this.odm = odm;
    this.type = type;
  }

  public async getAll(): Promise<(Vehicle | null)[]> {
    const all = await this.odm.getAll();
    return all.map((v) => VehicleFactory.createDomain<T>(this.type, v));
  }

  public async create(vehicle: T): Promise<Vehicle | null> {
    const domain = VehicleFactory.createDomain<T>(this.type, vehicle);
    const created = await this.odm.create(domain as unknown as T);
    return VehicleFactory.createDomain<T>(this.type, created);
  }

  public async getById(id: string): Promise<Vehicle | null> {
    const car = await this.odm.getById(id);
    if (!car) throw new HttpException(404, `${this.type} not found`);
    return VehicleFactory.createDomain<T>(this.type, car);
  }

  public async update(id: string, vehicle: T): Promise<Vehicle | null> {
    const updated = await this.odm.update(id, vehicle);
    if (!updated) throw new HttpException(404, `${this.type} not found`);
    return VehicleFactory.createDomain<T>(this.type, updated);
  }

  public async remove(id: string): Promise<Vehicle | null> {
    const removed = await this.odm.remove(id);
    if (!removed) throw new HttpException(404, `${this.type} not found`);
    return VehicleFactory.createDomain<T>(this.type, removed);
  }
}