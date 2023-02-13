import Car from '../../../../src/Domains/Car';
import ICar from '../../../../src/Interfaces/ICar';

export const carInput: ICar = {
  model: 'HB20',
  year: 2020,
  color: 'White',
  status: true,
  buyValue: 55990,
  doorsQty: 4,
  seatsQty: 5,
};

export const carOutput1: Car = new Car({
  ...carInput, id: '63319d80feb9f483ee823ac5',
});

export const carOutput2: Car = new Car({
  model: 'Marea',
  year: 2002,
  color: 'blue',
  status: true,
  buyValue: 1599,
  doorsQty: 4,
  seatsQty: 5,
  id: '63e6dd9cd25431e3c97f9653',
});