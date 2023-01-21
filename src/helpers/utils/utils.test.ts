import { dateConverter } from "./utils";

describe('dateConverter test', () => {
  test('a correct date test', () => {
    expect(dateConverter('2020-01-14')).toStrictEqual('14/01/2020');
  });
});