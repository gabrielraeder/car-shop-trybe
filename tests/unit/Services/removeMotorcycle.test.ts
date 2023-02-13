import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotoService from '../../../src/Services/Motorcycle.service';
import { motoOutput } from './mocks/motorcycle.mocks';

describe('Deveria remover moto do banco de dados', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Tentando remover com SUCESSO', async function () {
    sinon.stub(Model, 'findByIdAndDelete').resolves(motoOutput);

    const service = new MotoService();
    const result = await service.remove('63319d80feb9f483ee823ac5');

    expect(result).to.deep.equal(motoOutput);
  });

  it('Tentando remover com FALHA => ID invalido', async function () {
    sinon.stub(Model, 'findByIdAndDelete')
      .throws(new Error('Invalid Mongo id'));

    try {
      const service = new MotoService();
      await service.remove('xxxxxxxxx');
    } catch (error) {
      expect((error as Error).message).to.equal('Invalid mongo id');
    }
  });

  it('Tentando remover com FALHA => carro não encontrado', async function () {
    sinon.stub(Model, 'findByIdAndDelete').resolves();
    try {
      const service = new MotoService();
      await service.remove('63319d80feb9f483ee823ac5');
    } catch (error) {
      expect((error as Error).message).to.equal('Motorcycle not found');
    }
  });
});