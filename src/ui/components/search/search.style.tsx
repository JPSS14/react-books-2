import { Theme, SxProps } from '@mui/material';

export const searchStyle: SxProps<Theme> = () => {
  return {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',

    'button':{
      '&:last-child':{
        borderRadius: '0px 4px 4px 0px',
      },
      '&:first-child':{
        borderRadius: '4px 0px 0px 4px',
      }
    }
  };
};