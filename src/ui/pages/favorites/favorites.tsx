import { Box } from "@mui/material";
import { useFavoriteContext } from "contexts/favorite-context/favorite-context";
import { CardList, Layout, SectionHeader } from "ui/components";

export const Favorites = () => {
  const { favoriteList } = useFavoriteContext();
  return (
    <Layout>
      <Box
        component="main"
        sx={{
          maxWidth: "1536px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <SectionHeader title="Meus Favoritos" backToHome noPaddingX />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CardList items={favoriteList} />
        </Box>
      </Box>
    </Layout>
  );
};
