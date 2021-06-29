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
import { LOGIN } from "../../graphql/Mutations";
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
    justifyContent: "flex-start",
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

const LoginForm = () => {
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [login, { data, loading }] = useMutation(LOGIN, {
    variables: {
      username: username,
      password: password,
    },
    onCompleted: (data) => {
      console.log(data);
      const token = JSON.parse(JSON.stringify(data.login.token));
      localStorage.setItem("bookflix-token", token);
      history.push("/home");
    },
    onError: (error) => {
      console.log(error);
      setShowErrorAlert(true);
    },
  });

  const handleLogin = () => {
    setShowErrorAlert(false);
    if (!data) login();
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
