import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "50%",
    top: "20%",
    transform: "translate(-50%, -40%)",
  },
}));

const OnboardingView = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2">
            Select at least 5 books you like !
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OnboardingView;
