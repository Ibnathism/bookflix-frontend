import { Box, TextField, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../graphql/Queries";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
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
const LoginForm = () => {
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [login, { data, error }] = useMutation(LOGIN, {
    variables: {
      username: username,
      password: password,
    },
    onCompleted: () => {
      history.push("/home");
    },
    onError: () => {
      setShowErrorAlert(true);
    },
  });

  const handleLogin = () => {
    login();
    //console.log(data);
    if (!error && data && data.login.token) {
      const token = data.login.token;
      localStorage.setItem("token", token);
      //console.log(token);
    }
  };
  return (
    <>
      <Box className={classes.root}>
        {showErrorAlert ? (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Login Failed -- <strong>Invalid Credentials</strong>
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
            type="password"
            id="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={handleLogin}
            variant="contained"
            color="primary"
            style={{ margin: "16px" }}
          >
            Login
          </Button>
        </form>
        <div className={classes.signupText}>
          <Typography variant="h3">New on BookFlix?</Typography>
          <RouterLink to="signup">
            <Typography className={classes.signup} variant="h4">
              Signup
            </Typography>
          </RouterLink>
        </div>
      </Box>
    </>
  );
};

export default LoginForm;
