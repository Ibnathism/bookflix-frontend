import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import onboardings from "../../data/onboarding.json";
import BookSelectCard from "../../components/BookSelectCard";
const useStyles = makeStyles((theme) => ({
  box: {
    width: "1000px",
  },
}));

const OnboardingView = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.box}>
        <Grid
          container
          spacing={3}
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
            <Grid container spacing={3}>
              {onboardings.map((item, id) => {
                return (
                  <Grid item md={3} xs={6}>
                    <BookSelectCard imageUrl={item.imageUrl} />
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

export default OnboardingView;
