import { useState, useEffect, useContext, createContext } from "react";
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (resultSearchBook.items) {
      setPaginatedBooksResult(resultSearchBook.items.slice(0, 8));
    }
  }, [resultSearchBook]);

  let totalPage =
    resultSearchBook.items && Math.ceil(resultSearchBook.items.length / 8);

  const handleChangePagination = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    const page = value - 1;
    const start = page * 8;
    const end = start + 8;

    if (resultSearchBook?.items) {
      const paginatedItems = resultSearchBook.items.slice(start, end);

      setPaginatedBooksResult(paginatedItems);
    }

    setPage(value);
    scrollToTop();
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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
