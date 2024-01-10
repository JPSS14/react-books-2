import { Divider } from "@mui/material";
import { hrStyle } from "./Hr.style";

interface hrProps {
  isMargin?: boolean;
}

export const Hr = ({ isMargin }: hrProps) => {
  return <Divider sx={hrStyle(isMargin)} data-testid="Hr" />;
};
