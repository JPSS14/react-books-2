import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useSearchContext } from "contexts/search-context/search-context";
import {
  BookDetail,
  Layout,
  Loading,
  RelatedBooks,
  SectionHeader,
} from "ui/components";
import { getByAuthor, getByBookID } from "service/search.service";
import { useParams } from "react-router-dom";
import { ResponseBooksMapper } from "service/types";

export const Book = () => {
  const { activeBook, setActiveBook } = useSearchContext();
  const [activeBookLoading, setActiveBookLoading] = useState(false);
  const [relatedBooksLoading, setRelatedBooksLoading] = useState(false);
  const [author, setAuthor] = useState({} as ResponseBooksMapper);

  const { id } = useParams();

  useEffect(() => {
    if (!activeBook && id) {
      setActiveBookLoading(true);
      getByBookID(id)
        .then((item) => {
          setActiveBook(item);
        })
        .finally(() => setActiveBookLoading(false));
    }
  }, [id, activeBook, setActiveBook]);

  useEffect(() => {
    if (activeBook) {
      setRelatedBooksLoading(true);
      getByAuthor(activeBook?.volumeInfo.authors.split(",")[0])
        .then((result) => setAuthor(result))
        .finally(() => setRelatedBooksLoading(false));
    }
  }, [activeBook]);

  return (
    <Layout>
      <Box component="main">
        <SectionHeader title="Detalhes" backToHome />
        {activeBookLoading || !activeBook ? (
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loading />
          </Box>
        ) : (
          <>
            <BookDetail item={activeBook} />
          </>
        )}
        {author.items && !relatedBooksLoading ? (
          <RelatedBooks items={author} />
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Loading />
          </Box>
        )}
      </Box>
    </Layout>
  );
};
