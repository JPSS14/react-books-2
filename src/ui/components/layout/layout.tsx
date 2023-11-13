import { Box } from "@mui/material";
import { Header } from "ui/components/Header";
import { Footer } from "../Footer";
import { layoutStyle } from "./Layout.style";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box component="div" sx={layoutStyle}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
