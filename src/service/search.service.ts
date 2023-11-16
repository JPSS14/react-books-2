import axios from "axios";
import { responseBookMapper, responseBooksMapper } from "./search.mapper";
import {
  BookItemResponse,
  BookItemResponseMapper,
  ResponseBooks,
  ResponseBooksMapper,
} from "./types";

export const getSearch = (book: string): Promise<ResponseBooksMapper> => {
  return axios
    .get<ResponseBooks>(
      `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=40`
    )
    .then((result) => responseBooksMapper(result.data))
    .catch();
};

export const getByBookID = (
  bookID: string
): Promise<BookItemResponseMapper> => {
  return axios
    .get<BookItemResponse>(
      `https://www.googleapis.com/books/v1/volumes/${bookID}`
    )
    .then((result) => responseBookMapper(result.data))
    .catch();
};
