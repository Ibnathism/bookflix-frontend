import { Grid, Box, Container } from "@material-ui/core";
//import books from "../../data/onboarding.json";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";

import { GET_FILTERED_BOOK } from "../../graphql/Queries";
import { useLazyQuery } from "@apollo/client";

import { useMutation } from "@apollo/client";
import { SET_FAV_GENRE, SET_FAV_AUTHOR } from "../../graphql/Mutations";

import LottieAnimation from "../../helpers/lottie";
import LoadAnimation from "../../animations/feed-loading.json";

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

  const [
    getFilteredBookByGenre,
    {
      data: genreFilteredData,
      loading: loadingGenre,
      error: genreFilteredError,
    },
  ] = useLazyQuery(GET_FILTERED_BOOK, {
    variables: {
      filter: {
        genres: genreSelected.map((genre) => genre.id),
      },
    },
    onCompleted: () => {
      //console.log(data);
      var tempData = [...bookData];

      var response = JSON.parse(JSON.stringify(genreFilteredData.books));
      response.books.forEach((item) => {
        item.selected = false;
        tempData.push(item);
      });
      //console.log(response);
      setBookData(tempData);
    },
    onError: () => {
      console.log(genreFilteredError);
      setBookData([]);
    },
  });

  const [
    getFilteredBookByAuthor,
    {
      data: authorFilteredData,
      loading: loadingAuthor,
      error: authorFilteredError,
    },
  ] = useLazyQuery(GET_FILTERED_BOOK, {
    variables: {
      filter: {
        authors: authorSelected.map((author) => author.id),
      },
    },
    onCompleted: () => {
      //console.log(data);
      var tempData = [...bookData];

      var response = JSON.parse(JSON.stringify(authorFilteredData.books));
      response.books.forEach((item) => {
        item.selected = false;
        tempData.push(item);
      });
      //console.log(response);
      setBookData(tempData);
    },
    onError: () => {
      console.log(authorFilteredError);
      setBookData([]);
    },
  });

  const [setFavGenre] = useMutation(SET_FAV_GENRE, {
    variables: {
      genreIds: genreSelected.map((genre) => genre.id),
      operation: "add",
    },
    onCompleted: () => {
      console.log("Successfully added fav genre");
    },
    onError: () => {
      console.log("Couldn't add fav genre");
    },
  });

  const [setFavAuthor] = useMutation(SET_FAV_AUTHOR, {
    variables: {
      authorIds: authorSelected.map((author) => author.id),
      operation: "add",
    },
    onCompleted: () => {
      console.log("Successfully added fav author");
    },
    onError: () => {
      console.log("Couldn't add fav author");
    },
  });

  useEffect(() => {
    setFavGenre();
  }, [setFavGenre]);

  useEffect(() => {
    setFavAuthor();
  }, [setFavAuthor]);

  useEffect(() => {
    getFilteredBookByGenre();
    getFilteredBookByAuthor();
  }, [getFilteredBookByAuthor, getFilteredBookByGenre]);

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
        {loadingGenre || loadingAuthor ? (
          <Container>
            <LottieAnimation lotti={LoadAnimation} height={500} width={500} />
          </Container>
        ) : (
          <>
            {bookData.map((item, id) => {
              return (
                <Grid item key={id} md={2} xs={6} className={classes.container}>
                  <Box
                    className={classes.box}
                    style={{
                      border: item.selected ? "10px solid #80DEEA" : "none",
                    }}
                    onClick={() => onClickHandler(item.id)}
                  >
                    {item.coverImageUrl ? (
                      <img
                        className={classes.imageContainer}
                        src={`https://bookflix-dev.s3.ap-southeast-1.amazonaws.com/${item.coverImageUrl}`}
                        alt={item.title}
                      />
                    ) : (
                      <></>
                    )}
                  </Box>
                </Grid>
              );
            })}
          </>
        )}
      </Grid>
    </>
  );
};

export default BooksOnboard;
