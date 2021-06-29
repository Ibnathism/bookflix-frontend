import {
  Box,
  TextField,
  Typography,
  Button,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "../../graphql/Mutations";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useState } from "react";
import LottieAnimation from "../../helpers/lottie";
import LoadAnimation from "../../animations/feed-loading.json";

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
  const history = useHistory();
  const classes = useStyles();

  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [signup, { data, loading, error }] = useMutation(SIGNUP, {
    variables: {
      username: username,
      name: name,
      password: password,
    },
    onCompleted: (data) => {
      console.log(data);
      const token = JSON.parse(JSON.stringify(data.signup.token));
      localStorage.setItem("bookflix-token", token);
      history.push("/onboarding");
    },
    onError: (error) => {
      console.log(error);
      setShowErrorAlert(true);
    },
  });

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setPasswordMismatch(true);
    } else {
      setShowErrorAlert(false);
      setPasswordMismatch(false);
      if (!data || error) signup();
    }
  };

  return (
    <>
      <Box className={classes.root}>
        {showErrorAlert ? (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Signup Failed -- <strong>Invalid Credentials</strong>
          </Alert>
        ) : (
          <></>
        )}
        {passwordMismatch ? (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Signup Failed -- <strong>Passwords Mismatch</strong>
          </Alert>
        ) : (
          <></>
        )}
        {loading ? (
          <Container>
            <LottieAnimation lotti={LoadAnimation} height={200} width={200} />
          </Container>
        ) : (
          <></>
        )}
        <form className={classes.form}>
          <TextField
            variant="filled"
            type="text"
            InputLabelProps={{ color: "primary" }}
            id="username"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="filled"
            type="text"
            InputLabelProps={{ color: "primary" }}
            id="name"
            label="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="filled"
            type="password"
            id="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            variant="filled"
            type="password"
            id="confirmPassword"
            label="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            onClick={handleSignup}
            variant="contained"
            color="primary"
            style={{ margin: "16px" }}
          >
            Sign Up
          </Button>
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
