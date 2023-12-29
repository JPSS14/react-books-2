import { useMediaQuery } from "@mui/material";
import {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";
import { getSearch } from "service/search.service";
import { BookItemResponseMapper, ResponseBooksMapper } from "service/types";

type SearchContextData = {
  resultSearchBook?: ResponseBooksMapper;
  setResultSearchBook: (e: ResponseBooksMapper) => void;
  page: number;
  totalPage: number;
  paginatedBooksResult?: BookItemResponseMapper[];
  handleChangePagination: (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => void;
  activeBook?: BookItemResponseMapper;
  setActiveBook: (book: BookItemResponseMapper) => void;
  searchBook: (search: string) => void;
  searchedBookTitle: string;
};

export const SearchContext = createContext({} as SearchContextData);

type SearchContextProviderProps = {
  children: React.ReactNode;
};

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [resultSearchBook, setResultSearchBook] = useState(
    {} as ResponseBooksMapper
  );
  const [page, setPage] = useState(1);
  const [paginatedBooksResult, setPaginatedBooksResult] = useState(
    resultSearchBook.items || []
  );
  const [activeBook, setActiveBook] = useState<BookItemResponseMapper>();
  const [searchedBookTitle, setSearchedBookTitle] = useState("");
  const isSmallScreen = useMediaQuery("(max-width:1265px)");

  const itemPerPage = isSmallScreen ? 6 : 8;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  let totalPage =
    resultSearchBook.items &&
    Math.ceil(resultSearchBook.items.length / itemPerPage);

  const lastPagePagination = useCallback(() => {
    setPage(5);
  }, [setPage]);

  useEffect(() => {
    if (resultSearchBook.items?.length) {
      const paginatedItems = resultSearchBook.items.slice(
        (page - 1) * itemPerPage,
        (page - 1) * itemPerPage + itemPerPage
      );
      setPaginatedBooksResult(paginatedItems);
      if (itemPerPage === 8 && totalPage < page) {
        lastPagePagination();
      }
    }
  }, [resultSearchBook, itemPerPage, page, totalPage, lastPagePagination]);

  const handleChangePagination = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    const page = value - 1;
    const start = page * itemPerPage;
    const end = start + itemPerPage;

    if (resultSearchBook?.items) {
      const paginatedItems = resultSearchBook.items.slice(start, end);

      setPaginatedBooksResult(paginatedItems);
    }

    setPage(value);
    scrollToTop();
  };

  const searchBook = (search: string) => {
    setSearchedBookTitle(search);
    if (search) {
      getSearch(search)
        .then((item) => {
          setResultSearchBook(item);
        })
        .then(() => setPage(1));
    }
  };

  return (
    <SearchContext.Provider
      value={{
        resultSearchBook,
        setResultSearchBook,
        page,
        paginatedBooksResult,
        handleChangePagination,
        totalPage,
        activeBook,
        setActiveBook,
        searchBook,
        searchedBookTitle,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
