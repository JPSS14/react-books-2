import { Box } from "@mui/system";
import { CardList, Layout, Search } from "ui/components";
import { useSearchContext } from "contexts/search-context/search-context";
import { defaultBooks } from "constants/default-books";
import { Pagination } from "@mui/material";

export const Home = () => {
  const { page, handleChangePagination, paginatedBooksResult } =
    useSearchContext();

  return (
    <Layout>
      <Box>
        <Search />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {paginatedBooksResult?.length ? (
            <CardList items={paginatedBooksResult} />
          ) : (
            <CardList items={defaultBooks} />
          )}
        </Box>
      </Box>
      {paginatedBooksResult?.length ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Pagination count={5} page={page} onChange={handleChangePagination} />
        </Box>
      ) : (
        ""
      )}
    </Layout>
  );
};
