import { createContext, useContext, useState } from "react";
import { BookItemResponseMapper } from "service/types";

type FavoriteContextData = {
  favoriteList: BookItemResponseMapper[];
  setFavoriteList: React.Dispatch<
    React.SetStateAction<BookItemResponseMapper[]>
  >;
  handleSaveFavorite: (book: BookItemResponseMapper) => void;
  handleDeleteFavorite: (book: BookItemResponseMapper) => void;
};

export const FavoriteContext = createContext({} as FavoriteContextData);

type FavoriteContextProviderProps = {
  children: React.ReactNode;
};

export const FavoriteContextProvider = ({
  children,
}: FavoriteContextProviderProps) => {
  const [favoriteList, setFavoriteList] = useState<BookItemResponseMapper[]>(
    []
  );

  const handleSaveFavorite = (book: BookItemResponseMapper) => {
    setFavoriteList([...favoriteList, book]);
  };

  const handleDeleteFavorite = (book: BookItemResponseMapper) => {
    const removedFavorite = favoriteList.filter((item) => item.id !== book.id);
    setFavoriteList(removedFavorite);
  };

  console.log(favoriteList);

  return (
    <FavoriteContext.Provider
      value={{
        favoriteList,
        setFavoriteList,
        handleSaveFavorite,
        handleDeleteFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = () => {
  return useContext(FavoriteContext);
};
