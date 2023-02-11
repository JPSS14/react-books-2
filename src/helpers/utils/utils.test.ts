import { currencyConverter, dateConverter } from "./utils";

describe('dateConverter test', () => {
  test('a correct date test', () => {
    expect(dateConverter('2020-01-14')).toStrictEqual('14/01/2020');
  });
});

describe('currencyConverter test', () => {
  test('a correct currency test', () => {
    const value = 39.9;
    expect(currencyConverter(value))
      .toBe(new Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(value));
  });
});