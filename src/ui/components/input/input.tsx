import { TextField, TextFieldProps } from "@mui/material";
import { inputStyle } from "./input.style";

export const Input = (props: TextFieldProps) => {
  return (
    <TextField {...props} sx={inputStyle}></TextField>
  );
};