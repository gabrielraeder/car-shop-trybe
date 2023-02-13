import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/Car.service';
import { carInput, carOutput1 } from './mocks/car.mocks';

describe('Deveria registrar um carro no banco de dados', function () {
  it('Tentando registrar com SUCESSO', async function () {
    sinon.stub(Model, 'create').resolves(carOutput1);

    const service = new CarService();
    const result = await service.create(carInput);

    expect(result).to.deep.equal(carOutput1);

    sinon.restore();
  });
});