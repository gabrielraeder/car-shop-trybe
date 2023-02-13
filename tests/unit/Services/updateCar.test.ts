import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/Car.service';
import { carInput, carOutput1 } from './mocks/car.mocks';

describe('Deveria atualizar carro no banco de dados pelo ID', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Tentando atualizar com SUCESSO', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput1);

    const service = new CarService();
    const result = await service.update('63319d80feb9f483ee823ac5', carInput);

    expect(result).to.deep.equal(carOutput1);
  });

  it('Tentando atualizar com FALHA => ID invalido', async function () {
    sinon.stub(Model, 'findByIdAndUpdate')
      .throws(new Error('Invalid Mongo id'));

    try {
      const service = new CarService();
      await service.update('xxxxxxxxx', carInput);
    } catch (error) {
      expect((error as Error).message).to.equal('Invalid mongo id');
    }
  });

  it('Tentando atualizar com FALHA => carro não encontrado', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves();
    try {
      const service = new CarService();
      await service.update('63319d80feb9f483ee823ac5', carInput);
    } catch (error) {
      expect((error as Error).message).to.equal('Car not found');
    }
  });
});