import {
  Typography,
  Button,
  Container,
  Avatar,
  Box,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
}));
const BookCardA = ({ imageUrl }) => {
  const classes = useStyles();
  return (
    <>
      <div style={{ height: "375px", width: "260px" }}>
        <img alt="book" height="80%" width="100%" src={imageUrl} />
        <div
          className={classes.root}
          style={{
            width: "100%",
            height: "20%",
          }}
        ></div>
      </div>
    </>
  );
};

export default BookCardA;
