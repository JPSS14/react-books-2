import { Box } from "@mui/material";
import { CardAmountStyle } from "./CardAmount.style";

interface CardAmountProps {
  price?: string;
  blank?: boolean;
}

export const CardAmount = ({ price, blank }: CardAmountProps) => {
  return (
    <Box sx={CardAmountStyle}>
      {blank ? "" : price ? price : "Indisponível"}
    </Box>
  );
};
