import { Box, Typography, Button } from "@material-ui/core";
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  review: {
    padding: theme.spacing(2),
  },
  button: {
    width: "100px",
    height: "43px",
    margin: theme.spacing(2),
    background: theme.palette.background.default,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #081C15",
    borderRadius: theme.spacing(0.5),
  },
  buttonText: {
    color: theme.palette.info.main,
  },
}));
const BookCardB = ({ imageUrl, review }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <img className={classes.leftContainer} alt="book" src={imageUrl} />
        <div className={classes.rightContainer}>
          <Typography className={classes.review} variant="body1">
            {review}
          </Typography>
          <div className={classes.button}>
            <Typography className={classes.buttonText} variant="body1">
              Read Later
            </Typography>
          </div>
        </div>
      </Box>
    </>
  );
};

export default BookCardB;
