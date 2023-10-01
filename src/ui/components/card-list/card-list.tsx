import { Grid } from "@mui/material";
import { BookItemResponseMapper } from "service/types";
import { Card } from "../card";
import { CardListContainerStyle } from "./card-list.style";

interface CardListProps {
  items: BookItemResponseMapper[];
}

export const CardList = ({ items }: CardListProps) => {
  return (
    <Grid container sx={CardListContainerStyle} component="ul">
      {items.map((item, key) => (
        <Grid key={key} component="li">
          <Card item={item} key={item.id} />
        </Grid>
      ))}
    </Grid>
  );
};
