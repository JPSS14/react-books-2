import { TextField, TextFieldProps } from "@mui/material";
import { inputStyle } from "./Input.style";

export const Input = (props: TextFieldProps) => {
  return <TextField {...props} sx={inputStyle}></TextField>;
};
