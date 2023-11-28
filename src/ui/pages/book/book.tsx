import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useSearchContext } from "contexts/search-context/search-context";
import { BookDetail, Layout, Loading, SectionHeader } from "ui/components";
import { getByBookID } from "service/search.service";
import { useParams } from "react-router-dom";

export const Book = () => {
  const { activeBook } = useSearchContext();
  const [localActiveBook, setLocalActiveBook] = useState(activeBook);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (!activeBook && id) {
      setLoading(true);
      getByBookID(id)
        .then((item) => {
          setLocalActiveBook(item);
        })
        .finally(() => setLoading(false));
    }
  }, [id, activeBook]);

  return (
    <Layout>
      <Box component="main">
        <SectionHeader title="Detalhes" backToHome />
        {loading || !localActiveBook ? (
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
            <BookDetail item={localActiveBook} />
          </>
        )}
      </Box>
    </Layout>
  );
};
