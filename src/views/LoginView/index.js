import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import LottieAnimation from "../../helpers/lottie";
import LoginAnimation from "../../Animations/login-animation.json";
import LoginForm from "./form";
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const LoginView = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <LottieAnimation lotti={LoginAnimation} height={300} width={300} />
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <LoginForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginView;
