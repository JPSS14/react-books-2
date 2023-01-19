import { Theme, SxProps } from '@mui/material';

export const inputStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    background: theme.palette.common.white,
    '.MuiInputBase-root': {
      color: rbooks.primaryColor,
      borderRadius: '0px',
      '&:hover':{
        border: 'none'
      }
    },
  };
};