import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import LottieAnimation from "../../helpers/lottie";
import LoginAnimation from "../../Animations/login-animation.json";
import LoginForm from "./form";
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
          <Typography variant="h1">BookFlix</Typography>
          <Typography variant="h2">All Your Books In One Place</Typography>
        </Grid>
        <Grid container direction="row">
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <LottieAnimation lotti={LoginAnimation} height={300} width={300} />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <LoginForm />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginView;
