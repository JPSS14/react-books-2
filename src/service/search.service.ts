import axios from 'axios';
import { responseBookMapper } from './search.mapper';
import { ResponseBooks, ResponseBooksMapper } from './types';

export const getSearch = (book: string): Promise<ResponseBooksMapper> => {
  return axios.get<ResponseBooks>(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=40`)
    .then(result => responseBookMapper(result.data)).catch();
};