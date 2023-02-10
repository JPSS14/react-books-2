import { Theme, SxProps } from '@mui/material';

export const CardContainerStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    width: '300px',
    height: '450px',
    border: `3px solid ${rbooks.primaryColor}`,
    borderRadius: '10px',
    margin: theme.spacing(1),
    position: 'relative',
    background: theme.palette.common.black,
  };
};

export const CardTitleStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    background: theme.palette.common.black,
    color: theme.palette.common.white,
    height: '40px',
    borderRadius: '10px 10px 0px 0px',
    borderBottom: `1px solid ${rbooks.primaryColor}`,
    padding: '10px',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    '& h2': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }
  };
};

export const CardImgContainerStyle: SxProps<Theme> = (theme) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '250px',
    padding: theme.spacing(1),
    '& img': {
      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
    }
  };
};

export const CardContentStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    background: rbooks.darkGray,
    height: 'calc(100% - 80px)'
  }
};

export const CardAmountStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    color: rbooks.primaryColor,
    fontSize: '1.3rem',
    textAlign: 'center',
    fontWeight: 700
  };
};

export const CardCTAStyle: SxProps<Theme> = (theme) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    '& button': {
      margin: '10px auto'
    },
    '& .favorite__container': {
      width: '100%',
      '& svg': {
        color: 'yellow'
      }
    }
  };
};

export const CardFooterStyle: SxProps<Theme> = (theme) => {
  const { rbooks } = theme.palette;
  return {
    background: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: theme.spacing(1),
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    borderRadius: '0 0 10px 10px',
    borderTop: `1px solid ${rbooks.primaryColor}`
  };
};