import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "160px",
    height: "223px",
    background: theme.palette.primary.main,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
  },
}));

const BookSelectCard = ({ imageUrl }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img className={classes.imageContainer} src={imageUrl} alt="book" />
    </Box>
  );
};

export default BookSelectCard;
