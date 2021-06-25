import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import BooksOnboard from "./books";
import GenresOnboard from "./genres";
import AuthorsOnboard from "./authors";
import GlobalLayout from "../../layouts/GlobalLayout";

const useStyles = makeStyles((theme) => ({
  box: {
    margin: "32px",
  },
}));

const OnboardingView = () => {
  const classes = useStyles();
  return (
    <GlobalLayout>
      <Container>
        <Box className={classes.box}>
          <Grid
            container
            spacing={5}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h2">
                Select at least 5 books you like !
              </Typography>
            </Grid>
            <Grid item>
              <GenresOnboard />
            </Grid>
            <Grid item>
              <AuthorsOnboard />
            </Grid>
            <Grid item>
              <BooksOnboard />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </GlobalLayout>
  );
};

export default OnboardingView;
