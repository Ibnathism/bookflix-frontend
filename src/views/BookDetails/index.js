import CommonLayout from "../../layouts/CommonLayout";
import { Container, Grid, Typography, Chip, Button } from "@material-ui/core";
import Feed from "../../components/Feed";
import details from "../../data/details.json";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { GET_FEED } from "../../graphql/Queries";
import { useLazyQuery } from "@apollo/client";
const DetailsView = () => {
  const [feed, setFeed] = useState([]);

  const [getFeed, { data, error }] = useLazyQuery(GET_FEED, {
    variables: {
      bookCountEachCategory: 10,
      categoryCount: 10,
    },
    onCompleted: () => {
      console.log("on completed of details", data.feed);
      const res = JSON.parse(JSON.stringify(data.feed));
      setFeed(res);
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
      <Grid
        container
        direction="column"
        spacing={3}
        style={{ marginTop: "16px" }}
      >
        <Grid item>
          <Container>
            <Grid container spacing={3} alignItems="center" justify="center">
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <img
                  width="420px"
                  style={{ borderRadius: "8px" }}
                  src={details.imageUrl}
                  alt={details.name}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <Grid
                  container
                  direction="column"
                  spacing={6}
                  alignItems="center"
                  justify="center"
                >
                  <Grid item>
                    <Typography variant="h1">{details.name}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h2">By {details.writer}</Typography>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={3}>
                      {details.genreList.map((genre, id) => {
                        return (
                          <Grid item key={id}>
                            <Chip
                              variant="default"
                              color="secondary"
                              label={genre.name}
                            />
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={3}>
                      {details.reviews.map((review, id) => {
                        return (
                          <Grid item key={id}>
                            <Typography variant="h3">
                              {review.review}
                            </Typography>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                  <Grid item>
                    <RouterLink to="/read">
                      <Button variant="contained" color="primary">
                        Start Reading
                      </Button>
                    </RouterLink>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item>
          <Feed feed={feed} />
        </Grid>
      </Grid>
    </CommonLayout>
  );
};

export default DetailsView;
