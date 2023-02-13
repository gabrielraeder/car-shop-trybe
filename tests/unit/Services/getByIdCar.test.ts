import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/Car.service';
import { carOutput1 } from './mocks/car.mocks';

describe('Deveria buscar carro no banco de dados pelo ID', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Tentando buscar com SUCESSO', async function () {
    sinon.stub(Model, 'findOne').resolves(carOutput1);

    const service = new CarService();
    const result = await service.getById('63319d80feb9f483ee823ac5');

    expect(result).to.deep.equal(carOutput1);
  });

  it('Tentando buscar com FALHA => ID invalido', async function () {
    sinon.stub(Model, 'findOne').throws(new Error('Invalid Mongo id'));

    try {
      const service = new CarService();
      await service.getById('xxxxxxxxx');
    } catch (error) {
      expect((error as Error).message).to.equal('Invalid mongo id');
    }
  });

  it('Tentando buscar com FALHA => carro não encontrado', async function () {
    sinon.stub(Model, 'findOne').resolves();

    try {
      const service = new CarService();
      await service.getById('63319d80feb9f483ee823ac5');
    } catch (error) {
      expect((error as Error).message).to.equal('Car not found');
    }
  });
});