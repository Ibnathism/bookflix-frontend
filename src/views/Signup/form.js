import { Box, TextField, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "../../graphql/Mutations";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useState } from "react";

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
    "& .MuiInputBase-root": {
      marginBottom: theme.spacing(2),
    },
    "& .MuiInputLabel-root": {
      fontSize: "22px",
      paddingLeft: theme.spacing(2),
    },
    "& .MuiFilledInput-input": {
      background: theme.palette.info.main,
      width: 300,
      borderRadius: 4,
      paddingLeft: theme.spacing(3.5),
      fontSize: "20px"
    },
    "& .MuiButton-label": {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingTop: theme.spacing(0.4),
      paddingBottom: theme.spacing(0.4),
      fontSize: "18px"
    },
  },
  signupText: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "20px",
  },
  signup: {
    fontSize: "20px",
    marginLeft: theme.spacing(1),
    textDecoration: "underline"
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

  const [signup, { data, error }] = useMutation(SIGNUP, {
    variables: {
      username: username,
      name: name,
      password: password,
    },
    onCompleted: () => {
      history.push("/onboarding");
    },
    onError: () => {
      setShowErrorAlert(true);
    },
  });

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setPasswordMismatch(true);
    } else {
      setShowErrorAlert(false);
      setPasswordMismatch(false);
      signup();
      //console.log(data);
      if (!error && data && data.signup.token) {
        const token = data.signup.token;
        localStorage.setItem("token", token);
        //console.log(token);
      }
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
