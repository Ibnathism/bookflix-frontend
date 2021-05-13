import homeLists from "../../data/homeLists.json";
import { Box, Typography, Grid, Container } from "@material-ui/core";
import BookCardA from "../../components/BookCardA";
import BookCardB from "../../components/BookCardB";
const Lists = () => {
  return (
    <Box style={{ margin: "16px" }}>
      {homeLists.map((list, id) => {
        return (
          <Box>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <Typography variant="h2">{list.category}</Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={3} direction="row">
                  {list.type === "A" ? (
                    <>
                      {list.books.map((book, id) => {
                        return (
                          <Grid item>
                            <BookCardA
                              imageUrl={book.imageUrl}
                              genreList={book.genreList}
                            />
                          </Grid>
                        );
                      })}
                    </>
                  ) : (
                    <span></span>
                  )}

                  {list.type === "B" ? (
                    <>
                      {list.books.map((book, id) => {
                        return (
                          <Grid item>
                            <BookCardB
                              imageUrl={book.imageUrl}
                              review={book.review}
                            />
                          </Grid>
                        );
                      })}
                    </>
                  ) : (
                    <span></span>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
};

export default Lists;
