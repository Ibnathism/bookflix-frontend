import { Grid, Typography, Box } from "@material-ui/core";
import genres from "../../data/genres.json";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    height: "100px",
    borderRadius: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "16px",
    cursor: "pointer",
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.light,
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
                style={{
                  backgroundColor: item.selected
                    ? "#40916c"
                    : theme.palette.secondary.main,
                }}
                className={classes.root}
                id="book-card"
                onClick={() => onClickHandler(item.id)}
                role="button"
              >
                <Typography
                  style={{
                    color: "#030c08",
                    fontSize: "20px",
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
