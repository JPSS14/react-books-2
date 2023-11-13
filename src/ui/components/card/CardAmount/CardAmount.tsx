import { Box } from "@mui/material";
import { CardAmountStyle } from "./CardAmount.style";

interface CardAmountProps {
  price?: string;
}

export const CardAmount = ({ price }: CardAmountProps) => {
  return <Box sx={CardAmountStyle}>{price ? price : "Indisponível"}</Box>;
};
