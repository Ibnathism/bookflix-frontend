import { Box, Typography, Grid } from "@material-ui/core";
import BookCardA from "../../components/BookCardA";
import BookCardB from "../../components/BookCardB";
import { Link as RouterLink } from "react-router-dom";
//import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   hs: {
//     display: "grid",
//     gridTemplateColumns: "10px",
//     gridAutoFlow: "column",
//     gridAutoColumns: "calc(50%-20*2)",
//     overflowX: "scroll",
//     scrollSnapType: "x proximity",
//     "&::before": {
//       content: "",
//       width: "10px",
//     },
//     "&::after": {
//       content: "",
//       width: "10px",
//     },
//   },
// }));

const Feed = ({ feed }) => {
  const newFeed = [...feed];
  //const classes = useStyles();
  return (
    <Box style={{ margin: "16px" }}>
      {newFeed.slice(1).map((list, idx) => {
        return (
          <Box key={idx} style={{ marginTop: "16px" }}>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <Typography variant="h2">{list.category}</Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={3}>
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
