import { Box } from "@mui/system";
import { CardList, Layout, Search } from "ui/components";
import { useSearchContext } from "contexts/search-context/search-context";
import { defaultBooks } from "constants/default-books";

export const Home = () => {
  const { resultSearchBook } = useSearchContext();
  return (
    <Layout>
      <Box>
        <Search />
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          {resultSearchBook?.items ?
           <CardList items={resultSearchBook?.items}/>
            : <CardList items={defaultBooks}/>}
        </Box>
      </Box>
    </Layout>
  );
};