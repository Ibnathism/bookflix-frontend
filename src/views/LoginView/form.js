import { Box, TextField, Typography } from "@material-ui/core";
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
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      background: theme.palette.info.main,
      width: 200,
      borderRadius: "8px",
      border: "1px solid",
    },
  },
}));
const LoginForm = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Typography variant="h1">BookFlix</Typography>
        <Typography variant="h2">All Your Books In One Place</Typography>
        <form className={classes.form}>
          <TextField variant="outlined" id="username" label="Username" />
        </form>
      </Box>
    </>
  );
};

export default LoginForm;
