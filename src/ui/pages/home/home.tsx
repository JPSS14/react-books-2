import { Box } from "@mui/system";
import { CardList, Layout, Search, SectionHeader } from "ui/components";
import { useSearchContext } from "contexts/search-context/search-context";
import { defaultBooks } from "constants/default-books";
import { Pagination } from "@mui/material";
import { useFavoriteContext } from "contexts/favorite-context/favorite-context";

export const Home = () => {
  const { page, handleChangePagination, totalPage } = useSearchContext();
  const { filedListResult } = useFavoriteContext();

  return (
    <Layout>
      <Box component="main">
        <Search />
        <Box
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          component="section"
        >
          <SectionHeader
            title={
              filedListResult?.length
                ? "Aqui está o que procura!"
                : "Nossas recomendações"
            }
          />
          {filedListResult?.length ? (
            <CardList items={filedListResult} />
          ) : (
            <CardList items={defaultBooks} defaultBooks />
          )}
        </Box>
      </Box>
      {filedListResult?.length ? (
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Pagination
            count={totalPage}
            page={page}
            onChange={handleChangePagination}
          />
        </Box>
      ) : (
        ""
      )}
    </Layout>
  );
};
