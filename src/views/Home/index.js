import CommonLayout from "../../layouts/CommonLayout";
import { Box, Typography, Container, Grid, Button } from "@material-ui/core";
//import heroSectionBooks from "../../data/hero.json";
//import { Link as RouterLink } from "react-router-dom";
import Feed from "../../components/Feed";
import { useState, useEffect } from "react";
import { GET_FEED } from "../../graphql/Queries";
import { useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router";
import LottieAnimation from "../../helpers/lottie";
import LoadAnimation from "../../animations/feed-loading.json";

const HomeView = () => {
  const history = useHistory();
  const [feed, setFeed] = useState([]);
  const [topPicks, setTopPicks] = useState({
    books: [],
  });

  const [getFeed, { data, loading, error }] = useLazyQuery(GET_FEED, {
    variables: {
      bookCountEachCategory: 10,
      categoryCount: 10,
    },
    onCompleted: () => {
      console.log("on completed of home", data.feed);
      const res = JSON.parse(JSON.stringify(data.feed));
      setFeed(res);
      setTopPicks(res[0]);
    },
    onError: () => {
      setFeed([]);
      console.log(error);
    },
  });
  useEffect(() => {
    getFeed();
  }, [getFeed]);

  return (
    <CommonLayout>
      {loading ? (
        <Container>
          <LottieAnimation lotti={LoadAnimation} height={500} width={500} />
        </Container>
      ) : (
        <Grid container direction="column">
          <Grid item>
            <Container>
              <Box style={{ margin: "16px" }}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="h1">Top Chart</Typography>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      spacing={3}
                      direction="row"
                      alignItems="center"
                      justify="center"
                      style={{ marginTop: "16px" }}
                    >
                      {topPicks.books.slice(0, 3).map((book, id) => {
                        var width = id === 1 ? "100%" : "80%";
                        return (
                          <Grid
                            item
                            key={id}
                            xs={12}
                            md={4}
                            lg={4}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Grid
                              container
                              direction="column"
                              alignItems="center"
                              justify="center"
                              spacing={3}
                            >
                              {
                                //TODO: Need rank for books from backend
                              }
                              <Typography variant="h1">
                                # {id === 0 ? 2 : id === 2 ? 3 : 1}
                              </Typography>
                              <img
                                width={width}
                                src={`https://bookflix-dev.s3.ap-southeast-1.amazonaws.com/${book.coverImageUrl}`}
                                alt={book.title}
                              />
                              {/* <RouterLink to="/home/1"> */}
                              <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={() => history.push(`/home/${book.id}`)}
                                style={{
                                  margin: "16px",
                                  height: "40px",
                                  width: "100px",
                                }}
                              >
                                Read
                              </Button>
                              {/* </RouterLink> */}
                            </Grid>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Grid>
          <Grid item>
            <Feed feed={feed} />
          </Grid>
        </Grid>
      )}
    </CommonLayout>
  );
};

export default HomeView;
