import { Grid, Box } from "@material-ui/core";
import books from "../../data/onboarding.json";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "160px",
    height: "223px",
    background: theme.palette.primary.main,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.4",
    },
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
  },
}));

const BooksOnboard = ({ setBookSelected }) => {
  const classes = useStyles();
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    books.forEach((item) => {
      item.selected = false;
    });
    setBookData(books);
  }, []);

  const onClickHandler = (id) => {
    const newItems = [...bookData];
    var item = bookData.findIndex((obj) => obj.id === id);
    newItems[item].selected = !newItems[item].selected;
    setBookData(newItems);

    var myFav = bookData.filter((item) => item.selected);
    setBookSelected(myFav);
  };

  return (
    <>
      <Grid container spacing={3}>
        {bookData.map((item, id) => {
          return (
            <Grid item key={id} md={2} xs={6} className={classes.container}>
              <Box
                className={classes.box}
                style={{
                  border: item.selected ? "6px solid aqua" : "none",
                }}
                onClick={() => onClickHandler(item.id)}
              >
                <img
                  className={classes.imageContainer}
                  src={item.imageUrl}
                  alt="book"
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default BooksOnboard;
