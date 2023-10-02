import { createContext, useContext, useState } from "react";

type FavoriteContextData = {
  favoriteList: string[];
  setFavoriteList: React.Dispatch<React.SetStateAction<string[]>>;
  handleSaveFavorite: (id: string) => void;
};

export const FavoriteContext = createContext({} as FavoriteContextData);

type FavoriteContextProviderProps = {
  children: React.ReactNode;
};

export const FavoriteContextProvider = ({
  children,
}: FavoriteContextProviderProps) => {
  const [favoriteList, setFavoriteList] = useState<string[]>([]);

  const handleSaveFavorite = (id: string) => {
    setFavoriteList([...favoriteList, id]);
  };

  return (
    <FavoriteContext.Provider
      value={{ favoriteList, setFavoriteList, handleSaveFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = () => {
  return useContext(FavoriteContext);
};
