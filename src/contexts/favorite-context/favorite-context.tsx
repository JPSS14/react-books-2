import { useSearchContext } from "contexts/search-context/search-context";
import { createContext, useContext, useState, useEffect } from "react";
import { BookItemResponseMapper } from "service/types";
import { blankBook } from "constants/blank-book";

type FavoriteContextData = {
  favoriteList: BookItemResponseMapper[];
  setFavoriteList: React.Dispatch<
    React.SetStateAction<BookItemResponseMapper[]>
  >;
  handleSaveFavorite: (book: BookItemResponseMapper) => void;
  handleDeleteFavorite: (book: BookItemResponseMapper) => void;
  filedListResult: BookItemResponseMapper[];
};

export const FavoriteContext = createContext({} as FavoriteContextData);

type FavoriteContextProviderProps = {
  children: React.ReactNode;
};

export const FavoriteContextProvider = ({
  children,
}: FavoriteContextProviderProps) => {
  const { paginatedBooksResult } = useSearchContext();
  const [filedListResult, setFiledListResult] = useState<
    BookItemResponseMapper[]
  >([]);
  const [favoriteList, setFavoriteList] = useState<BookItemResponseMapper[]>([
    blankBook,
    blankBook,
    blankBook,
    blankBook,
    blankBook,
    blankBook,
    blankBook,
    blankBook,
  ]);

  const handleSaveFavorite = (book: BookItemResponseMapper) => {
    setFavoriteList([book, ...favoriteList]);
    if (favoriteList[favoriteList.length - 1].volumeInfo.title === "") {
      setFavoriteList((prev) => prev.slice(0, -1));
    }
  };

  const handleDeleteFavorite = (book: BookItemResponseMapper) => {
    const removedFavorite = favoriteList.filter((item) => item.id !== book.id);
    removedFavorite.push(blankBook);
    setFavoriteList(removedFavorite);
  };

  useEffect(() => {
    if (paginatedBooksResult?.length) {
      if (favoriteList.length) {
        const result = paginatedBooksResult?.map((item) => {
          const favoriteItem = favoriteList.find((fav) => fav.id === item.id);
          return {
            ...item,
            favorite: favoriteItem ? true : false,
          };
        });
        setFiledListResult(result);
      } else {
        setFiledListResult(paginatedBooksResult);
      }
    }
  }, [favoriteList, paginatedBooksResult]);

  return (
    <FavoriteContext.Provider
      value={{
        favoriteList,
        setFavoriteList,
        handleSaveFavorite,
        handleDeleteFavorite,
        filedListResult,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = () => {
  return useContext(FavoriteContext);
};
