import axios from 'axios';
import { responseBookMapper } from './search.mapper';
import { ResponseBooks } from './types';

export const getSearch = (book: string): Promise<ResponseBooks> => {
  return axios.get<ResponseBooks>(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=40`)
    .then(result => responseBookMapper(result.data)).catch();
};