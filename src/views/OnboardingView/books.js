import { Grid, Box } from "@material-ui/core";
//import books from "../../data/onboarding.json";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";

import { GET_FILTERED_BOOK } from "../../graphql/Queries";
import { useLazyQuery } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    minWidth: "960px",
  },
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

const BooksOnboard = ({ setBookSelected, genreSelected, authorSelected }) => {
  const classes = useStyles();
  const [bookData, setBookData] = useState([]);

  const [getFilteredBook, { data, error }] = useLazyQuery(GET_FILTERED_BOOK, {
    variables: {
      filter: {
        genres: genreSelected.map((genre) => genre.id),
        authors: authorSelected.map((author) => author.id),
      },
    },
    onCompleted: () => {
      console.log(data);
      var response = JSON.parse(JSON.stringify(data.books));
      response.books.forEach((item) => {
        item.selected = false;
      });
      console.log(response);
      setBookData(response.books);
    },
    onError: () => {
      console.log(error);
      setBookData([]);
    },
  });

  useEffect(() => {
    getFilteredBook();
    // books.forEach((item) => {
    //   item.selected = false;
    // });
    // setBookData(books);
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
      <Grid container spacing={3} className={classes.outerContainer}>
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
                  src={`https://bookflix-dev.s3.ap-southeast-1.amazonaws.com/${item.coverImageUrl}`}
                  alt={item.title}
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
