import { Box } from "@mui/system";
import { CardList, Layout, Search } from "ui/components";
import { useSearchContext } from "contexts/search-context/search-context";

export const Home = () => {
  const { resultSearchBook } = useSearchContext();
  return (
    <Layout>
      <Box>
        <Search />
        <Box>
          {resultSearchBook?.items ?
           <CardList items={resultSearchBook?.items}/>
            : <></>}
        </Box>
      </Box>
    </Layout>
  );
};