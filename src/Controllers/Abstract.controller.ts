import { NextFunction, Request, Response } from 'express';
import AbstractService from '../Services/Abstract.service';

export default abstract class AbstractController<T> {
  protected req: Request;
  protected res: Response;
  protected next: NextFunction;
  protected service: AbstractService<T>;

  constructor(
    service: AbstractService<T>,
    req: Request, 
    res: Response, 
    next: NextFunction,
  ) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = service;
  }

  public async getAll() {
    try {
      const vehicle = await this.service.getAll();
      return this.res.status(200).json(vehicle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    try {
      const { id } = this.req.params;
      const vehicle = await this.service.getById(id);
      return this.res.status(200).json(vehicle);
    } catch (error) {
      this.next(error);
    }
  }

  public async create() {
    try {
      const newVehicle = await this.service.create(this.req.body);
      return this.res.status(201).json(newVehicle);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    try {
      const updated = await this.service.update(id, this.req.body);
      return this.res.status(200).json(updated);
    } catch (error) {
      this.next(error);
    }
  }

  public async remove() {
    const { id } = this.req.params;
    try {
      await this.service.remove(id);
      return this.res.status(204).json();
    } catch (error) {
      this.next(error);
    }
  }
}
