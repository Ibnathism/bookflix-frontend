import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import SignupForm from "./form";
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "50%",
    top: "40%",
    transform: "translate(-50%, -40%)",
  },
}));
const LoginView = () => {
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
          <Typography variant="h1">Signup</Typography>
          <Typography variant="h2">Create an account on BookFlix</Typography>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <SignupForm />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginView;
