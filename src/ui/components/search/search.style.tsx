import { Theme, SxProps } from '@mui/material';

export const searchStyle: SxProps<Theme> = (theme) => {
  return {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',

    'button': {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 700,
      '& svg': {
        fontSize: '1rem',
        margin: `0px ${theme.spacing(0.3)}`
      },
      '&:last-child': {
        borderRadius: '0px 4px 4px 0px',
      },
      '&:first-child': {
        borderRadius: '4px 0px 0px 4px',
      }
    },
    '@media (max-width: 480px)': {
      '& .button_title': {
        display: 'none',
      },
    }
  };
};