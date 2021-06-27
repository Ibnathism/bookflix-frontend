import { Grid, Typography, Box } from "@material-ui/core";
//import genres from "../../data/genres.json";
import constants from "../../data/constants.json";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/styles";

import { GET_ALL_GENRE } from "../../graphql/Queries";
import { useLazyQuery } from "@apollo/client";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "280px",
    height: "100px",
    borderRadius: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.8",
    },
  },
  text: {
    fontSize: "22px",
    padding: "32px",
  },
}));

const GenresOnboard = ({ setGenreSelected }) => {
  const theme = useTheme();
  const classes = useStyles();
  const [genreData, setGenreData] = useState([]);

  const [getAllGenre, { data, error }] = useLazyQuery(GET_ALL_GENRE, {
    onCompleted: () => {
      console.log(data.genres.genres);
      var response = JSON.parse(JSON.stringify(data.genres));
      response.genres.forEach((item) => {
        item.selected = false;
      });
      console.log(response);
      setGenreData(response.genres);
    },
    onError: () => {
      setGenreData([]);
      console.log(error);
    },
  });

  useEffect(() => {
    getAllGenre();
    // genres.forEach((item) => {
    //   item.selected = false;
    // });
    // setGenreData(genres);
  }, [getAllGenre]);

  const onClickHandler = (id) => {
    const newItems = [...genreData];
    var item = genreData.findIndex((obj) => obj.id === id);
    newItems[item].selected = !newItems[item].selected;
    setGenreData(newItems);

    var myFav = genreData.filter((item) => item.selected);
    setGenreSelected(myFav);
  };
  return (
    <>
      <Grid container spacing={3}>
        {genreData.map((item, id) => {
          return (
            <Grid key={id} item md={3} xs={6} className={classes.container}>
              <Box
                className={classes.box}
                style={{
                  backgroundColor: item.selected
                    ? theme.palette.secondary.main
                    : theme.palette.primary.main,
                }}
                onClick={() => onClickHandler(item.id)}
              >
                <Typography
                  style={{
                    color: item.selected
                      ? theme.palette.primary.dark
                      : theme.palette.primary.light,
                  }}
                  className={classes.text}
                >
                  {item.name.length >= constants.genreNameMaxLength
                    ? `${item.name}`.substr(0, constants.genreNameMaxLength) +
                      " ..."
                    : `${item.name}`}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default GenresOnboard;
