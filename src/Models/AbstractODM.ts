import {
  isValidObjectId,
  Model,
  models,
  Schema,
  UpdateQuery,
  model,
} from 'mongoose';
import HttpException from '../Exceptions/HttpException';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  private validateMongoId(_id: string): void {
    if (!isValidObjectId(_id)) throw new HttpException(422, 'Invalid mongo id');
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async getById(_id: string): Promise<T | null> {
    this.validateMongoId(_id);
    return this.model.findOne({ _id });
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    this.validateMongoId(_id);

    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async remove(_id: string): Promise<T | null> {
    this.validateMongoId(_id);

    return this.model.findByIdAndDelete({ _id });
  }
}

export default AbstractODM;