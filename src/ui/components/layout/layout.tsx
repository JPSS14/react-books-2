import { Box } from '@mui/material';
import { Header } from 'ui/components/header';
import { layoutStyle } from './layout.style';

interface LayoutProps {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box component='div' sx={layoutStyle}>
      <Header />
      {children}
    </Box>
  );
};