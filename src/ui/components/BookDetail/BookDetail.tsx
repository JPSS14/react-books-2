import { Box } from "@mui/material";
import { BookItemResponseMapper } from "service/types";
import { bookDetailStyle } from "./BookDetail.style";
import { BookDetailCTA } from "./BookDetailCTA";
import { Hr } from "ui/components/Hr";
import { BookDetailHeader } from "./BookDetailHeader";
import { BookDetailContent } from "./BookDetailContent";
import { BookDetailFooter } from "./BookDetailFooter";

interface BookDetailProps {
  item: BookItemResponseMapper;
}

export const BookDetail = ({ item }: BookDetailProps) => {
  return (
    <Box sx={bookDetailStyle} component="article">
      <BookDetailCTA
        image={item.volumeInfo.imageLinks?.thumbnail}
        title={item.volumeInfo.title}
        amount={item.saleInfo.listPrice?.amount}
        rating={item.volumeInfo.averageRating}
        ratingsCount={item.volumeInfo.ratingsCount}
        buyLink={item.saleInfo.buyLink}
        readLink={item.volumeInfo.previewLink}
      />
      <Box className="detail__container">
        <Box className="detail__content">
          <Box className="detail__description">
            <BookDetailHeader
              title={item.volumeInfo.title}
              textSnippet={item.searchInfo?.textSnippet}
            />
            <BookDetailContent
              authors={item.volumeInfo.authors}
              publisher={item.volumeInfo.publisher}
              publishedDate={item.volumeInfo.publishedDate}
              description={item.volumeInfo.description}
            />
          </Box>
        </Box>
        <Hr isMargin />
        <BookDetailFooter
          pageCount={item.volumeInfo.pageCount}
          language={item.volumeInfo.language}
          publisher={item.volumeInfo.publisher}
          publishedDate={item.volumeInfo.publishedDate}
          isnb13={item.volumeInfo.industryIdentifiers[0]}
          isnb10={item.volumeInfo.industryIdentifiers[1]}
        />
      </Box>
    </Box>
  );
};
