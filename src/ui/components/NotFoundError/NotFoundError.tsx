import { Box, Typography } from "@mui/material";
import soloImg from "ui/assets/han-solo.jpg";
import { notFoundErrorStyle } from "./NotFoundError.style";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export const NotFoundError = () => {
  const history = useNavigate();

  const handleBackToHome = () => {
    history("/react-books-2");
  };
  return (
    <Box component="article" sx={notFoundErrorStyle}>
      <Typography component="h1">Ops... veja bem...</Typography>
      <Box className="image__container">
        <img src={soloImg} alt="Han Solo" title="Han Solo" />
      </Box>
      <Typography component="p">
        Éhh... bom... não achamos seu livro, mas não fique assim, vou
        encontra-lo pra você... em algum momento.
      </Typography>
      <Button onClick={() => handleBackToHome()}>Voltar</Button>
    </Box>
  );
};
