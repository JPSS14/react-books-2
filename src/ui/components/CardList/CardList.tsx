import { Grid } from "@mui/material";
import { BookItemResponseMapper } from "service/types";
import { Card } from "../Card";
import { CardListContainerStyle } from "./CardList.style";

interface CardListProps {
  items: BookItemResponseMapper[];
  defaultBooks?: boolean;
}

export const CardList = ({ items, defaultBooks }: CardListProps) => {
  return (
    <Grid container sx={CardListContainerStyle} component="ul">
      {items.map((item, key) => (
        <Grid key={key} component="li">
          {item.volumeInfo.title ? (
            <Card item={item} key={item.id} defaultBooks={defaultBooks} />
          ) : (
            <Card item={item} key={key} blank />
          )}
        </Grid>
      ))}
    </Grid>
  );
};
