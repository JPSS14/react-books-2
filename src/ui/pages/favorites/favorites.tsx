import { Box } from "@mui/material";
import { useFavoriteContext } from "contexts/favorite-context/favorite-context";
import { CardList, Layout, SectionHeader } from "ui/components";

export const Favorites = () => {
  const { favoriteList } = useFavoriteContext();
  return (
    <Layout>
      <Box component="main">
        <SectionHeader title="Meus Favoritos" backToHome />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CardList items={favoriteList} />
        </Box>
      </Box>
    </Layout>
  );
};
