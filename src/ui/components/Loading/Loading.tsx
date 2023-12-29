import { CircularProgress } from "@mui/material";
import { loadingStyle } from "./Loading.style";

interface LoadingProps {
  isSmall?: boolean;
  white?: boolean;
}

export const Loading = ({ isSmall, white }: LoadingProps) => {
  return (
    <CircularProgress
      sx={loadingStyle(isSmall, white)}
      data-testid="loading-component"
      size={isSmall ? "1rem" : "3rem"}
    />
  );
};
