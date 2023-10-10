import { Box } from "@mui/system";
import { CardList, Layout, Search } from "ui/components";
import { useSearchContext } from "contexts/search-context/search-context";
import { defaultBooks } from "constants/default-books";
import { Pagination } from "@mui/material";
import { useFavoriteContext } from "contexts/favorite-context/favorite-context";

export const Home = () => {
  const { page, handleChangePagination } = useSearchContext();
  const { filedListResult } = useFavoriteContext();

  return (
    <Layout>
      <Box>
        <Search />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {filedListResult?.length ? (
            <CardList items={filedListResult} />
          ) : (
            <CardList items={defaultBooks} />
          )}
        </Box>
      </Box>
      {filedListResult?.length ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Pagination count={5} page={page} onChange={handleChangePagination} />
        </Box>
      ) : (
        ""
      )}
    </Layout>
  );
};
