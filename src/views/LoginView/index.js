import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
  },
}));
const LoginView = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default LoginView;
