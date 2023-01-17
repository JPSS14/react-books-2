import {Theme, SxProps} from '@mui/material';

export const appStyle: SxProps<Theme> = (theme) => {
  const {rbooks} = theme.palette;
  return {
    background: rbooks.darkGray,
    height: '100vh',
    width: '100%',
  };
};