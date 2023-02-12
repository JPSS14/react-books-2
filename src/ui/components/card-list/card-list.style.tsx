import { SxProps, Theme } from '@mui/material';

export const CardListContainerStyle:SxProps<Theme> = (theme) => {
  return {
    justifyContent: 'center',
    padding: `${theme.spacing(2)} 0`,
  };
};