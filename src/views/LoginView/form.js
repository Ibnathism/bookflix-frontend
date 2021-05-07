import { Box, TextField, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiTextField-root": {
      background: theme.palette.info.main,
      width: 225,
      borderRadius: 4,
      marginBottom: theme.spacing(1),
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
  const handleLogin = () => {
    console.log("login");
  };

  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Typography variant="h1">BookFlix</Typography>
        <Typography variant="h2">All Your Books In One Place</Typography>
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
            type="password"
            id="password"
            label="Password"
          />
          <Button
            onClick={handleLogin}
            type="submit"
            variant="contained"
            color="secondary"
          >
            Login
          </Button>
        </form>
        <div className={classes.signupText}>
          <Typography variant="h3">New on BookFlix?</Typography>
          <Typography className={classes.signup} variant="h4">
            Signup
          </Typography>
        </div>
      </Box>
    </>
  );
};

export default LoginForm;
