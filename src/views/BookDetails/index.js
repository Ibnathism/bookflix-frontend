import CommonLayout from "../../layouts/CommonLayout";
import { Container, Grid, Typography, Chip, Button } from "@material-ui/core";
import Lists from "../ListsView";
import details from "../../data/details.json";
const DetailsView = () => {
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
                          <Grid item>
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
                          <Grid item>
                            <Typography variant="h3">
                              {review.review}
                            </Typography>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Start Reading
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item>
          <Lists />
        </Grid>
      </Grid>
    </CommonLayout>
  );
};

export default DetailsView;
