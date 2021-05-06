import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "336px",
    height: "267px",
    background: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderRadius: "8px",
  },
  leftContainer: {
    width: "50%",
    height: "100%",
    borderRadius: "8px 0px 0px 8px",
  },
  rightContainer: {
    width: "50%",
    height: "100%",
    background: theme.palette.secondary.main,
    borderRadius: "0px 8px 8px 0px",
  },
  genre: {
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  genreName: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  icons: {
    padding: theme.spacing(0, 1, 2, 1),
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
}));
const BookCardB = ({ imageUrl, genreList }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <img className={classes.leftContainer} alt="book" src={imageUrl} />
        <div className={classes.rightContainer}></div>
      </Box>
    </>
  );
};

export default BookCardB;
