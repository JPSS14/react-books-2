import { useState, useContext, createContext } from "react";
import { ResponseBooks } from "service/types"

type SearchContextData = {
  resultSearchBook?: ResponseBooks;
  setResultSearchBook: (e: ResponseBooks) => void;
};

export const SearchContext = createContext({} as SearchContextData);

type SearchContextProviderProps = {
  children: React.ReactNode;
};

export const SearchContextProvider = ({children}:SearchContextProviderProps) => {
  const [resultSearchBook, setResultSearchBook] = useState({} as ResponseBooks);

  return (
    <SearchContext.Provider value={{resultSearchBook, setResultSearchBook}}>
      {children}
      </SearchContext.Provider>
  )
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};