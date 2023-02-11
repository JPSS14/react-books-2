import { useState, useContext, createContext } from "react";
import { ResponseBooksMapper } from "service/types"

type SearchContextData = {
  resultSearchBook?: ResponseBooksMapper;
  setResultSearchBook: (e: ResponseBooksMapper) => void;
};

export const SearchContext = createContext({} as SearchContextData);

type SearchContextProviderProps = {
  children: React.ReactNode;
};

export const SearchContextProvider = ({children}:SearchContextProviderProps) => {
  const [resultSearchBook, setResultSearchBook] = useState({} as ResponseBooksMapper);

  return (
    <SearchContext.Provider value={{resultSearchBook, setResultSearchBook}}>
      {children}
      </SearchContext.Provider>
  )
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};