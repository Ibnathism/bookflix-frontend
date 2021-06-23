import { Box, TextField, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  form: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiTextField-root": {
      background: theme.palette.info.main,
      width: 225,
      borderRadius: 4,
      marginBottom: theme.spacing(2),
    },
  },
  signupText: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  signup: {
    marginLeft: theme.spacing(1),
    textDecoration: "underline",
  },
}));
const SignupForm = () => {
  const handleLogin = () => {
    console.log("login");
  };

  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <form className={classes.form}>
          <TextField
            variant="filled"
            type="text"
            InputLabelProps={{ color: "primary" }}
            id="username"
            label="Username"
          />
          <TextField
            variant="filled"
            type="text"
            InputLabelProps={{ color: "primary" }}
            id="email"
            label="Email"
          />
          <TextField
            variant="filled"
            type="password"
            id="password"
            label="Password"
          />
          <TextField
            variant="filled"
            type="password"
            id="confirmPassword"
            label="Confirm Password"
          />
          <RouterLink to="onboarding">
            <Button
              onClick={handleLogin}
              variant="contained"
              color="primary"
              style={{ margin: "16px" }}
            >
              Sign Up
            </Button>
          </RouterLink>
        </form>
        <div className={classes.signupText}>
          <Typography variant="h3">Already have an account?</Typography>
          <RouterLink to="login">
            <Typography className={classes.signup} variant="h4">
              Login
            </Typography>
          </RouterLink>
        </div>
      </Box>
    </>
  );
};

export default SignupForm;
