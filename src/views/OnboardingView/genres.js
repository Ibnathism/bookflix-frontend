import { Grid, Typography, Box, Container } from "@material-ui/core";
import constants from "../../data/constants.json";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/styles";
import { GET_ALL_GENRE } from "../../graphql/Queries";
import { useLazyQuery } from "@apollo/client";
import LottieAnimation from "../../helpers/lottie";
import LoadAnimation from "../../animations/feed-loading.json";

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
    lineHeight: "1.15",
  },
}));

const GenresOnboard = ({ setGenreSelected }) => {
  const theme = useTheme();
  const classes = useStyles();

  const [genreData, setGenreData] = useState([]);
  //const [tempSeparator, setTempSeparator] = useState(0);
  const [tempGenreData, setTempGenreData] = useState([]);

  const [getAllGenre, { data, loading, error }] = useLazyQuery(GET_ALL_GENRE, {
    onCompleted: () => {
      //console.log(data.genres.genres);
      var response = JSON.parse(JSON.stringify(data.genres));
      response.genres.forEach((item) => {
        item.selected = false;
      });
      //console.log(response);
      setGenreData(response.genres);

      let temp = [...response.genres];
      setTempGenreData(temp);
    },
    onError: () => {
      setGenreData([]);
      console.log(error);
    },
  });

  useEffect(() => {
    getAllGenre();
  }, [getAllGenre]);

  const onClickHandler = (id) => {
    const newItems = [...genreData];
    var item = genreData.findIndex((obj) => obj.id === id);
    newItems[item].selected = !newItems[item].selected;
    setGenreData(newItems);

    var myFav = genreData.filter((item) => item.selected);
    setGenreSelected(myFav);
  };

  const showListItem = (tempSeparator, listname) => {
    let listItems = [];
    let id = tempSeparator;
    for (; id < genreData.length; id++) {
      let item = tempGenreData[id];
      if (listname < item.name[0]) {
        tempSeparator = id;
        break;
      }
      if (item.name.startsWith(listname)) {
        listItems.push(
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
      }
    }

    return listItems;
  };

  return (
    <>
      <Grid container spacing={3}>
        {loading || genreData.length === 0 ? (
          <Container>
            <LottieAnimation lotti={LoadAnimation} height={500} width={500} />
          </Container>
        ) : (
          <Grid container spacing={3}>
            {(() => {
              let alphabets = [];
              let tempSeparator = 0;
              for (let i = 0; i < 26; i++) {
                let listname = (i + 10).toString(36).toUpperCase();
                alphabets.push(
                  <Grid key={i} item md={12} xs={12}>
                    {(() => {
                      const listItems = showListItem(tempSeparator, listname);
                      return (
                        <>
                          {listItems.length === 0 ? (
                            <></>
                          ) : (
                            <Grid container spacing={3}>
                              <Grid item md={12} xs={12}>
                                <Typography variant="h2">{listname}</Typography>
                              </Grid>
                              <Grid item md={12} xs={12}>
                                <Grid container spacing={3}>
                                  {listItems}
                                </Grid>
                              </Grid>
                            </Grid>
                          )}
                        </>
                      );
                    })()}
                  </Grid>
                );
              }
              return alphabets;
            })()}
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default GenresOnboard;
