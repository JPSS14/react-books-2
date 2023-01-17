import { FC } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme-default';

interface Props {
  children: React.ReactNode;
};

export const RBooksThemeProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};