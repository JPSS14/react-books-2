import { Theme, SxProps } from '@mui/material';

export const headerContainerStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    width: '100%',
    padding: `${theme.spacing(0.5)} 0`,
    background: theme.palette.common.black,
    borderBottom: `3px solid ${rbooks.primaryColor}`,
    marginBottom: theme.spacing(4),

    '& h1':{
      color: theme.palette.common.white,
      fontSize: '1.7rem',
      fontWeight: 700,
      textAlign: 'center',

      '& span':{
        color: rbooks.primaryColor,
      }
    },
  };
};