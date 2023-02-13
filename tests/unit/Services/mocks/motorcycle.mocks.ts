import Motorcycle from '../../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';

export const motoInput: IMotorcycle = {
  model: 'BIS',
  year: 2020,
  color: 'Black',
  status: true,
  buyValue: 5000,
  category: 'Street',
  engineCapacity: 100,
};

export const motoOutput: Motorcycle = new Motorcycle({
  ...motoInput, id: '63319d80feb9f483ee823ac5',
});