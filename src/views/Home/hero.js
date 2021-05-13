import { Box, Typography, Container, Grid, Button } from "@material-ui/core";
import heroSectionBooks from "../../data/hero.json";
const HeroSection = () => {
  return (
    <Container>
      <Box style={{ margin: "16px" }}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography variant="h1">Reader's Choice</Typography>
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
              {heroSectionBooks.map((book, id) => {
                var width = book.rank === 1 ? "100%" : "80%";
                return (
                  <Grid
                    item
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
                      <Typography variant="h1"># {book.rank}</Typography>
                      <img width={width} src={book.imageUrl} alt={book.name} />
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{
                          margin: "16px",
                          height: "40px",
                          width: "100px",
                        }}
                      >
                        Read
                      </Button>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HeroSection;
