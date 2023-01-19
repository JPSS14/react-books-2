import { Box } from "@mui/system";
import { Layout } from "../components/layout";
import { Search } from "../components/search";

export const Home = () => {
  return (
    <Layout>
      <Box>
        <Search/>
      </Box>
    </Layout>
  );
};