import { Box } from "@mui/system";
import { Layout } from "ui/components/layout";
import { Search } from "ui/components/search";

export const Home = () => {
  return (
    <Layout>
      <Box>
        <Search/>
      </Box>
    </Layout>
  );
};