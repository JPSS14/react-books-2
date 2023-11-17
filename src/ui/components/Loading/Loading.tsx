import { CircularProgress } from "@mui/material";
import { loadingStyle } from "./Loading.style";

export const Loading = () => {
  return <CircularProgress sx={loadingStyle} />;
};
