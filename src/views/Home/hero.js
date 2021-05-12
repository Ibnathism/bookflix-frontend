import { Box, Typography, Container, Grid } from "@material-ui/core";
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
                <img width="80%" height="80%" src="/images/10.jpg" alt="2nd" />
              </Grid>
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
                <img
                  width="100%"
                  height="100%"
                  src="/images/10.jpg"
                  alt="2nd"
                />
              </Grid>
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
                <img width="80%" height="80%" src="/images/10.jpg" alt="2nd" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HeroSection;
