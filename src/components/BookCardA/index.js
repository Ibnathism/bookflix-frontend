import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "212px",
    height: "375px",
    background: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    borderRadius: "8px 8px 8px 8px",
  },
  upperContainer: {
    width: "100%",
    height: "80%",
    borderRadius: "8px 8px 0px 0px",
  },
  lowerContainer: {
    width: "100%",
    height: "20%",
    background: theme.palette.secondary.main,
    borderRadius: "0px 0px 8px 8px",
  },
}));
const BookCardA = ({ imageUrl }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <img className={classes.upperContainer} alt="book" src={imageUrl} />
        <div className={classes.lowerContainer}></div>
      </Box>
    </>
  );
};

export default BookCardA;
