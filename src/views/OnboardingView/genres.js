import { Grid, Typography, Box } from "@material-ui/core";
import genres from "../../data/genres.json";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "300px",
    width: "250px",
    height: "100px",
    borderRadius: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "32px",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.8",
    },
  },
}));

const GenresOnboard = ({ setGenreSelected }) => {
  const theme = useTheme();
  const classes = useStyles();
  const [genreData, setGenreData] = useState([]);

  useEffect(() => {
    genres.forEach((item) => {
      item.selected = false;
    });
    setGenreData(genres);
    //console.log(genreData);
  }, []);

  const onClickHandler = (id) => {
    //console.log("clicked", id);
    const newItems = [...genreData];
    var item = genreData.findIndex((obj) => obj.id === id);
    newItems[item].selected = !newItems[item].selected;
    setGenreData(newItems);

    var myFav = genreData.filter((item) => item.selected);
    setGenreSelected(myFav);
    //console.log(genreData);
  };
  return (
    <>
      <Grid container spacing={3}>
        {genreData.map((item, id) => {
          return (
            <Grid
              key={id}
              item
              md={3}
              xs={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                className={classes.root}
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
                    fontSize: "24px",
                  }}
                >
                  {item.name}
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
