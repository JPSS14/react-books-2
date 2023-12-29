import { Box } from "@mui/material";
import { CardAmountStyle } from "./CardAmount.style";

interface CardAmountProps {
  price?: string;
  blank?: boolean;
  defaultBooks?: boolean;
}

export const CardAmount = ({ price, blank, defaultBooks }: CardAmountProps) => {
  return (
    <Box sx={CardAmountStyle}>
      {blank || defaultBooks ? "" : price ? price : "Indisponível"}
    </Box>
  );
};
