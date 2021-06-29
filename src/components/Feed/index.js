//import homeLists from "../../data/homeLists.json";
import { Box, Typography, Grid } from "@material-ui/core";
import BookCardA from "../../components/BookCardA";
import BookCardB from "../../components/BookCardB";
import { Link as RouterLink } from "react-router-dom";

const Feed = ({ feed }) => {
  return (
    <Box style={{ margin: "16px" }}>
      {feed.map((list, idx) => {
        return (
          <Box key={idx} style={{ marginTop: "16px" }}>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <Typography variant="h2">{list.category}</Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={3} direction="row">
                  {idx % 2 === 0 ? (
                    <>
                      {list.books.map((book, id) => {
                        return (
                          <Grid item key={id}>
                            <RouterLink to={`/home/${book.id}`}>
                              <BookCardA
                                imageUrl={`https://bookflix-dev.s3.ap-southeast-1.amazonaws.com/${book.coverImageUrl}`}
                                genreList={book.genres.slice(0, 2)}
                              />
                            </RouterLink>
                          </Grid>
                        );
                      })}
                    </>
                  ) : (
                    <span></span>
                  )}

                  {idx % 2 !== 0 ? (
                    <>
                      {list.books.map((book, id) => {
                        return (
                          <Grid item key={id}>
                            <RouterLink to={`/home/${book.id}`}>
                              <BookCardB
                                imageUrl={`https://bookflix-dev.s3.ap-southeast-1.amazonaws.com/${book.coverImageUrl}`}
                                review={
                                  book.description &&
                                  book.description.length >= 100
                                    ? `${book.description}`.substr(0, 100) +
                                      " ..."
                                    : !book.description ||
                                      book.description.length <= 5
                                    ? ""
                                    : `${book.description}`
                                }
                              />
                            </RouterLink>
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

export default Feed;
