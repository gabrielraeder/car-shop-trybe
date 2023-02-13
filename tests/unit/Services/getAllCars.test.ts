import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/Car.service';
import { carOutput1, carOutput2 } from './mocks/car.mocks';

describe('Deveria buscar todos os carros do banco de dados', function () {
  it('Tentando buscar com SUCESSO', async function () {
    sinon.stub(Model, 'find').resolves([carOutput1, carOutput2]);

    const service = new CarService();
    const result = await service.getAll();

    expect(result).to.deep.equal([carOutput1, carOutput2]);

    sinon.restore();
  });
});