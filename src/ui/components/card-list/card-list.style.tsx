import { SxProps, Theme } from '@mui/material';

export const CardListContainerStyle:SxProps<Theme> = (theme) => {
  return {
    width: '100%',
    justifyContent: 'center',
    padding: `${theme.spacing(2)} 0`,
    '& li':{
      listStyle: 'none'
    },
    margin: 0,
  };
};