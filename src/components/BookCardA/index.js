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
  },
}));
const BookCardA = ({ imageUrl }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <img alt="book" height="80%" width="100%" src={imageUrl} />
        <div
          style={{
            width: "100%",
            height: "20%",
          }}
        ></div>
      </Box>
    </>
  );
};

export default BookCardA;
