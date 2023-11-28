import { getSearch } from './search.service';
import { responseBookMock } from './responseBook.mock';

const mockGet = jest.fn();

jest.mock('./search.service', () => ({
  getSearch: () => mockGet(),
}));

describe('A getSearch test', () => {
  
  test('A correct test', async () => {
    mockGet.mockReturnValue({responseBookMock});
    expect(getSearch('Tolkien')).toStrictEqual({responseBookMock});
  });
});