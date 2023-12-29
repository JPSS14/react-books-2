import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useSearchContext } from "contexts/search-context/search-context";
import {
  BookDetail,
  Layout,
  Loading,
  NotFoundError,
  RelatedBooks,
  SectionHeader,
} from "ui/components";
import { getByAuthor, getByBookID } from "service/search.service";
import { useParams } from "react-router-dom";
import { ResponseBooksMapper } from "service/types";
import { removeRepeatedBook } from "helpers/utils/utils";

export const Book = () => {
  const { activeBook, setActiveBook } = useSearchContext();
  const [activeBookLoading, setActiveBookLoading] = useState(false);
  const [relatedBooksLoading, setRelatedBooksLoading] = useState(false);
  const [author, setAuthor] = useState({} as ResponseBooksMapper);
  const [notFoundBook, setNotFoundBook] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    if (!activeBook && id) {
      setActiveBookLoading(true);
      getByBookID(id)
        .then((item) => {
          setActiveBook(item);
        })
        .catch(() => setNotFoundBook(true))
        .finally(() => setActiveBookLoading(false));
    }
  }, [id, activeBook, setActiveBook]);

  useEffect(() => {
    if (activeBook) {
      setRelatedBooksLoading(true);
      getByAuthor(activeBook?.volumeInfo.authors.split(",")[0])
        .then((result) => setAuthor(removeRepeatedBook(activeBook.id, result)))
        .finally(() => setRelatedBooksLoading(false));
    }
  }, [activeBook]);

  return (
    <Layout>
      <Box
        component="main"
        sx={{
          display: "flex",
          justifyContent: activeBook ? "center" : "",
          flexDirection: activeBook ? "column" : "row",
          overflow: "hidden",
          width: activeBook ? "auto" : "1536px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <SectionHeader title="Detalhes" backToHome />
          {notFoundBook ? (
            <NotFoundError />
          ) : activeBookLoading || !activeBook ? (
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
          ) : notFoundBook ? (
            <></>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Loading />
            </Box>
          )}
        </Box>
      </Box>
    </Layout>
  );
};
